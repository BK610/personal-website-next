import { Component } from "react";
import Link from "next/link";

export default class NavBar extends Component {
  render() {
    return (
      <div className="py-2 border-b border-zinc-500 dark:border-zinc-500">
        <Link href="/">
          <div className="w-fit mr-1 inline-block group transition hover:scale-105">
            <a
              className="p-1 font-light text-sm text-zinc-700 dark:text-zinc-300 cursor-pointer
          border border-solid border-transparent rounded-lg hover:border-zinc-700 hover:dark:border-zinc-300"
            >
              <span className="inline-block group-hover:animate-bounce">←</span> Home
            </a>
          </div>
        </Link>
        <div className="w-fit mr-1 inline-block group transition hover:scale-105">
          <button onClick={() => history.back()}>
            <a
              className="p-1 font-light text-sm text-zinc-700 dark:text-zinc-300 cursor-pointer
          border border-solid border-transparent rounded-lg hover:border-zinc-700 hover:dark:border-zinc-300"
            >
              <span className="inline-block group-hover:animate-bounce">←</span> Back
            </a>
          </button>
        </div>
      </div>
    );
  }
}
