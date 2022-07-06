import "./ResourceDate.css";

const ResourceDate = (props) => {
    const month = props.resourceDate.toLocaleString('en-US', {month: 'long'});
    const year = props.resourceDate.getFullYear();
    const day = props.resourceDate.toLocaleString('en-US',{day: '2-digit'});


    return (
        <div className="resourceItem__date">
            <div className="resourceItem__month">{month}</div>
            <div className="resourceItem__year">{year}</div>
            <div className="resourceItem__day">{day}</div>
        </div>

    )
}

export default ResourceDate;