import Head from "next/head";
import Link from "next/link";
import { Component } from "react";
import { attributes, react as HomeContent } from "../content/home.md";

export default class Home extends Component {
  render() {
    let { title, sections } = attributes;
    return (
      <div className="flex flex-col h-full min-h-screen w-full min-w-screen bg-gradient-to-b from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 dark:text-gray-100 items-center">
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <div className="w-full max-w-md p-2 pb-4 space-y-4 select-none">
          <div className="pt-8 text-xl">
            <h2>{title}</h2>
          </div>
          <div className="text-lg">
            <HomeContent />
          </div>
          {sections.map((section, k) => (
            <div // Should make this into a separate component... Can be reused everywhere. And, less of a pain to see all the CSS
              className="p-2 border-solid border-2 rounded-lg even:rotate-1 odd:-rotate-1 border-violet-200 bg-gradient-to-r from-violet-100 to-orange-100 dark:from-violet-600 dark:to-orange-400 shadow-md shadow-violet-300 dark:shadow-violet-800 transition hover:from-violet-200 hover:to-orange-200 hover:shadow-lg hover:shadow-violet-300 hover:dark:from-violet-700 hover:dark:to-orange-500 hover:dark:shadow-violet-700 hover:scale-105 active:border-violet-700 active:bg-violet-200 dark:active:bg-violet-700"
              key={k}
            >
              <Link href={"/" + section.name.toLowerCase()}>
                <a>
                  <h2 className="font-medium dark:text-violet-100">
                    {section.name}
                  </h2>
                  <p className="font-light text-sm text-zinc-700 dark:text-zinc-200">
                    {section.description}
                  </p>
                  <img className="dark:invert h-8" src={section.icon}></img>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
