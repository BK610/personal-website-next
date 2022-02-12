import { replaceBasePath } from "next/dist/server/router";
import React, { Children, Component } from "react";

/*
Functional component, wrapped in React.forwardRef. Generally following this guide:
https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-function-component

{onClick, href, ...props} -> This is the object of props, being passed to the function.
...props passes all other props, outside of those explicitly mentioned. Importantly,
this includes props.children.

Specifying each of these in the parent div **is required**, otherwise they don't pass
to the children correctly, and the links don't work.
*/

const SectionItem = React.forwardRef(({ onClick, href, ...props }, ref) => {
  console.log(props);
  return (
    <div
      className={`group p-2 rounded-lg cursor-pointer
               bg-gradient-to-r from-violet-100 to-orange-100 dark:from-violet-600 dark:to-orange-400
               hover:from-violet-200 hover:to-orange-200 hover:dark:from-violet-700 hover:dark:to-orange-500
               border-2 border-violet-300 active:border-violet-400 dark:border-zinc-300 active:dark:border-zinc-50
               shadow-md hover:shadow-lg shadow-violet-300 hover:shadow-violet-300 dark:shadow-violet-800 hover:dark:shadow-violet-800
               transition hover:scale-105
               `}
      ref={ref}
      href={href}
      onClick={onClick}
    >
      {props.children}
    </div>
  );
});

export default SectionItem;
