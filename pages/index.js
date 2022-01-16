import Head from "next/head";
import Link from "next/link";
import { Component } from "react";
import { attributes, react as HomeContent } from "../content/home.md";
import SectionItem from "../components/SectionItem";

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
            <SectionItem
              link={"/" + section.name.toLowerCase()}
              name={section.name}
              description={section.description}
              icon={section.icon}
              key={k}
            />
          ))}
        </div>
      </div>
    );
  }
}
