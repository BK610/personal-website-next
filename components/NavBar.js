import React, { Component } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// Unused. Found that I can just use "." as shorthand for going up one URL level... 🤦
// function getUpURL() {
//   // Retrieve current path using useRouter hook
//   const currentURL = useRouter().asPath;

//   // Use this regex pattern for extracting the URL before the last
//   const regex = /(.+\/).+\/*.*$/g;
//   const extractedURL = regex.exec(currentURL);

//   // Use either the extracted URL or just "/" if the redirect URL is to home
//   // Maybe can be removed by using a more clever regex solution
//   const upURL = extractedURL ? extractedURL[1] : "/";

//   return upURL;
// }

function NavBar() {
  const router = useRouter();

  // Shorthand for going up one URL level: "."
  return (
    <div className="py-2 select-none font-light text-sm text-zinc-800 dark:text-zinc-300 border-b border-zinc-500 dark:border-zinc-500">
      <Link href="/">
        <div className="w-fit mr-1 inline-block group transition hover:scale-105">
          <a
            className="p-1 cursor-pointer
          border border-solid border-transparent rounded-lg hover:border-zinc-700 hover:dark:border-zinc-300"
          >
            <span className="inline-block group-hover:animate-slowgrow">
              🏠
            </span>{" "}
            Home
          </a>
        </div>
      </Link>
      <span className="px-1 mr-1 inline-block">•</span>
      <Link href=".">
        <div className="w-fit mr-1 inline-block group transition hover:scale-105">
          <div>
            <a
              className="p-1 cursor-pointer
          border border-solid border-transparent rounded-lg hover:border-zinc-700 hover:dark:border-zinc-300"
            >
              <span className="inline-block group-hover:animate-bounceup">
                ↑
              </span>{" "}
              Up One Section
            </a>
          </div>
        </div>
      </Link>
      <span className="px-1 mr-1 inline-block">•</span>
      <div className="w-fit mr-1 inline-block group transition hover:scale-105">
        <button className="font-light text-sm text-zinc-700 dark:text-zinc-300" onClick={router.back}>
          <a
            className="p-1 cursor-pointer
          border border-solid border-transparent rounded-lg hover:border-zinc-700 hover:dark:border-zinc-300"
          >
            <span className="inline-block group-hover:animate-bounceleft">
              ←
            </span>{" "}
            Back
          </a>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
