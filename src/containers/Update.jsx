import { connect } from 'react-redux';
import Update from '../components/Update'

export default connect(
    function(state){
        let title,desc,id;
        for(let i =0;i<state.contents.length;i++){
            let d = state.contents[i];
            if(d.id===state.selected_content_id){
                title = d.title;
                desc = d.desc;
                id = d.id;
                break;
            }
        }
        return{
            title,
            desc,
            id,
        }
    },
    function(dispatch){
        return{}
    },
)(Update);
