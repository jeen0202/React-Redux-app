import {createStore} from 'redux';
const initState = {
    mode:'WELCOME',
    welcome_content:{
        title : "WEB",
        desc:"Hello, WEB"
    },
    seleted_content_id:1,
    max_content_id:3,
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
        return {...state,mode:'READ',selected_content_id:action.id};
    }
    if(action.type ==='CREATE'){
        return {...state,mode:'CREATE'}
    }
    if(action.type ==='CREATE_PROCESS'){
        let newId = state.max_content_id+1;
        let newContents = [...state.contents,
            {
                id:newId,
                title:action.title,
                desc:action.desc
            }
        ];
        return {
            ...state,
            contents:newContents,
            max_content_id:newId,
            mode:'READ',
            selected_content_id:newId
        }        
    }
    if(action.type ==='UPDATE'){
        return {...state,mode:'UPDATE'}
    }if(action.type ==='UPDATE_PROCESS'){        
        let newContents = [
            ...state.contents           
        ];
        for(let i = 0; i <newContents.length; i++){
            if(newContents[i].id === action.id){
                newContents[i].title = action.title;
                newContents[i].desc = action.desc;
            }
        }
        return {
            ...state,
            contents:newContents,            
            mode:'READ',
            selected_content_id:action.id
        }        
    }
    if(action.type ==='DELETE'){
        return {...state,mode:'DELETE'}
    }
    return state;
}
export default createStore(Reducer,
    window.devToolsExtension && window.devToolsExtension());