import { PostCommentBox } from "./PostCommentBox";
import { PostContent } from "./PostContent";
import { PostHeader } from "./PostHeader";
import { PostImages } from "./PostImages";

export function PostCard() {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <PostHeader />
      <PostContent />
      <PostImages />
      <PostCommentBox />
    </div>
  );
}
