import Head from "next/head";
import { Component } from "react";
import { attributes, react as HomeContent } from "../content/home.md";
import HomeSectionItem from "../components/HomeSectionItem";
import BaseLayout from "../components/BaseLayout";
import SectionList from "../components/SectionList";
import Image from "next/image";
import BackgroundImage from "../public/img/BackgroundImage.jpg";

export default class Home extends Component {
  render() {
    const { title, sections } = attributes;
    return (
      <>
        <Head>
          <script
            defer
            src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          ></script>
        </Head>
        <BaseLayout navbarVisible={false} className="">
          <div className="w-full flex flex-col relative -mt-4">
            <div className="w-full flex flex-col items-center absolute z-10 mt-4">
              <div className="h-full w-full max-w-md space-y-4">
                <div className="text-xl ">
                  <h2>{title}</h2>
                </div>
                <div className="text-lg">
                  <HomeContent />
                </div>
                <SectionList>
                  {sections.map((section, k) => (
                    <HomeSectionItem
                      link={"/" + section.name.toLowerCase()}
                      name={section.name}
                      description={section.description}
                      icon={section.icon}
                      key={k}
                    />
                  ))}
                </SectionList>
              </div>
            </div>
            {/* <div className="h-[28rem] rounded-lg overflow-hidden">
              <Image
                src={BackgroundImage}
                placeholder="blur"
                priority
                className="rounded-lg"
                layout="fill"
                objectFit="cover"
              />
            </div> */}
          </div>
        </BaseLayout>
      </>
    );
  }
}
