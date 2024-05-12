import { put, spawn, call, takeEvery } from "redux-saga/effects"
import { PRODUCT_REQUEST} from "../actions/actionTypes"
import { fetchProduct } from "../api/fetchProduct";
import {productSuccess, productFailure } from "../actions/productCreators"

function* handleProductRequestSaga(action) {

  try {
    const id = action.payload.id;
    const data = yield call(fetchProduct, id)
    // результат ложим в каталог
    yield put(productSuccess(data));
  } catch (e) {
    yield put(productFailure(e.message));
  }
};

function* watchProductRequestSaga() {
  yield takeEvery(PRODUCT_REQUEST, handleProductRequestSaga);
};


export default function* saga() {
  yield spawn(watchProductRequestSaga);
};
