import { Component } from "react";
import BaseLayout from "../components/BaseLayout";

export default class About extends Component {
  render() {
    return (
      <BaseLayout titleText={"About"}>
        <div className="grid grid-cols-2 gap-y-4">
          <div className="col-span-2 sm:col-span-1">
            Hello! Work in progress.
          </div>
          <div className="col-span-2 sm:col-span-1 place-self-center sm:justify-self-auto">
            <img
              className="rounded-lg border border-stone-800 dark:border-stone-200 object-cover h-72 w-72 sm:w-full"
              src={`/img/Headshot.jpg`}
            />
            <p className="mt-1 text-center">☝️ Me, also a work in progress.</p>
          </div>
        </div>
      </BaseLayout>
    );
  }
}
