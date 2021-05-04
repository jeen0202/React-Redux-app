import React, {Component} from 'react';

export default class Control extends Component {
    render()
    {
        return (
            <ul>
                <li><a href ="create" onClick={
                    function(e){
                        e.preventDefault();
                        this.props.onClick('CREATE');
                    }.bind(this)}>CREATE</a></li>
                <li><a href ="update" onClick={
                    function(e){
                        e.preventDefault();
                        this.props.onClick('UPDATE');
                    }.bind(this)
                }>UPDATE</a></li>
                <li><input type="button" value = "DELETE" onClick={function(e){
                    e.preventDefault();
                    this.props.onClick('DELETE');
                }.bind(this)}></input></li>
            </ul>
        )
    }
}