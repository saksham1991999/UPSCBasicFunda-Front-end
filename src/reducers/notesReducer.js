import _ from 'lodash';
export default(state={},action)=>{
    switch(action.type){
        case 'FETCHNCERT6':
            return {...state,..._.mapKeys(action.payload,'id')};
        default:
            return state;
        }
}