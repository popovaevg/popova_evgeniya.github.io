import React from 'react';
import ReactDOM from 'react-dom';

export class Model extends React.Component{
    //root;
    componentWillMount(){
        this.root = document.createElement('div');
        const body = document.querySelector('body');
        body.appendChild(this.root);
    }

    componentWillUnmount(){
        this.root.remove();
    }
    
    render(){
        return(
            ReactDOM.createPortal(
                <div className='portal-wrapper'>
                    <div className='model'>
                        <h1>Modal</h1>
                        <button onClick={this.props.handleClickShow}>Close</button>
                    </div>
                </div>,
                this.root
            )
        )
    }
}