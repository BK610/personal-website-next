import React from "react";

/*
Functional component, wrapped in React.forwardRef. Generally following this guide:
https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-function-component

{onClick, href, ...props} -> This is the object of props, being passed to the function.
...props passes all other props, outside of those explicitly mentioned. Importantly,
this includes props.children.

Specifying each of these in the parent div **is required**, otherwise they don't pass
to the children correctly, and the links don't work.

hover:from-purple-200 hover:to-orange-200 hover:dark:from-purple-700 hover:dark:to-orange-500
*/

const SectionItem = React.forwardRef(({ onClick, href, ...props }, ref) => {
  return (
    <div
      className={`${props.className} rounded-lg
               bg-gradient-to-r from-purple-200 to-orange-100 dark:from-purple-500 dark:to-orange-300
               border border-stone-800 dark:border-stone-200
               shadow-md hover:shadow-lg
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
