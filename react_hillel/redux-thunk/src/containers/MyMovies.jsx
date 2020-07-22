import React from "react"
import { connect } from "react-redux";

import { getMovies } from "../actions/movies";

class MyMovies extends React.Component {
    componentDidMount() {
        this.props.getMovies();
    }

    render() {
        console.log(this.props);
        const {
            isLoading,
            errorMsg,
            movies
        } = this.props;
        
        console.log("movies", movies);
        console.log("errorMsg", errorMsg);
        //
        // return(
        //     <div>
        //         {isLoading
        //             ? <div>Loading...</div>
        //             : <div>
        //                 <button onClick={increment}>+</button>
        //                 <span>{counter}</span>
        //                 <button onClick={decrement}>-</button>
        //             </div>
        //         }
        //     </div>
        // );

        return (
            
            <div>
                {
                    isLoading
                        ? <div>Loading...</div>
                        : movies.map((item, i) => (
                                <div key={i}>
                                    {item.title}
                                </div>
                            ))
                }
                <span>{errorMsg}</span>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    errorMsg: state.errorMsg,
    isLoading: state.isLoading,
    movies: state.movies
});

const mapDispatchToProps = {
    getMovies
};

export const MyMoviesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyMovies);