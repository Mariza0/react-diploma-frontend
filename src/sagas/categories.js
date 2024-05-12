import { takeLatest, put, call } from "redux-saga/effects"
import { categoriesSucces, categoriesFailure } from "../actions/categoriesCreators"
import { fetchCategories } from "../api/categories"
import {

    CATEGORIES_CHANGE,
    CATALOG_CATEGORIES_CHANGE,
    OFFSET_CATEGORIES_CHANGE,
  
} from "../actions/actionTypes"

function* handleSearchCategories(action) {
    try {

        const data = yield call(fetchCategories)
       
        const categoriesWithAll = [...data];

        yield put(categoriesSucces(data));

        } catch (error) {
        // Если произошла ошибка, диспатчите action об ошибке
        yield put(categoriesFailure(error));
    }
}

function* watchCategoriesRequestSaga() {
    yield takeLatest(CATEGORIES_CHANGE, handleSearchCategories);
  
}

function* watchCategoriesChangeSaga() {
    yield takeLatest(CATALOG_CATEGORIES_CHANGE, handleSearchCategories); 
}

function* watchOffsetCategoriesChangeSaga() {
    yield takeLatest(OFFSET_CATEGORIES_CHANGE, handleSearchCategories);
}

export default function* saga() {

    yield call(handleSearchCategories)
    yield takeLatest(CATEGORIES_CHANGE, handleSearchCategories);
    yield watchCategoriesRequestSaga();
    yield watchCategoriesChangeSaga();
    yield watchOffsetCategoriesChangeSaga();

};
