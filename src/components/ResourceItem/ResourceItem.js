import "./ResourceItem.css";
import ResourceDate from "../ResourceDate/ResourceDate";

const ResourceItem = (props) => {


    return (
        <div className="resourceItem">
            <div className="resourceItem__title"><h2>{props.resourceTitle}</h2></div>


            <ResourceDate resourceDate={props.resourceDate}/>
            <div className="resourceItem__resources">{props.resource_resources}</div>
        </div>
    );
};

export default ResourceItem;