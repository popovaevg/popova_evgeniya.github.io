import React from "react";
import { connect } from "react-redux";

import { createCard, moveCardToPropress } from "../actions";
import { Column } from "../components";

const Main = (props) => {
    const handleMoveCardToPropress = (id) =>{
        props.moveCardToPropress(id);
    };

    console.log(props.todoCards)

    return (
        <main>
            <Column
                title={"Todo"}
                addBtn
                cards={props.todoCards}
                createCard={props.createCard}
                handleMove={handleMoveCardToPropress}
            />
            <Column 
                title={"In Progress"}
                cards={props.progressCards}
                editCard={(data)=>{console.log(data)}}
                canEdit
            />
            <Column title={"Done"}/>
        </main>
    );
};

const mapStateToProps = (state) => ({
    todoCards: state.todoCards,
    progressCards: state.progressCards,
    
});

const mapDispatchToProps = {
    createCard,
    moveCardToPropress
};

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);