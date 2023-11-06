// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from "react";
import Serviceapi from "./api";
import "./style.css";
import { Link } from "react-router-dom";
import Cart from "./assets/Cart";
import Crousal from "./assets/Crousal";

const Desh = ({ addtocart }) => {
  const [products] = useState(Serviceapi);
  const [sec, setSec] = useState([]);

  return (
    <><Crousal/>
    <div className="sm:grid sm:grid-cols-3 gap-12 p-5 relative   pb-24">
      {products.map((value) => (
        <div key={value.id}>
          <Link to={`items/${value.id}`}>
            {" "}
            <div className="gap-36   sm:p-10  ">
              {" "}
              <img
                src={value.images}
                alt={value.name}
                height={200}
                width={400}
                className="p-5 h-96 w-full cursor-pointer ram "
              />
              <div className="text-2xl pl-10 font-semibold  w-80">
                {" "}
                <h1>{value.name}</h1>
              </div>
              <div className="text-1xl  pl-10 text-gray-500">
                <h3>{value.purchase}</h3>
              </div>
              <span className="text-1xl  font-semibold">
                {" "}
                <h2 className="pl-10">
                  M.R.P: ₹{value.Price} <span>{value.off}</span>
                </h2>{" "}
                <strike className="text-gray-500 pl-10 text-center justify-center ">
                  {value.before}
                </strike>
              </span>{" "}
              <Link to="/Cart">
                <div >
                  <button 
                    onClick={() => {
                      addtocart(value);
                    }}
                  >
                   <div className=" p-2 mb-36 cursor-pointer w-48 mt-5  ml-10 font-semibold text-2xl text-center text-white uppercase hover:bg-[#f63667ff] hover:text-white bg-gray-800"> Add to Cart</div>
                  </button>{" "}
                </div>
              </Link>
            </div>
          </Link>
        </div>
      ))}
     
    </div></>
  );
};

export default Desh;
