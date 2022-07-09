import "./NewResourceForm.css";
import Card from "../UI/Cards/Card";
import {useState} from "react";

const NewResourceForm = () => {

    let current_date = new Date().toISOString().slice(0, 10);


    const [displayUserInput, setUserInput] = useState({
        resourceTitle: '',
        resourceDate: '',
        resourceResource: '',
        resourceReferenceNumber: null,
    });

    const titleChangeHandler = (event) => {
        // setUserInput({
        //     ...displayUserInput,
        //     resourceTitle: event.target.value,
        // })

        // due to state scheduling behaviour within React it is best practice to update state with
        // a call to the previous state :: example ::
        setUserInput((prevState) => {
            return {
                ...prevState,
                resourceTitle: event.target.value
            }
        })





    };
    const resourceResourceHandler = (event) => {
        setUserInput({
            ...displayUserInput,
            resourceResource: event.target.value,


        })
    }
    const resourceDateHandler = (event) => {
        setUserInput({
            ...displayUserInput,
            resourceDate: event.target.value,


        })
    }




    return (
        <Card>
        <form action="" className="new-resource-form">
            <div className="new-resource-form__controls">

                <div className="new-resource-form__control">
                    <label htmlFor="">title = {displayUserInput.resourceTitle}</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-resource-form__control">
                    <label htmlFor="">resource = {displayUserInput.resourceResource}</label>
                    <input type="text" onChange={resourceResourceHandler}/>
                </div>
                <div className="new-resource-form__control">
                    <label htmlFor="">date = {displayUserInput.resourceDate}</label>
                    <input type="date" min="2010-01-01" max={current_date} onChange={resourceDateHandler}/>
                </div>
                <div className="new-resource-form__control">
                    <label htmlFor="">reference number = {displayUserInput.resourceReferenceNumber}</label>
                    <input type="number" min={10000} max={999999} />
                </div>

            </div>
            <div className="new-resources__actions">
                <button type="submit">Add</button>
            </div>
        </form>
        </Card>
    )
}

export default NewResourceForm;