import React from "react";

function Home() {

  const mainStyle = {
    display: "flex",
    flexWrap : "wrap",
    margin:"5px",
    paddingLeft:"15px",
  }

  const sideStyle = {
    display: "flex",
    flexWrap : "wrap",
    flexDirection : "column"
  }

  const headingStyle = {
    marginBottom:"3px"
  }


  return (
    <div style={mainStyle}>
      <div style={sideStyle}>
        <h1 style={headingStyle}>Task :</h1>
        <p>
          From the above link get a JSON data and create a cart page with per-item
          price, per-item quantity, Total quantity and total amount
        </p>
      </div>
      <div style={sideStyle}>
        <h1 style={headingStyle}>Functionalities Required</h1>
        <p>
          Needs to Increase or Decrease the per unit Quantity that should automatically updates the total Quantity and Amount.
        </p>
      </div>
      <div style={sideStyle}>
        <h1 style={headingStyle}>How To Use :</h1>
        <ol>
          <li>Navigate to Product page to add / remove product to cart.</li>
          <li>In cart page we can select no. of items we need to purcahse.</li>
          <li>Once we click checkout button - the cart items will get reset and user will redirected to product page</li>
        </ol>
      </div>
      <div style={sideStyle}>
        <h1 style={headingStyle}>Functionalities used :</h1>
        <ol>
          <li>Function to add / remove products to cart were done by redux slice name - MainSlice</li>
          <li>Store configurations were done store name - store</li>
          <li>Used useSeclector to get data from redux and used dispact to update the cart Contents</li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
