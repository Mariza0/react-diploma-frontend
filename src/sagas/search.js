import { put, spawn, call, takeEvery } from "redux-saga/effects";
import { searchFailure } from "../actions/searchCretors";
import { SEARCH_REQUEST } from "../actions/actionTypes";
import { catalogSucces } from "../actions/catalogCreators";
import { fetchItems } from "../api/fetchItems";


function* handleSearchSaga(action) {

  try {

    const search = (action.payload.search) ? (action.payload.search) : '';
    const category = action.payload.category;
    const countOffset = action.payload.countOffset;

    const data = yield call(fetchItems, category, countOffset, search);

    // результат ложим в каталог
    yield put(catalogSucces(data));
  } catch (e) {
    yield put(searchFailure(e.message));
  }
};

function* watchSearchSaga() {
  yield takeEvery(SEARCH_REQUEST, handleSearchSaga);
};

export default function* saga() {
  yield spawn(watchSearchSaga);
};
