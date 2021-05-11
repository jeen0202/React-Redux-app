import React, {Component } from 'react'
import './component.css'
export default class Nav extends Component{
    render(){        
        let tags = [];
        for(let i = 0;i<this.props.data.length;i++){
            let d = this.props.data[i];
            tags.push(<li key = {d.id}><a href={d.title} data-id={d.id} onClick={(e)=>{
                e.preventDefault();
                this.props.onClick(Number(e.target.dataset.id));
            }}>{d.title}</a></li>)
        }
        return(
            <nav className = "Nav">
                <ol>
                    {tags}
                </ol>
          </nav>
        )
            
        
    }
}