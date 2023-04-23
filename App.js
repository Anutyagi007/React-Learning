import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return (
    <a href="/">
      <img
        src="https://i.pinimg.com/originals/b1/fc/bb/b1fcbbfd4fb8116c714ef352bb39bbaf.jpg"
        alt="logo"
        className="logo"
      />
    </a>
  );
};
const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Search</li>
          <li>Sign In</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard=()=>{
        
}
const Body=()=>{
        return(
                <div>
                        Body
                </div>
        )
}
const Footer=()=>{
        return(
                <div>
                        Footer
                </div>
        )
}
const AppLayout=()=>{
        return(
                <>
                <HeaderComponent/>
                <Body/>
                <Footer/>
                </>
        )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
