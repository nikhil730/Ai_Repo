import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FilterTag } from "./FilterTag";
import React from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

export function Model(props) {
  //console.log(props);
  const [likes, setLikes] = useState(props.likes);
  const [Accuracy, setAccuracy] = useState(props.accurate);
  const [easyToUse, seteasyToUse] = useState(props.easyToUse);
  const [isLiked, setisLiked] = useState(false);
  const [isAccuracyLiked, setisAccuracyLiked] = useState(false);
  const [isEasyLiked, setisEasyLiked] = useState(false);
  const navigate = useNavigate();
  async function dislikeModel(Id) {
    const item = {
      id: Id,
    };
    const response = await fetch(`http://localhost:3000/explore/dislike/`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    const result = await response.json();
    if (result.success) {
      message.success("disliked");
      setLikes(likes - 1);
      setisLiked(false);
    } else {
      message.error("unable to update the server");
    }
  }
  async function dislikeModelAccuracy(Id) {
    const item = {
      id: Id,
    };
    const response = await fetch(
      `http://localhost:3000/explore/dislike/accuracy`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      }
    );
    const result = await response.json();
    if (result.success) {
      message.success("disliked");
      setAccuracy(Accuracy - 1);
      setisAccuracyLiked(false);
    } else {
      message.error("unable to update the server");
    }
  }
  async function dislikeModelEase(Id) {
    const item = {
      id: Id,
    };
    const response = await fetch(
      `http://localhost:3000/explore/dislike/easyToUse`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      }
    );
    const result = await response.json();
    if (result.success) {
      message.success("disliked");
      seteasyToUse(easyToUse - 1);
      setisEasyLiked(false);
    } else {
      message.error("unable to update the server");
    }
  }

  async function likeModel(Id) {
    const item = {
      id: Id,
    };
    console.log(item);
    const response = await fetch("http://localhost:3000/explore/like", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    const result = await response.json();
    if (result.success) {
      message.success("liked");
      setLikes(likes + 1);
      setisLiked(true);
    } else {
      message.error("unable to update the server");
    }
  }
  async function likeModelAccuracy(Id) {
    const item = {
      id: Id,
    };
    console.log(item);
    const response = await fetch(
      "http://localhost:3000/explore/like/accuracy",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      }
    );
    const result = await response.json();
    if (result.success) {
      message.success("liked");
      setAccuracy(Accuracy + 1);
      setisAccuracyLiked(true);
    } else {
      message.error("unable to update the server");
    }
  }
  async function likeModelEase(Id) {
    const item = {
      id: Id,
    };
    console.log(item);
    const response = await fetch(
      "http://localhost:3000/explore/like/easyToUse",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      }
    );
    const result = await response.json();
    if (result.success) {
      message.success("liked");
      seteasyToUse(easyToUse + 1);
      setisEasyLiked(true);
    } else {
      message.error("unable to update the server");
    }
  }

  // if (props.category === "Text Generation") {
  //   return null;
  // }
  console.log(Accuracy);
  console.log(easyToUse);
  return (
    <div
      // onClick={() => navigate(`/Models/${props.id}`)}
      className=" flex flex-col border-2  border-zinc-300 transform translate-y-0 scale-100 translate-z-0 rounded-lg px-8 py-8"
    >
      <div onClick={() => navigate(`/Models/${props.id}`)}>
        <p className="font-bold">{props.name}</p>
        <span className="font-semibold">{props.category}</span>
      </div>
      <p>{props.description}</p>

      <div>
        {isAccuracyLiked ? (
          <button
            onClick={() => {
              dislikeModelAccuracy(props.id);
            }}
          >
            <FaHeart className="text-red-700 size-4" />
          </button>
        ) : (
          <button
            onClick={() => {
              likeModelAccuracy(props.id);
            }}
          >
            <CiHeart className="text-red-700 size-4" />
          </button>
        )}

        <span>{" " + Accuracy + "   "}</span>
        {/* </div>
      <div> */}
        {isEasyLiked ? (
          <button
            onClick={() => {
              dislikeModelEase(props.id);
            }}
          >
            <FaHeart className="text-red-700 size-4" />
          </button>
        ) : (
          <button
            onClick={() => {
              likeModelEase(props.id);
            }}
          >
            <CiHeart className="text-red-700 size-4" />
          </button>
        )}

        <span>{" " + easyToUse}</span>
      </div>
    </div>
  );
}