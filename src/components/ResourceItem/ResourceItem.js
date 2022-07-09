import React from 'react';

import "./ResourceItem.css";

import ResourceDate from "../ResourceDate/ResourceDate";
import Card from "../UI/Cards/Card";
import {useState} from "react";

const ResourceItem = (props) => {

    var counter = 0;

    const [getResource, setResource] = useState(props.resourceResource);
    const [state, setState] = useState(0);


    const clickHandler = () => {
        console.log('clicked');
        counter++;

    };

    return (<Card className="resourceItem__title resourceItem">
            <h2>
                {props.resourceTitle}
            </h2>
            <div className="resourceItem__referenceNumber">
                {props.resourceReferenceNumber}
            </div>
            <ResourceDate resourceDate={props.resourceDate}/>
            <div className="resourceItem__resources">{getResource}</div>
            <button onClick={clickHandler} className="resourceItem__button">{counter}</button>
        </Card>

    );
};

export default ResourceItem;