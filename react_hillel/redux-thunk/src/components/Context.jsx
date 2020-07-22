//context API
//замедляет переиспользование компонентов

import React from 'react';

const MyContext = React.createContext();

class MyProvider extends React.Component {
    state = {//здесь state, как store
        name: 'John',
        age: 20
    }
    handleClick = () => {
        this.setState((prevState)=>({
            age: prevState.age + 5
        }))
    }
    render(){
        return(
            <MyContext.Provider value={{
                state:this.state,
                addAge: this.handleClick
            }}>
                {this.props.children}
            </MyContext.Provider>
        )//{this.props.children} - объект-модуль, который содержит несколько подвидов компонентов
    }
}

const User = () => {
    return(
        <MyContext.Consumer>
           {(context) => (
            <div>
                <h3>This is User component</h3>
                <p>Name: {context.state.name}</p>
                <p>Age: {context.state.age}</p>
                <button onClick={context.addAge}>Add age</button>
            </div>  
           )}

        </MyContext.Consumer>
        
    )
}

const Person = () => {
    return(
        <div>
            <h3>This is Person component</h3>
            <User/>
        </div>
    )
}

export class Context extends React.Component {
    render(){
        return (
            <MyProvider>
                <h2>This is Context component</h2>
                <Person
                    {...this.state}
                />
            </MyProvider> //элемент, который пробрасывает данные
        )
    }
}