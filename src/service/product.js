import { json } from "react-router-dom";

export const dummyProductApi = async function () {
  try {
    let apiResult = await fetch("https://dummyjson.com/products");
    if (!apiResult.ok) {
      throw new Error("NETWORK RESPONSE IS NOT OK");
    }
    let json = apiResult.json();
    return json;
  } catch (err) {
    let error = "invalid request";
    throw error;
  }
};

export const getLocalStgProducts = async function () {
  try {
    let prod = await JSON.parse(localStorage.getItem("products"))||[];
    if(prod.length===0){
      throw new Error('You have not added any product yet')
    }
    return prod;
  } catch (err) {
    throw err;
  }
};


//products being saved on local storage
export const setLclStgProducts = function (product) {
  localStorage.setItem("products", JSON.stringify(product));
};
