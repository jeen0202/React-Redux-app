import React,{ Component } from "react"

export default class Create extends Component{
    render(){
        return(
            <form>
                <p>
                    <input type = "text" name ="title" placeholder="TITLE"></input>
                </p>
                <p>
                    <textarea type = "text" name="desc" placeholder="DESCRIPTION"></textarea>
                </p>
                <p><input type = "submit"></input></p>
            </form>
        )
    }
}