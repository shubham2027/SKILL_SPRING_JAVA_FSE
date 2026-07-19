import React, { Component } from 'react';
import Post from '../Post';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            hasError: false,
            error: null
        };
    }

    loadPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                const postList = data.map(item => new Post(item.id, item.title, item.body));
                this.setState({ posts: postList });
            })
            .catch((error) => {
                alert('Error loading posts: ' + error.message);
                this.setState({ hasError: true, error: error.message });
            });
    };

    componentDidMount() {
        this.loadPosts();
    }

    componentDidCatch(error, info) {
        alert('An error occurred in Posts component: ' + error);
        this.setState({ hasError: true, error: error });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ color: 'red', padding: '20px' }}>
                    <h2>Error loading posts!</h2>
                    <p>{this.state.error}</p>
                </div>
            );
        }

        return (
            <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
                <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>Posts List</h1>
                {this.state.posts.map((post) => (
                    <div key={post.id} style={{
                        backgroundColor: '#f9f9f9',
                        padding: '15px',
                        marginBottom: '15px',
                        borderRadius: '6px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        borderLeft: '5px solid #007bff'
                    }}>
                        <h3 style={{ margin: '0 0 10px 0', color: '#333', textTransform: 'capitalize' }}>
                            {post.id}. {post.title}
                        </h3>
                        <p style={{ color: '#555', margin: 0, lineHeight: '1.5' }}>
                            {post.body}
                        </p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;
