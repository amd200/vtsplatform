"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { useAddCommentMutation, useDeleteCommentMutation } from "../services/lessonContentApi";
import { useToastMessage } from "@/hooks/useToastMessage";
import { Comment } from "../types/student.types";
import { useSession } from "next-auth/react";
import { Trash2 } from "lucide-react";
import { BaseResponse } from "@/types/common.types";

export function CommentsSection({ executionId, lessonId, comments }: { executionId: string; lessonId: string; comments: Comment[] }) {
  const [addComment, { isLoading }] = useAddCommentMutation();
  const [deleteComment] = useDeleteCommentMutation();
  const [comment, setComment] = useState<string>("");
  const [localComments, setLocalComments] = useState<Comment[]>([]);
  const { success, error: toastError } = useToastMessage();
  const { data: session } = useSession();

  useEffect(() => {
    if (comments?.length > 0) {
      setLocalComments(comments);
    }
  }, [comments]);

  function formatArabicDateNow() {
    const date = new Date();

    const gregorian = date.toLocaleDateString("en-CA"); // yyyy-mm-dd

    const time = date.toLocaleTimeString("ar-EG", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    return `${gregorian} ${time}`;
  }

  const handleAddCommnet = async () => {
    const trimmed = comment.trim();
    if (!trimmed) return;

    try {
      const res = await addComment({
        ExecutionId: executionId,
        LessonId: lessonId,
        Comment: trimmed,
      }).unwrap();
      console.log(res);

      success("تمت إضافة تعليقك بنجاح");
      setComment("");

      const newComment: Comment = {
        Id: crypto.randomUUID(),
        CommentId: res.Data?.CommentId || "",
        Comment: trimmed,
        Date: formatArabicDateNow(),
        LessonId: lessonId,
        UserId: session?.user?.UserId || "",
        PersonName: session?.user?.StudentName || "user",
        Image: session?.user?.StudentImage || "",
      };

      setLocalComments((prev) => [newComment, ...prev]);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(session?.user?.UserId);
  const handleDeleteComment = async (commentId: string) => {
    try {
      const res = await deleteComment({ CommentId: commentId, ExecutionId: executionId, LessonId: lessonId }).unwrap();
      console.log(res);
      if (res?.Status == true) {
        setLocalComments((prev) => prev.filter((c) => c.Id !== commentId));
      }
      success("تم حذف التعليق بنجاح");
    } catch (err) {
      const error = err as BaseResponse<null>;
      toastError(error?.Message || "حدث خطأ يرجى المحاولة مرة اخرى");
    }
  };

  return (
    <Card className="w-full mt-6 shadow-none">
      <CardHeader>
        <h3 className="text-xl font-semibold">التعليقات</h3>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="flex gap-3">
          <Avatar>{session?.user?.StudentImage ? <AvatarImage src={session.user.StudentImage} /> : <AvatarFallback>أ</AvatarFallback>}</Avatar>

          <div className="w-full">
            <Textarea placeholder="اكتب تعليقك هنا..." value={comment} onChange={(e) => setComment(e.target.value)} rows={3} />

            <div className="flex justify-end mt-2">
              <Button type="button" onClick={handleAddCommnet} disabled={comment.trim().length === 0}>
                إضافة تعليق
              </Button>
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          {localComments.map((c: Comment) => (
            <div key={c.Id} className="flex gap-3 items-start justify-between">
              <div className="flex gap-3">
                <Avatar>
                  <AvatarImage src={c?.Image} />
                  <AvatarFallback>{c?.PersonName[0]}</AvatarFallback>
                </Avatar>

                <div>
                  <p dir="rtl" className="font-medium text-start">
                    {c.PersonName} • <span className="text-sm text-muted-foreground">{c.Date}</span>
                  </p>
                  <p className="text-sm mt-1 whitespace-pre-line">{c.Comment}</p>
                </div>
              </div>

              {session?.user?.UserId == c.UserId && (
                <Button variant="ghost" size="icon" onClick={() => handleDeleteComment(c.Id)} className="text-red-500 hover:text-red-700 hover:bg-red-50">
                  <Trash2 size={18} />
                </Button>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
