const dispatchFs = ({dispatch,getState}) => (next) => (action) =>{

    if(typeof action === 'function') return next(action(dispatch,getState))
    next(action)
}

module.exports = dispatchFs