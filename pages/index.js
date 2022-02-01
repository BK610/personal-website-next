import Head from "next/head";
import { Component } from "react";
import { attributes, react as HomeContent } from "../content/home.md";
import SectionItem from "../components/SectionItem";
import BaseLayout from "../components/BaseLayout";

export default class Home extends Component {
  render() {
    let { title, sections } = attributes;
    return (
      <>
        <Head>
          <title>Bailey Kane</title>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <BaseLayout navbarVisible={false}>
          <div className="w-full flex flex-col items-center">
            <div className="w-full max-w-md space-y-4">
              <div className="text-xl">
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
        </BaseLayout>
      </>
    );
  }
}
