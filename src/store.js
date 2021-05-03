import {createStore} from 'redux';
const initState = {
    mode:'READ',
    welcome_content:{
        title : "WEB",
        desc:"Hello, WEB"
    },
    seleted_content_id:1,
    contents:[
        {id:1, title:'HTML', desc:'HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.'},
        {id:2, title:'CSS', desc:'CSS is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.'},
        {id:3, title:'JS', desc:'JS is a programming language that conforms to the ECMAScript specification.'}
    ]
    
}
function Reducer(state=initState,action){
    if(action.type === 'WELCOME'){
        return {...state, mode:action.mode};
    }
    if(action.type === 'READ'){
        return {...state,mode:'READ',seleted_content_id:action.id};
    }
    return state;
}
export default createStore(Reducer,
    window.devToolsExtension && window.devToolsExtension());