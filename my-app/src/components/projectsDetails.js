import React from "react";
import '../css/projectDetails.css'

export default function projectBar(props) {

    return (
        <div className="project">
            <div className="projectImg">
                <img src="{logo}" alt="not found" srcSet="" />

            </div>
            <div className="discrip">

                <p className="disc-title" >{props.title}</p>
                <p style={{ textAlign: "justify" }}>
                    {props.discription}
                </p>
                <p>
                    {props.other}
                </p>
            </div>
        </div>

    )
}

