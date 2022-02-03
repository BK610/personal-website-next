import Head from "next/head";
import { Component } from "react";
import BaseLayout from "../components/BaseLayout";
import BaseMap from "../components/BaseMap";

export default class Places extends Component {
  render() {
    return (
      <>
        <Head>
          <link
            href="https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css"
            rel="stylesheet"
          />
        </Head>
        <BaseLayout titleText={"Places"}>
          <div className="space-y-4">
            <h2 className="text-xl">Places</h2>
            <p className="text-lg">Where I have been...</p>
            <div
              className="w-full h-96 overflow-hidden
          rounded-lg
          border border-zinc-500"
            >
              <BaseMap />
            </div>
          </div>
        </BaseLayout>
      </>
    );
  }
}
