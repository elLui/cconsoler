import React from "react";
import "./ResourceCard.css";


// this will append the 'card' class name and allow use this component as a wrap
const ResourceCard = (props) => {
    const classes = 'card '  + props.className;

    return (
        <div className={classes}>{props.children}</div>
    )
};

export default ResourceCard;