import React from "react";

const Button = ({ handleClick, text }) => { //деструктуризация объекта сразу при получении
    return(<div onClick={handleClick}>{text}</div>);
};

const MyComponent = (props) => {
    console.log(props);
    return(
        <div>
            <h1>{props.title}</h1>
            {/* <Button handleClick={props.handleClick} text={props.text}/> */}
            <Button {...props}/>
        </div>
    )
};

const User = (props) => {
    return(<li>{props.name}, {props.job}</li>);
};

function UserList(props) {
    console.log("props", props);
    return (
        <ul>
            {props.users.map((user) => props.children[user.id-1](user))}
        </ul>
    )
}

function UserPage() {
    const users = [{id: 1, name: 'Вася'}, {id: 2, name: 'Петя'}, {id: 3, name: 'Петя'}];
    return (
        <UserList users={users}>
            {(user) => <li key={user.id}>Пользователь: {user.name}</li>}
            {(user) => <li key={user.id + 200}>Пользователь2: {user.name}</li>}
        </UserList>
    );
}

export class Main extends React.Component {
    state = {
        greeting: "",
        users: [
            {
                id: 1,
                job: "developer",
                name: "John"
            },
            {
                id: 2,
                job: "tester",
                name: "Kate"
            },
            {
                id: 3,
                job: "devops",
                name: "Tom"
            },
        ]
    };

    handleClick = (event) => {
        console.log("event", event);
        this.setState({ greeting: "John"});
    };

    render() {
        const { greeting, users } = this.state;

        return (
            <React.Fragment>
                <ul>
                    {users.map((item) => <User key={item.id} name={item.name} job={item.job}/>)}
                </ul>
                <UserPage/>
                <MyComponent
                    text="Push"
                    handleClick={this.handleClick}
                    title={greeting}
                >
                    <h1>Children</h1>
                </MyComponent>
            </React.Fragment>
            )
    }
}