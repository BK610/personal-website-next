import Head from "next/head";
import Link from "next/link";
import { Component } from "react";
import { attributes, react as HomeContent } from "../content/home.md";

export default class Home extends Component {
  render() {
    let { title, sections } = attributes;
    return (
      <div className="flex flex-col h-full min-h-screen w-full min-w-screen bg-zinc-200 dark:bg-zinc-900 dark:text-gray-100 items-center">
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
            <div
              className="p-2 border-solid border-2 rounded-lg even:rotate-1 odd:-rotate-1 border-violet-400 bg-zinc-100 dark:bg-violet-600 shadow-md transition hover:shadow-lg hover:scale-105 active:border-violet-700 active:bg-zinc-200 dark:active:bg-violet-700"
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
