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
              <h2 className="mb-1 text-lg font-serif">
                {this.props.name}
              </h2>
              <p className="text-stone-700 dark:text-stone-100">
                {this.props.description}
              </p>
            </div>
            <div className="justify-self-end self-center">
              <img
                className="h-8 dark:invert group-hover:animate-spin"
                src={this.props.icon}
              />
            </div>
          </a>
        </SectionItem>
      </Link>
    );
  }
}
