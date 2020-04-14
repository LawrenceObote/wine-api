import React, { Component } from 'react'

export class Post extends Component {
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.postArray.map((post, index) => {
                            return(
                                <Post
                                    id={post.id}
                                    name={post.name}>  
                                    </Post>
                            )
                        })
                    }
                </ul>
                
            </div>
        )
    }
}

export default Post
