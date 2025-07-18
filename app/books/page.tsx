import BaseLayout from "@/components/BaseLayout";
import BookCard from "@/components/pageContent/books/BookCard";
import { importCSVDataAsJson } from "@/lib/sheetsConnector";
import type Book from "@/types/Book";
import Link from "next/link";
import { Key } from "react";

export const revalidate = 60;

export default async function Page(): Promise<React.ReactElement> {
  const books: Array<Book> = await getBooks().then((bookList) =>
    bookList.data
      .sort((a: Book, b: Book) => {
        // Sorting by read date, newest --> oldest
        return Date.parse(b.dateRead) - Date.parse(a.dateRead);
      })
      .slice(0, 15)
  );

  return (
    <BaseLayout>
      <div className="mx-auto flex flex-col gap-6">
        <section className="mx-auto max-w-2xl mb-0 sm:mb-4">
          <h1>Books</h1>
          <div className="prose prose-stone dark:prose-invert">
            <p>
              I love reading. Lots of fantasy, some scifi, occasionally
              non-fiction (I usually enjoy it, it's just not what I'm drawn to).
              I was a heavy reader as a kid, fell off during high school when
              reading was a requirement for class (common story), and then came
              back to it when I moved to Singapore just before the pandemic.
            </p>
            <p>
              I believe <em>owning things</em> also means{" "}
              <em>taking on the responsibility of taking care of them</em>.
              Between not wanting this responsibility and harboring deep
              feelings of anti-consumerism, I choose to primarily read ebooks
              instead of owning physical books.
            </p>
            <p>
              I check out books from one of the many libraries I have a card for
              (
              <Link href={"/library-cards"}>
                check out my library card collection!
              </Link>
              ), using{" "}
              <a href="https://libbyapp.com/" target="_blank">
                the Libby app
              </a>
              , and read them on my Kindle. I've searched for solid non-Amazon
              ereader alternatives, but none of them seem to have the right
              compatibility with Libby to allow me to use multiple library
              cards. If you don't suffer from this inane, self-inflicted
              constraint, I highly recommend{" "}
              <a
                href="https://us.kobobooks.com/collections/ereaders"
                target="_blank"
              >
                Kobo ereaders
              </a>
              .
            </p>
          </div>
          <hr className="mt-4 border-stone-400 dark:border-stone-500 sm:hidden" />
        </section>
        <section>
          <h2>What I've been reading</h2>
          <p className="prose prose-stone dark:prose-invert">
            These are my most recent reads. See more on{" "}
            <a
              href="https://app.thestorygraph.com/profile/bk610"
              target="_blank"
              className=""
            >
              The StoryGraph
            </a>
            .
          </p>
          <div className="py-5 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {books.map((book: Book, k: Key) => {
              return <BookCard book={book} key={k} />;
            })}
          </div>
        </section>
        <section className="prose prose-stone dark:prose-invert max-w-none">
          <p className="text-sm">
            Book cover image data comes from the{" "}
            <a
              href="https://openlibrary.org/dev/docs/api/covers?ref=baileykane.co"
              target="_blank"
            >
              Open Library Covers API
            </a>
            .
          </p>
        </section>
      </div>
    </BaseLayout>
  );
}

async function getBooks(): Promise<{
  data: Array<Book>;
}> {
  const booksList = await importCSVDataAsJson(
    process.env.NEXT_PUBLIC_BOOKS_DATA_URL
  );

  return booksList;
}
