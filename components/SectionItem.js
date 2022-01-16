import Link from "next/link";
import { Component } from "react";

export default class SectionItem extends Component {
  render() {
    return (
      <div
        className="group p-2 border-solid border-2 rounded-lg
                   even:rotate-1 odd:-rotate-1
                   bg-gradient-to-r from-violet-100 to-orange-100 dark:from-violet-600 dark:to-orange-400
                   hover:from-violet-200 hover:to-orange-200 hover:dark:from-violet-700 hover:dark:to-orange-500
                   border-violet-200 active:border-violet-300 dark:active:border-violet-400
                   shadow-md hover:shadow-lg shadow-violet-300 hover:shadow-violet-300 dark:shadow-violet-800 hover:dark:shadow-violet-700
                   transition hover:scale-105"
      >
        <Link href={"/" + this.props.name.toLowerCase()}>
          <a className="grid grid-cols-2">
            <div>
              <h2 className="font-medium dark:text-violet-100">
                {this.props.name}
              </h2>
              <p className="font-light text-sm text-zinc-700 dark:text-zinc-200">
                {this.props.description}
              </p>
            </div>
            <div className="justify-self-end self-center">
              <img
                className="h-8 dark:invert group-hover:animate-spin"
                src={this.props.icon}
              ></img>
            </div>
          </a>
        </Link>
      </div>
    );
  }
}
