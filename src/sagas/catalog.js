import { put, spawn, call, takeEvery } from "redux-saga/effects"
import { catalogSucces, catalogFailure } from "../actions/catalogCreators"
import { fetchCatalog } from "../api/catalog"
import {

    CATALOG_REQUEST,
    CATALOG_CATEGORIES_CHANGE,
  
} from "../actions/actionTypes"

function* handleSearchCatalog(action) {
    try {

        let category = 0;

        if (action.type !== 'CATALOG_REQUEST' && 'category' in action.payload) {

            if (action.payload.category) {
                category = action.payload.category;
            
                if (action.payload.search) {
                    search = action.payload.search;
                }
            }
        };
    
        const data = yield call(fetchCatalog, category);
    
        // После успешного получения данных диспатчите соответствующий action
        yield put(catalogSucces(data));

        } catch (error) {
    
        // Если произошла ошибка, диспатчите action об ошибке
        yield put(catalogFailure(error));
        }
    };

function* watchCatalogRequestSaga() {
    yield takeEvery(CATALOG_REQUEST, handleSearchCatalog);
};

function* watchCatalogCategoryChangeSaga() {
    yield takeEvery(CATALOG_CATEGORIES_CHANGE, handleSearchCatalog);
};

export default function* saga() {
    yield spawn(watchCatalogRequestSaga);
    yield spawn(watchCatalogCategoryChangeSaga);
};
