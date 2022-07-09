import "./Resources.css";

import ResourceItem from "../ResourceItem/ResourceItem";
import Card from "../UI/Cards/Card";


const Resources = (props) => {


    return (
        <Card className="resources">
            <ResourceItem
                resourceTitle={props.items[0].resource_title}
                resourceDate={props.items[0].resource_date}
                resourceResource={props.items[0].resource_resources}
                resourceReferenceNumber={props.items[0].resource_reference_number}
            />
            <ResourceItem
                resourceTitle={props.items[1].resource_title}
                resourceDate={props.items[1].resource_date}
                resourceResource={props.items[1].resource_resources}
                resourceReferenceNumber={props.items[1].resource_reference_number}
            />

            <ResourceItem
                resourceTitle={props.items[2].resource_title}
                resourceDate={props.items[2].resource_date}
                resourceResource={props.items[2].resource_resources}
                resourceReferenceNumber={props.items[2].resource_reference_number}
            />

            <ResourceItem
                resourceTitle={props.items[3].resource_title}
                resourceDate={props.items[3].resource_date}
                resourceResource={props.items[3].resource_resources}
                resourceReferenceNumber={props.items[3].resource_reference_number}
            />

        </Card>
    )
}


export default Resources;