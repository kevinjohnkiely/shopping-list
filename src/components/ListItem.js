import React, { Component } from 'react'

class ListItem extends Component {

    render() {

        const itemStyle = {
            padding: '10px',
            background: 'magenta',
            textAlign: 'left',
            width: '60%',
            margin: 'auto',
            marginBottom: '10px',
            border: '1px solid black'
        }

        const myBtn = {
            background: 'black',
            color: 'white',
            border: 'none',
            padding: '5px 9px',
            borderRadius: '50%',
            cursor: 'pointer',
            float: 'right'
        }

        const number = {
            background: 'white',
            color: 'black',
            borderRadius: '50%',
            padding: '3px 9px',
            border: '1px black',
            fontWeight: 'bold'
        }

        const { id, title, num } = this.props.item

        return (
        <div style={itemStyle}>
            {title} <span style={number}>{num}</span>
            
            <button style={myBtn} onClick={this.props.delItem.bind(this, id)}>X</button>
        </div>
    )

    }

    
}

export default ListItem