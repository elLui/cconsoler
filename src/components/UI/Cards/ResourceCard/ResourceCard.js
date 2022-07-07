import React from "react";
import "./ResourceCard.css";



const ResourceCard = (props) => {
    const classes = 'card '  + props.className;



    return (
        <div className={classes}>{props.children}</div>
    )

}

export default ResourceCard;