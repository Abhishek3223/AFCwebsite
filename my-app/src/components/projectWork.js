import React from "react";
import article from '../discription_source/discription.json'
// import logo from "../images/1.png"
import ProjectBar from "./projectsDetails";

export default function Projects(props) {

    return (
        <div style={{ margin: "10% " }}>

            {article.articles.map((elem,i) => {
            
                return <div key={i}>
                    <ProjectBar title={elem.title} date={elem.date} discription={elem.discription} imgSrc={elem.src} other={elem.other_function} />
                </div>
            })}

        </div>
    )
}