const { selectmaterial } = require("../components/actions");

const materialReducer=()=>{
return [
    {test:'working'}
]
};
const SelectedmaterialReducer=(selectedmaterial=null,action)=>{
if(action.type==='MATERIAL_SELECTED'){
    return action.payload;
}
return selectedmaterial;
}