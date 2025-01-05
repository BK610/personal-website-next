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
              <h3 className="mb-1">{this.props.name}</h3>
              <p className="text-stone-700 font-light dark:text-stone-100">
                {this.props.description}
              </p>
            </div>
            <div className="text-3xl justify-self-end self-center pr-3 group-hover:animate-spin">
              {this.props.emoji}
            </div>
          </a>
        </SectionItem>
      </Link>
    );
  }
}
