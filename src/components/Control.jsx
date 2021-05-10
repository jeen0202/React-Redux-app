import React, {Component} from 'react';

export default class Control extends Component {
    render()
    {
        return (
            <ul>
                <li>
                <input type="button" value = "CREATE" onClick={
                    function(e){
                        e.preventDefault();
                        this.props.onClick('CREATE');
                    }.bind(this)}></input>
                </li>
                <li>
                <input type="button" value = "UPDATE" onClick={
                    function(e){
                        e.preventDefault();
                        this.props.onClick('UPDATE');
                    }.bind(this)
                }></input>
                </li>
                <li>
                <input type="button" value = "DELETE" onClick={function(e){
                    e.preventDefault();
                    this.props.onClick('DELETE_PROCESS');
                }.bind(this)}></input>
                </li>
            </ul>
                
                


        )
    }
}