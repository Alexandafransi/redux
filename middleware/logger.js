

const logger = (store) => (next) => (action) =>{

    console.log(action);
    next(action)
}

module.exports = logger