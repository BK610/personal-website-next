import Head from "next/head";
import { Component } from "react";
import BaseLayout from "../components/BaseLayout";
import BaseMap from "../components/BaseMap";

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
            <h2>Places</h2>
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
