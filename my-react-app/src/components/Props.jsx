import React from "react";
import "../App.css";
import Detail from "./Detail";
import Avatar from "./Avatar";

export default function Props(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
        <Avatar img ={props.img}/>
    
        </div>
        <div className="bottom">
          <Detail detailInfo={props.tel} />
          <Detail detailInfo={props.email} />
        </div>
      </div>
    </div>
  );
}
