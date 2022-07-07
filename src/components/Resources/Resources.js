import "./Resources.css";

import ResourceItem from "../ResourceItem/ResourceItem";
import ResourceCard from "../UI/Cards/ResourceCard/ResourceCard";



const Resources = (props) => {


    return (
        <ResourceCard className="resources">
            <ResourceItem
                resourceTitle = {props.resources[0].resource_title}
                resourceDate = {props.resources[0].resource_date}
                resourceResource = {props.resources[0].resource_resources}
            />
            <ResourceItem
                resourceTitle = {props.resources[1].resource_title}
                resourceDate = {props.resources[1].resource_date}
                resourceResource = {props.resources[1].resource_resources}/>
            <ResourceItem
                resourceTitle = {props.resources[2].resource_title}
                resourceDate = {props.resources[2].resource_date}
                resourceResource = {props.resources[2].resource_resources}/>
            <ResourceItem
                resourceTitle = {props.resources[3].resource_title}
                resourceDate = {props.resources[3].resource_date}
                resourceResource = {props.resources[3].resource_resources}/>
        </ResourceCard>
    )
}


export default Resources;