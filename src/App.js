import './App.css';
import './Sidebar';
import HeaderContainer from "./containers/Header";
import NavContainer from "./containers/Nav";
import ReadContainer from "./containers/Read";
import ControlContainer from "./containers/Control";
import CreateContainer from './containers/Create';
import UpdateContainer from './containers/Update';
import { connect } from 'react-redux';
import { Component } from 'react';
import { Sidebar } from './Sidebar';


class App extends Component {
  render(){
    let article,Control = null;
    if(this.props.mode === 'READ'){
      article = <ReadContainer></ReadContainer>
      Control = 
      <div className="Sidebar-right">
        <ControlContainer></ControlContainer>
      </div>
    }else if(this.props.mode ==='CREATE'){
      article = <CreateContainer></CreateContainer>
    }else if(this.props.mode ==='WELCOME'){
      article = <ReadContainer></ReadContainer>
      Control = null;
    }else if(this.props.mode ==='UPDATE'){
      article = <UpdateContainer></UpdateContainer>
    }
    return (
   
      <div className="App">
      
      <div className="Header">
          <HeaderContainer></HeaderContainer>
        </div> 
        <div className="Sidebar-left">
          <NavContainer></NavContainer>
        </div>  
        <div className="Content">                  
          {article}
        </div>        
          {Control} 
        <div className="footer"></div>
          <p>Copyright</p>
      </div> 
    );
  }
}

export default connect(
  function(state){
    return {
      mode:state.mode
    }
  }
)(App);
