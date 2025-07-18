"use client";

import type Book from "@/types/Book";
import { useState } from "react";
import Image from "next/image";

export default function BookCard({ book }: { book: Book }): React.ReactElement {
  const [imageError, setImageError] = useState(false);

  const formattedReadDate = new Date(book.dateRead).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
    }
  );

  return (
    <a
      target="_blank"
      href={`https://openlibrary.org/isbn/${book.isbn}`}
      className="rounded-md w-72 mx-auto sm:w-auto sm:mx-0"
    >
      <div className="p-2 rounded-md border-2 bg-stone-50 dark:bg-stone-800 border-stone-400 hover:border-stone-500 dark:border-stone-600 shadow-md hover:shadow-xl transition-all">
        <div className="relative shadow-md rounded-xs w-full aspect-book outline-solid outline-1 dark:outline-stone-400">
          <Image
            // OpenLibrary Covers API:https://openlibrary.org/dev/docs/api/covers
            src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg?default=false`}
            fill={true}
            objectFit="cover"
            alt={`The cover of ${book.title}, by ${book.author}.`}
            loading="lazy"
            onError={() => setImageError(true)}
            className={`w-full rounded-xs ${imageError && "hidden"}`}
          />
          {imageError && (
            <div className="rounded-xs h-full bg-stone-200 dark:bg-stone-700 flex items-center justify-center">
              <p className="text-sm">Book image not found.</p>
            </div>
          )}
        </div>
        <div className="prose prose-stone dark:prose-invert">
          <h3 className="text-base line-clamp-1 -mb-1 mt-3">{book.title}</h3>
          <p className="text-sm line-clamp-1">by {book.author}</p>
          <hr className="-mt-2 mb-1 border-stone-200 dark:border-stone-700" />
          <p className="text-xs line-clamp-1 text-stone-600 dark:text-stone-400">
            Read {formattedReadDate}
          </p>
        </div>
      </div>
    </a>
  );
}
