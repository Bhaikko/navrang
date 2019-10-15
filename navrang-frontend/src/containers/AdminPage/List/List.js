import React, { Component } from 'react';

import classes from './List.css';

import ListItem from './ListItem/ListItem';

class List extends Component {
    constructor (props) {
        super(props);
        this.state = {
            searchQuery: "",
        }

    }

    serachHandler = event => {
        this.setState({
            searchQuery: event.target.value 
        });
    }

    render () {
        let filteredData = this.props.data.filter(current => ((current.title || current.name || current.senderName).toLowerCase()).includes(this.state.searchQuery.toLowerCase()))

        return (
            <div>
                <input value={this.state.searchQuery} onChange={this.serachHandler} className={classes.Input} placeholder="Search Here " />

                <div className={classes.List}>
                    {filteredData.map((current, index) => <ListItem 
                        key={current.id} 
                        title={current.title || current.name || current.senderName} 
                        changeSelected={() => this.props.changeSelected(index)}
                        deleteSelected={() => this.props.deleteSelected(current.id, this.props.setting)}
                    > </ListItem>)}

                </div>
            </div>
        );
    }
}

export default List;
