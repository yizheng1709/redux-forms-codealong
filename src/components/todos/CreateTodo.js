import React, { Component } from 'react'

class CreateTodo extends Component {
  render() {
    return(
      <div>
        <form>
          <p>
            <label>add to do</label>
            <input type="text" />
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default CreateTodo;
