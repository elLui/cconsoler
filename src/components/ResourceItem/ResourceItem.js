import "./ResourceItem.css";

import ResourceDate from "../ResourceDate/ResourceDate";
import ResourceCard from "../UI/Cards/ResourceCard/ResourceCard";

const ResourceItem = (props) => {


    return (
        <div className="resourceItem">
            <ResourceCard className="resourceItem__title">
                <h2>{props.resourceTitle}</h2>
            </ResourceCard>
            <ResourceDate resourceDate={props.resourceDate}/>
            <div className="resourceItem__resources">{props.resource_resources}</div>
        </div>
    );
};

export default ResourceItem;