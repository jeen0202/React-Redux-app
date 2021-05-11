 import React, {Component } from 'react'

 export default class Header extends Component{
     render(){
         let data= this.props.data;
         console.log(data)
         return(
            <header>
                <h1><a href="#welcome" onClick={function(){
                    this.props.onClick();
                }.bind(this)}>{this.props.data[0].title}</a></h1>
                {this.props.data[0].desc}
            </header>
         )
             
         
     }
 }

//  export default connect(
//      null,
//      function(dispatch){
//          return {
//              onClick:function(){
//                  dispatch({type:'WELCOME',mode:'WELCOME'})
//              }
//          }
//      }

//     )(Header);