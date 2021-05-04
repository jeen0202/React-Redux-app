import './App.css';
import Header from "./components/Header";
import NavContainer from "./containers/Nav";
import ReadContainer from "./containers/Read";
import ControlContainer from "./containers/Control";
import CreateContainer from './containers/Create';
import { connect } from 'react-redux';
import { Component } from 'react';


class App extends Component {
  render(){
    let article = null;
    if(this.props.mode === 'READ'){
      article = <ReadContainer></ReadContainer>
    }else if(this.props.mode ==='CREATE'){
      article = <CreateContainer></CreateContainer>
    }
    return (
   
      <div className="App">
  
        <Header></Header>
  
        <NavContainer></NavContainer>
  
        <ControlContainer></ControlContainer>
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
