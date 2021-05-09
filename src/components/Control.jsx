import React, {Component} from 'react';

export default class Control extends Component {
    render()
    {
        return (
            <pre>
                <input type="button" value = "CREATE" onClick={
                    function(e){
                        e.preventDefault();
                        this.props.onClick('CREATE');
                    }.bind(this)}></input>&nbsp;&nbsp;
                <input type="button" value = "UPDATE" onClick={
                    function(e){
                        e.preventDefault();
                        this.props.onClick('UPDATE');
                    }.bind(this)
                }></input>&nbsp;&nbsp;
                <input type="button" value = "DELETE" onClick={function(e){
                    e.preventDefault();
                    this.props.onClick('DELETE_PROCESS');
                }.bind(this)}></input>
            </pre>
        )
    }
}