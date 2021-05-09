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
      Control = <ControlContainer></ControlContainer>
    }else if(this.props.mode ==='CREATE'){
      article = <CreateContainer></CreateContainer>
    }else if(this.props.mode ==='WELCOME'){
      article = <ReadContainer></ReadContainer>
    }else if(this.props.mode ==='UPDATE'){
      article = <UpdateContainer></UpdateContainer>
    }
    return (
   
      <div className="App">
        <Sidebar width ={150} height = {"100vh"}>
          <HeaderContainer></HeaderContainer>
          <NavContainer></NavContainer>          
        </Sidebar>
        <div className="Content">
          {Control}         
          {article}
        </div>
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
