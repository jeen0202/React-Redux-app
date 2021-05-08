import './App.css';
import HeaderContainer from "./containers/Header";
import NavContainer from "./containers/Nav";
import ReadContainer from "./containers/Read";
import ControlContainer from "./containers/Control";
import CreateContainer from './containers/Create';
import UpdateContainer from './containers/Update';
import { connect } from 'react-redux';
import { Component } from 'react';


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
  
        <HeaderContainer></HeaderContainer>

        <NavContainer></NavContainer>
  
        {Control}

        {article}
        
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
