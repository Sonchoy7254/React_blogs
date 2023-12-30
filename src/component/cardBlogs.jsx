import React from "react";
import data from "./data";

function CardBlog (props) {
   // const para = props.paragraph;
    // const existDate = Math.floor((new Date()-new Date(props.time)) / (1000 * 60 * 60 * 24) ) + " days ago";
    return (

            <div className="blogs">
                    <img className="image" src={props.image} alt="" srcset="" />
                    <div class="authore">
                        <div class="VnT">
                            <p class="text">{props.views}</p>
                            <p class="text pad">{Math.floor((new Date()-new Date(props.time)) / (1000 * 60 * 60 * 24) ) + " days ago"}</p>
                        </div>
                        <div class="user">
                            <p class="text">{props.Authore}</p>
                        </div>
                    </div>
                    <h3 class="heading">{props.heading.substring(0, 22)}</h3>
                    <p class="peragraph">{props.paragraph.substring(0, 62)}</p>
                    <div class="authore mar pad">
                        <div class="VnT">
                            <p class="text">{props.like}</p>
                        </div>
                        <div class="user">
                            <p class="text">{props.Share}</p>
                        </div>
                    </div>
                </div>

    );
}

export default CardBlog;
