import { Component } from "react";
import BaseLayout from "../components/BaseLayout";
import MissingContent from "../components/MissingContent";

export default class Music extends Component {
  render() {
    return (
      <BaseLayout>
        <MissingContent />
      </BaseLayout>
    );
  }
}