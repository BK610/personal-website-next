import Head from "next/head";
import Link from "next/link";
import { Component } from "react";
import { attributes, react as HomeContent } from "../content/home.md";

export default class Home extends Component {
  render() {
    let { title, sections } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <div class="flex flex-col">
          <div class="flex-auto max-w-md space-y-4 place-self-center">
            <div class="flex-auto pt-8 text-xl">
              <h2>{title}</h2>
            </div>
            <div class="flex-auto text-lg">
              <HomeContent />
            </div>
            {sections.map((section, k) => (
              <div
                class="flex-auto border-solid border-2 rounded-lg border-violet-400 bg-slate-100 shadow-md hover:border-violet-500 hover:shadow-lg active:border-violet-600"
                key={k}
              >
                <Link href={"/" + section.name.toLowerCase()}>
                  <a>
                    <h2>{section.name}</h2>
                    <p class="text-sm text-slate-700">{section.description}</p>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
