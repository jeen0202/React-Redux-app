import  React, {Component } from 'react'

export default class Update extends Component {
    state = {
        title:this.props.title,
        desc:this.props.desc,
        id:this.props.id
    }
    render() {
        return(
            <form onSubmit={function(e){
                e.preventDefault();                
                this.props.onSubmit(
                    e.target.title.value,
                    e.target.desc.value
                    );
            }.bind(this)}>
                <input type="hidden" name ="id" value = {this.state.id}></input>
                <p>
                    <input type = "text" name ="title" placeholder="TITLE" value = {this.state.title}></input>
                </p>
                <p>
                    <textarea type = "text" name="desc" placeholder="DESCRIPTION" value = {this.state.desc}></textarea>
                </p>
                <p><input type = "submit"></input></p>
            </form>
        )
    }
}