import Header from '../components/Header'
import {connect} from 'react-redux'

export default connect(
    function(state){     
        return{data:state.header}
    }
, function(dispatch){
    return {
        onClick:function(){
            dispatch({type:'WELCOME',mode:'WELCOME'})
        }
    }
}
)(Header);