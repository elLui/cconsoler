import "./NewResourceForm.css";

const NewResourceForm = () => {

    let current_date = new Date().toISOString().slice(0, 10);



    return (
        <form action="">
            <div className="new-resource-form__controls">

                <div className="new-resource-form__control">
                    <label htmlFor="">resourceTitle</label>
                    <input type="text"/>
                </div>
                <div className="new-resource-form__control">
                    <label htmlFor="">resourceResource</label>
                    <input type="text"/>
                </div>
                <div className="new-resource-form__control">
                    <label htmlFor="">resourceDate</label>
                    <input type="date" min="2022-01-01" max={current_date}/>
                </div>
                <div className="new-resource-form__control">
                    <label htmlFor="">resourceResource</label>
                    <input type="text"/>
                </div>

            </div>
        </form>
    )
}

export default NewResourceForm;