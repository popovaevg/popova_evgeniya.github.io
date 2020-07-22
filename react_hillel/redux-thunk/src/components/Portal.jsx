import React from 'react';
import { Model } from './Model';

export class Portal extends React.Component {
    state={
        show: false
    };

    handleClickShow = () => {
        this.setState((prevState) => ({
            show: !prevState.show
        }));
    };

    render() {
        return (
            <div>
                <h2>This is Portal</h2>
                <button onClick={this.handleClickShow}>Show</button>
                {this.state.show && <Model handleClickShow={this.handleClickShow}/>}
            </div>
        )
    }
}