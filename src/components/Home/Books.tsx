import React from "react";
import TitleSection from "../shared/TitleSection";
import { fetcher } from "@/lib/api/fetcher";
import { DashBoardResponse } from "@/types/dashboard.types";
import { Book } from "@/types/common.types";
import BookCard from "../shared/BookCard";

async function Books() {
  const data = await fetcher<DashBoardResponse>(`/platform/Dashboard/AllData`);
  const books = data?.Data?.Books.filter((book: Book) => book?.IsVisible);
  console.log(books);
  return (
    <section className="py-8">
      <div className="container">
        <TitleSection title="الكتب والخدمات" />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-9 gap-y-5">
          {books?.map((course, index) => (
            <BookCard key={index} book={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Books;
