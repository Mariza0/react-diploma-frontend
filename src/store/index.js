import { combineReducers, applyMiddleware, compose } from "redux"
import { legacy_createStore as createStore} from 'redux'
import createSagaMiddleware from "redux-saga"

import topSalesSaga from "../sagas/topSales"
import topSalesReducer from "../reducers/topSales"
import catalogReducer from "../reducers/catalog"
import catalogSaga from "../sagas/catalog"
import categoriesSaga from "../sagas/categories"
import categoriesReducer from "../reducers/categories"
import offsetReducer from "../reducers/offset"
import offsetSaga from "../sagas/offset"
import searchSaga from "../sagas/search"
import searchReducer from "../reducers/search"
import productSaga from "../sagas/product"
import productReducer from "../reducers/product"
import cartReducer from "../reducers/cart"

const reducer = combineReducers({topSales: topSalesReducer,
                                catalog: catalogReducer,
                                categories: categoriesReducer,
                                offset: offsetReducer,
                                search: searchReducer,
                                product: productReducer,
                                cart: cartReducer,
                              })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(topSalesSaga)
sagaMiddleware.run(catalogSaga)
sagaMiddleware.run(categoriesSaga)
sagaMiddleware.run(offsetSaga)
sagaMiddleware.run(searchSaga)
sagaMiddleware.run(productSaga)

export default store
