import React from "react";
import '../css/projectDetails.css'

function makeArray(p) {


}
export default function projectBar(props) {

    return (
        <div className="project">
            <div className="projectImg">
                <img src={props.imgSrc} alt="not found" srcSet="" />
                <p id="date_section"> {props.date}</p>
            </div>
            <div className="discrip">

                <p className="disc-title" >{props.title}</p>
                <p style={{ textAlign: "justify" }}>
                    {props.discription}
                </p>


                <div>
                    {(props.other).split(",").map((e) => {
                        return <p>{e}</p>
                    })}
                </div>
            </div>
        </div>


    )
}

