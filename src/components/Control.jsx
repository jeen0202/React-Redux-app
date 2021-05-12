import React, {Component} from 'react';
import './component.css';

export default class Control extends Component {
    render()
    {
        return (
            <ul>
                <li>
                <input className="controlButton" type="button" value = "CREATE" onClick={
                    function(e){
                        e.preventDefault();
                        this.props.onClick('CREATE');
                    }.bind(this)}></input>
                </li>
                <li>
                <input className="controlButton" type="button" value = "UPDATE" onClick={
                    function(e){
                        e.preventDefault();
                        this.props.onClick('UPDATE');
                    }.bind(this)
                }></input>
                </li>
                <li>
                <input className="controlButton" type="button" value = "DELETE" onClick={function(e){
                    e.preventDefault();
                    this.props.onClick('DELETE_PROCESS');
                }.bind(this)}></input>
                </li>
            </ul>
                
                


        )
    }
}