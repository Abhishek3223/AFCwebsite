import React from "react";
import article from '../discription_source/discription.json'
import ProjectBar from "./projectsDetails";

export default function Projects(props) {

    return (
        <div style={{ margin: "10% ", border: "2px solid grey" }}>


            {article.articles.map((elem) => {


                return <div key={elem.title}>
                    <ProjectBar title={elem.title} discription={elem.discription} imgSrc={elem.src} other={elem.other_function} />
                </div>
            })}


        </div>


    )
}