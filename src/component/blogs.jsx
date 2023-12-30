import React from "react";
import data from "./data" // data file 
import CardBlog from "./cardBlogs";


function GetDataJsons(GetDataJson) {
    return(
         
        <CardBlog
            key = {GetDataJson.id}
            image = {GetDataJson.image}
            heading = {GetDataJson.heading}
            paragraph = {GetDataJson.paragraph}
            views = {GetDataJson.views}
            time = {GetDataJson.time}
            Authore = {GetDataJson.Authore}
            like = {GetDataJson.like}
            Share = {GetDataJson.Share}
        />

    );
}



function Blog() {
    return (
        <div className="container">
            <h2 className="title">Blogs</h2>
            <div className="grab-container">
            {data.map(GetDataJsons)}
            </div>
            
        </div>
    );
}
export default Blog;