import notes from '../../apis/api';
export const fetchNCERT6=()=>async dispatch=>{
    const response=await notes.get('/NCERT');
    dispatch({type:'FETCHNCERT6',payload:response.data});
};