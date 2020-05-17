import App from "next/app";
import Layout from "../components/_App/Layout.js";

class Farm extends App {
  render() {
    const { Component } = this.props;
    return (
      <Layout>
          <Component />
      </Layout>
    );
  }
}

export default Farm;
