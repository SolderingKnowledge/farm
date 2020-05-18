import React from "react";
import axios from "axios"; 

async function getProducts (){
    const url = "http://localhost:3000/api/products"; // makes request to pages/api/products.js
    const res = await axios.get(url);
    console.log("hey", res.data);
}
function Home({products}) {
    console.log(products);
    //lifecycle method just like componentWillMount();
    React.useEffect(()=>{
        getProducts();
        //[inside valuse changes] then is setState() every time it changes then useEffects gets rerun
    }, []);

  return <>Home page is here</>;
}

// We can fetch data on the server before componentWillMount() with the help NextJS
Home.getInitialProps = async ( ) => {
    const url = "http://localhost:3000/api/products"; // makes request to pages/api/products.js
    const res = await axios.get(url);
    return {products: res.data }
    // return { hello: "world"}
}

export default Home;
