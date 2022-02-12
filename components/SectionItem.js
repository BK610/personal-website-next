import React from "react";

/*
Functional component, wrapped in React.forwardRef. Generally following this guide:
https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-function-component

{onClick, href, ...props} -> This is the object of props, being passed to the function.
...props passes all other props, outside of those explicitly mentioned. Importantly,
this includes props.children.

Specifying each of these in the parent div **is required**, otherwise they don't pass
to the children correctly, and the links don't work.

hover:from-violet-200 hover:to-orange-200 hover:dark:from-violet-700 hover:dark:to-orange-500
*/

const SectionItem = React.forwardRef(({ onClick, href, ...props }, ref) => {
  return (
    <div
      className={`${props.className} rounded-lg
               bg-gradient-to-r from-myorange-100 to-mypurple-200 dark:from-mygreen-600 dark:to-mygreen-400
               border-2 border-myorange-300 active:border-mypurple-300 dark:border-myorange-100 active:dark:border-myorange-50
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
