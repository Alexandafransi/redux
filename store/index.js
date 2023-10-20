const { legacy_createStore: createStore, combineReducers, applyMiddleware } = require('redux');

const {reducer:userReducer} = require('../slice/user')
const {reducer:productReducer} = require('../slice/product')
// const logger = require('../middleware/logger');
// const dispatchFs = require('../middleware/dispatchFn');
const { logger, dispatchFs } = require('../middleware/index');

const reducer = combineReducers({
    user: userReducer,
    product:productReducer
})
const store = createStore(reducer,applyMiddleware(logger,dispatchFs))
module.exports = store
