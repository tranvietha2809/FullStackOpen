import React from "react";

/** 
 * props:
 * @param {Array} content
*/
const Content = (props) => {
    return(
        props.content.map((value) => 
        <div>
        <p>
            {value.name} {value.exercises}
        </p>
        </div>
        )
    )
};

export default Content;