import React, { Component } from 'react'
import axios from 'axios';

export class HTTPPost extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         apiResponse: null
      }
    }
    postToApi = () => {
        axios.post(
            'https://jsonplaceholder.typicode.com/posts', {
            title: "hello World!",
            body: "It works",
            userId: 123,
        }).then(response => {
            this.setState({
                apiResponse: response.data
            })
        })
    }

  render() {
    const {apiResponse} = this.state
    return (
      <div>
        <button onClick={this.postToApi}>
            Create post
        </button>
        {
            apiResponse ? (
                <div>
                    <h1>{apiResponse.title}</h1>
                    <p>post id: {apiResponse.id}</p>
                    <p>{apiResponse.body}</p>
                    <p>user id: {apiResponse.userId}</p>
                </div>
            ) : (
                <p>Please klick the button above!</p>
            )
        }
      </div>
    )
  }
}

export default HTTPPost