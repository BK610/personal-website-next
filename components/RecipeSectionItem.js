import Link from "next/link";
import { Component } from "react";

export default class SectionItem extends Component {
  render() {
    return (
      <Link href={this.props.link}>
        <div
          className={`${this.props.className} group rounded-lg cursor-pointer
                   bg-gradient-to-r from-violet-100 to-orange-100 dark:from-violet-600 dark:to-orange-400
                   hover:from-violet-200 hover:to-orange-200 hover:dark:from-violet-700 hover:dark:to-orange-500
                   border-2 border-violet-300 active:border-violet-400 dark:border-zinc-300 active:dark:border-zinc-50
                   shadow-md hover:shadow-lg shadow-violet-300 hover:shadow-violet-300 dark:shadow-violet-800 hover:dark:shadow-violet-800
                   transition hover:scale-105
                   overflow-hidden
                   h-32 grid grid-rows-1`}
        >
          <a className="h-full w-full grid grid-cols-3 self-center items-center">
            <div className="p-2 col-span-2 overflow-hidden">
              <h2 className="font-medium dark:text-violet-100">
                {this.props.name}
              </h2>
              <p
                className="font-light text-sm text-zinc-700 dark:text-zinc-200
              line-clamp-3"
              >
                {this.props.description}
              </p>
            </div>
            <div className="h-full w-full overflow-hidden border-l border-violet-200">
              <img
                className="self-center h-full w-full object-cover group-hover:animate-slowgrow"
                src={this.props.icon}
              ></img>
            </div>
          </a>
        </div>
      </Link>
    );
  }
}
