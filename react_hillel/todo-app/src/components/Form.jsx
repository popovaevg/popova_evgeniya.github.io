import React, { useState } from "react";

export const Form = ({submit, data}) => {
    const [ title, setTitle ] = useState(data ? data.title : "");
    const [ description, setDescription ] = useState(data ? data.description : "");

    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    };

    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
    };

    const handleSubmit = () => {
        submit({
            title,
            description
        })
    };

    return (
        <form className="card">
            <div>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleChangeTitle}
                />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <textarea
                    name="description"
                    rows={4}
                    value={description}
                    onChange={handleChangeDescription}
                />
            </div>
            <div className="save-btn btn" onClick={handleSubmit}>Save</div>
        </form>
    )
};