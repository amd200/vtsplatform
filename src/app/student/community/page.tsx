import { CreatePost } from "@/features/student/components/community/CreatePost";
import { PostCard } from "@/features/student/components/community/PostCard";
import React from "react";

function page() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <CreatePost />
      <PostCard />
      <PostCard />
    </div>
  );
}

export default page;
