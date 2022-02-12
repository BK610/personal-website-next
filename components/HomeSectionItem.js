import Link from "next/link";
import { Component } from "react";
import SectionItem from "./SectionItem";

export default class HomeSectionItem extends Component {
  render() {
    return (
      <Link href={this.props.link} passHref>
        <SectionItem className="group transition hover:scale-105 p-2 cursor-pointer">
          <a className="grid grid-cols-2" href={this.props.link}>
            <div className="self-center">
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
        </SectionItem>
      </Link>
    );
  }
}
