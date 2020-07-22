import React, {useState} from "react";
import {Form} from './Form'

export const Card = ({id, title, description, handleMove, canEdit, handleSubmit}) => {
    const [showForm, toggleShowForm] = useState(false);

    const handleToggleShowForm = () => {
        toggleShowForm(!showForm);
    }

    const handleSubmitform = (data) => {
        toggleShowForm(!showForm);
        handleSubmit({
            id,
            ...data
        })
    }

    return(
        showForm
            ?<Form submit={handleSubmit} data={{title, description}}/>
            :<div className='card'>
                {
                    canEdit && 
                    <div 
                        className='btn edit-btn' 
                        onClick={handleToggleShowForm}
                    >Edit</div>}
                <h3>{title}</h3>
                <p>{description}</p>
                <div 
                    className='move-btn btn'
                    onClick={()=>handleMove(id)}
                >
                    Move
                </div>
            </div>
    )
}