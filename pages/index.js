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
        <div class="flex flex-col content-center">
          <div class="flex-auto max-w-md space-y-4 place-self-center">
            <div class="flex-auto">
              <h2 class="text-xl">{title}</h2>
            </div>
            <div class="flex-auto text-lg">
              <HomeContent />
            </div>
            {sections.map((section, k) => (
              <Link href={"/" + section.name.toLowerCase()}>
                <div
                  class="flex-auto border-solid border-2 rounded border-violet-400 cursor-pointer"
                  key={k}
                >
                  <a >
                    <h2>{section.name}</h2>
                    <p>{section.description}</p>
                  </a>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </>
    );
  }
}
