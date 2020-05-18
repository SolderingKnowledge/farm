import App from "next/app";
import Layout from "../components/_App/Layout.js";

class Farm extends App {
    static async getInitialProps( { Component, context } ){
        let pageProps = {};
        if(Component.getInitialProps){
            pageProps = await Component.getInitialProps(context);
        }
        return {pageProps: pageProps}// es6=> {pageProps}
    }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
          <Component  {... pageProps } />
      </Layout>
    );
  }
}

export default Farm;
