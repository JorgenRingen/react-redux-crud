import React, {Component} from 'react';
import {connect} from 'react-redux';

class PostCounter extends Component {
    render() {
        return (
            <p className="post_message">Number of posts: {this.props.numberOfPosts}</p>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        numberOfPosts: state.length
    }
};


export default connect(mapStateToProps)(PostCounter);