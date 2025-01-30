import Link from "next/link";
import { Component } from "react";
import SectionItem from "./SectionItem";
import Image from "next/image";

export default class RecipeSectionItem extends Component {
  render() {
    return (
      <Link href={this.props.link} passHref>
        <SectionItem
          className="h-32 sm:h-96 w-full sm:flex sm:flex-col grid grid-cols-3
        group cursor-pointer transition hover:scale-105
        sm:divide-y divide-x sm:divide-x-0 divide-stone-800 dark:divide-stone-100
        overflow-hidden"
        >
          <div className="p-2 h-24 self-center content-center sm:self-start col-span-2">
            <h3 className="mb-1 font-semibold">{this.props.name}</h3>
            <p
              className="text-stone-800 dark:text-stone-100
              line-clamp-2"
            >
              {this.props.description}
            </p>
          </div>
          <div className="h-full overflow-hidden">
            <Image
              className="h-full w-full object-cover overflow-hidden"
              src={this.props.icon}
              width={"600"}
              height={"600"}
              alt={`Thumbnail of ${this.props.name}`}
            ></Image>
          </div>
        </SectionItem>
      </Link>
    );
  }
}
