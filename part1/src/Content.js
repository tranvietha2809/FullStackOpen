import React from "react";

/** 
 * props:
 * @param {string} part
 * @param {string} excercises
*/
const Content = (props) => {
    return(
        <div>
            <p>
                {props.part} {props.exercises}
            </p>
        </div>
    )
};

export default Content;