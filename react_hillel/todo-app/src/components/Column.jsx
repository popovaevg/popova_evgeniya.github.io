import React, { useState } from "react";

import { Form } from "./Form";
import { Card } from "./Card";

export const Column = ({ 
        title,
        addBtn, 
        createCard, 
        cards=[], 
        handleMove,
        canEdit,
        editCard
    }) => {
    const [ showForm, setShowForm ] = useState(false);

    const handleClickAdd = () => {
        setShowForm(true);
    };

    const handleSubmit = (data) => {
        if (canEdit){
            editCard(data);
        } else {
            setShowForm(false);
            createCard(data);
        }
    };

    return(
        <div className="column">
            <h3>{title}</h3>
            <div className="cards-block">
                {
                    cards.map((item)=>{
                        return(
                            <Card
                                key={item.id}
                                handleMove={handleMove}
                                canEdit={canEdit}
                                handleSubmit={handleSubmit}
                                {...item}
                            />
                        )
                    })
                }
            </div>
            {
                showForm && (
                    <Form submit={handleSubmit} />
                )
            }
            {
                addBtn && (
                    <button
                        className="add-btn"
                        onClick={handleClickAdd}
                    >Add</button>
                )
            }
        </div>
    )
};