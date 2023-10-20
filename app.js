   
const store = require('./store');
const {REQUESTED,SUCCEED,FAILED} =  require('./slice/user')

store.subscribe(()=>{
    console.log(store.getState());
})


store.dispatch(()=>({
    type: REQUESTED,
    payload: null,
    loading: true
}))
// console.log(store.getState());
const user = {
    id:'1',
    name: "alexanda francis malecha"
}



// if (!true) {
//     store.dispatch({
//         type:SUCCEED,
//         payload:user
//     })
// }

// else{
// store.dispatch({
//     type:FAILED,
//     payload:'route not found, 404'
// })
// }