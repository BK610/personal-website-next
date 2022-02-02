import Head from "next/head";
import { Component } from "react";
import { attributes, react as HomeContent } from "../content/home.md";
import SectionItem from "../components/SectionItem";
import BaseLayout from "../components/BaseLayout";

export default class OfflineFallback extends Component {
  render() {
    let { title, sections } = attributes;
    return (
      <>
        <Head>
          <title>Bailey Kane</title>
          {/* <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script> */}
        </Head>
        <BaseLayout navbarVisible={false}>
          <div className="w-full flex flex-col items-center">
            <div className="w-full max-w-md space-y-4">
              <div className="text-xl">
                <h2>Looks like you're offline my dude. Sad 😕</h2>
              </div>
            </div>
          </div>
        </BaseLayout>
      </>
    );
  }
}
