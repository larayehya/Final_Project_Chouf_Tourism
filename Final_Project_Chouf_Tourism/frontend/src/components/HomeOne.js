import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import React, { useRef, useEffect, useState } from "react";
import "../App.css";
// import bannerSecond from "../images/banner-second.jpg";

function HomeOne() {
  const slideRef = useRef(null);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const handleClickNext = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.appendChild(items[0]);
  };

  const handleClickPrev = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.prepend(items[items.length - 1]);
  };

  const data = [
    {
      id: 1,
      imgUrl:
        "https://images.unsplash.com/photo-1501960645408-12c9bcfca49f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fExlYmFub258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 2,
      imgUrl:
        "https://images.unsplash.com/photo-1582716207913-54a7913db841?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fExlYmFub258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 3,
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb7rZAGlO8aWBmi9y6iXSEdFxIJHly38BfOw&usqp=CAU",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE SUNSETS",
    },
    {
      id: 5,
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaG707gVBMEq5_Jo-NvhZzRic8LgbY_Tq--A&usqp=CAU",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
    {
      id: 6,
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVE0uYNNJ38ssUyTxUHJI_LYozwDzhXzlTWQ&usqp=CAU",
      desc: "Some beautiful roads cannot be discovered without getting loss.",
      name: "EXPLORE NATURE",
    },
  ];

  return (
    <>
      <div className="main-rayan">
        <div className="loadbar" style={{ width: `${loadingProgress}%` }}></div>
        <div id="slide" ref={slideRef}>
          {data.map((item) => (
            <div
              key={item.id}
              className="item"
              style={{ backgroundImage: `url(${item.imgUrl})` }}
            >
              <div className="content">
                <div className="name">{item.name}</div>
                <div className="des">{item.desc}</div>
                <button>See more</button>
              </div>
            </div>
          ))}
        </div>
        <div className="buttons">
          <button id="prev" onClick={handleClickPrev}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button id="next" onClick={handleClickNext}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
    </>
  );
}

export default HomeOne;
