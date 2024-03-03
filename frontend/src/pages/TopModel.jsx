import React, { useState, useEffect } from "react";
import { Model } from "../components/Model";
import { message } from "antd";

export function TopModel() {
  const [topLikedModel, setTopLikedModel] = useState([]);
  const [topAccurateModel, settopAccurateModel] = useState([]);
  const [topEasyModel, settopEasyModel] = useState([]);

  useEffect(() => {
    fetch("https://ai-repo-backend.onrender.com/topModel")
      .then(async (res) => {
        const response = await res.json();
        setTopLikedModel(response);
      })
      .catch((error) => message.error("Error fetching top models: ", error));
    fetch("https://ai-repo-backend.onrender.com/topModel/accuracy")
      .then(async (res) => {
        const response = await res.json();
        settopAccurateModel(response);
      })
      .catch((error) => message.error("Error fetching top models: ", error));
    fetch("https://ai-repo-backend.onrender.com/topModel/easyToUse")
      .then(async (res) => {
        const response = await res.json();
        settopEasyModel(response);
      })
      .catch((error) => message.error("Error fetching top models: ", error));
  }, []);
  console.log(topAccurateModel);
  console.log(topEasyModel);
  // const topByAccuracy=()=>{
  //   fetch("http://localhost:3000/topModel/accuracy")
  //   .then(async (res) => {
  //     const response = await res.json();
  //     setTopLikedModel(response);
  //   })
  //   .catch((error) => console.error("Error fetching top models: ", error));
  // }
  // const topByEasyToUse=()=>{
  //   fetch("http://localhost:3000/topModel/easyToUse")
  //   .then(async (res) => {
  //     const response = await res.json();
  //     setTopLikedModel(response);
  //   })
  //   .catch((error) => console.error("Error fetching top models: ", error));
  // }

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center m-4">
        <h1 className="text-4xl font-bold text-gray-800 uppercase border-b-2 border-gray-800 pb-2">
          Top 10 Accurate Models
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {topAccurateModel.map((item) => (
          <Model key={item.id} {...item} />
        ))}
      </div>
      <div className="flex justify-center m-4">
        <h1 className="text-4xl font-bold text-gray-800 uppercase border-b-2 border-gray-800 pb-2">
          Top 10 Easy To Use Models
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {topEasyModel.map((item) => (
          <Model key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
