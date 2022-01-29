import { Component } from "react";
import Link from "next/link";

export default class NavBar extends Component {
  render() {
    return (
      <Link href="/">
        <div className="w-fit transition hover:scale-105">
          <a
            className="p-1 font-light text-sm text-zinc-700 dark:text-zinc-300 cursor-pointer
          border border-solid border-transparent rounded-lg hover:border-zinc-700 hover:dark:border-zinc-300"
          >
            ← Home
          </a>
        </div>
      </Link>
    );
  }
}
