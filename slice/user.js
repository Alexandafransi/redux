
const REQUESTED = 'requested'
const SUCCEED = 'succeed'
const FAILED = 'failed'



const initialState = {
    loading: false,
    error: '',
    user: null
}
const reducer = (state=initialState, action) => {
    switch (action.type) {
        case REQUESTED: return {...state, loading:true}
          
        case SUCCEED: return {...state, loading:false, user:action.payload}

        case FAILED: return {...state, loading:false, error:action.payload}

        default:
            return state
        }
}

module.exports = {reducer, REQUESTED, SUCCEED, FAILED}
