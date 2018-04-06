import React, {Component} from 'react';
import PostForm from './PostForm'
import PostCounter from './PostCounter';
import AllPost from './AllPost'

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="navbar">
                    <h2 className="center ">Post It</h2>
                </div>
                <PostForm/>
                <PostCounter/>
                <AllPost/>
            </div>
        );
    }
}

export default App;
