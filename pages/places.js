import Head from "next/head";
import { Component } from "react";
import BaseLayout from "../components/BaseLayout";
import BaseMap from "../components/BaseMap";
import PageHeading  from "../components/PageHeading";

export default class Places extends Component {
  render() {
    return (
      <>
        <Head>
          <link // Styles Mapbox and adds features. Removing this makes the map very simplistic
            href="https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css"
            rel="stylesheet"
          />
        </Head>
        <BaseLayout titleText={"Places"}>
          <div className="space-y-4">
            <PageHeading>Places</PageHeading>
            <p className="text-lg">Where I've been...</p>
            <div
              className="w-full h-96 overflow-hidden
          rounded-lg
          border border-stone-500"
            >
              <BaseMap />
            </div>
          </div>
        </BaseLayout>
      </>
    );
  }
}
