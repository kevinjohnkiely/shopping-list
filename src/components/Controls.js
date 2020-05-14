import React, { Component } from 'react'
import './Controls.css'

class Controls extends Component {
    
    state = {
        title: '',
        num: ''
    }

    formHandler = (event) => {
        event.preventDefault()
        this.props.addItem(this.state.title, this.state.num)
        this.setState({ 
            title: '',
            num: 0 })
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value       
        })
    }

    render () {
        
        
        return (
            <div style={controlsStyle}>
                <form onSubmit={this.formHandler} className="form-inline">
                    <input 
                        type="text" 
                        id="title" 
                        placeholder="Enter shopping list item" 
                        name="title"
                        value={this.state.title}
                        onChange={this.changeHandler}
                        />

                    <input 
                        type="number" 
                        id="num"
                        placeholder="Enter quantity" 
                        name="num"
                        onChange={this.changeHandler}/>

                    <button 
                        type="submit" 
                        value="Submit"
                        disabled={this.state.title === '' || this.state.num === '' ? true : false}>Add</button>
                </form>
            </div>
        )
    }
    
}

const controlsStyle = {
    background: '#eee',
    padding: '30px'
}

export default Controls