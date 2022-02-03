import { Component } from "react";
import BaseLayout from "../components/BaseLayout";
import MissingContent from "../components/MissingContent";

export default class Places extends Component {
  render() {
    return (
      <BaseLayout titleText={"Places"}>
        <MissingContent />
      </BaseLayout>
    );
  }
}