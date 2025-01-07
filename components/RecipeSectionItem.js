import Link from "next/link";
import { Component } from "react";
import SectionItem from "./SectionItem";

export default class RecipeSectionItem extends Component {
  render() {
    return (
      <Link href={this.props.link} passHref>
        <SectionItem className="h-32 grid grid-rows-1 group cursor-pointer transition hover:scale-105">
          <a
            className="h-full w-full grid grid-cols-3 self-center items-center"
            href={this.props.link}
          >
            <div className="p-2 col-span-2">
              <h3 className="mb-1">{this.props.name}</h3>
              <p
                className="font-light text-stone-700 dark:text-stone-100
              line-clamp-3"
              >
                {this.props.description}
              </p>
            </div>
            <div className="h-full w-full overflow-hidden">
              <img
                className="self-center h-full w-full object-cover"
                src={this.props.icon}
              ></img>
            </div>
          </a>
        </SectionItem>
      </Link>
    );
  }
}
