import React, { Component } from 'react'
import ListItem from './ListItem'

class List extends Component {

    render() {
    
        return (
            this.props.itemsFromApp.map((item) => {
                return <ListItem 
                    key={item.id} 
                    item={item}
                    delItem={this.props.delItem}
                    />
                })
        );
    }
}

export default List