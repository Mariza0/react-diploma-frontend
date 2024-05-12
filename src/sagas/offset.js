import { takeLatest, put, spawn } from "redux-saga/effects"
import { offsetSucces, offsetFailure } from "../actions/offsetCreators"
import {

    OFFSET_REQUEST
  
} from "../actions/actionTypes"
import { fetchItems } from "../api/fetchItems"

function* handleSearchOffset(action) {
    try {

        let data;
        const { countOffset, category, search } =  action.payload

        data = yield fetchItems(category, countOffset, search)

        yield put(offsetSucces(data));
    } catch (error) {
        // Если произошла ошибка, диспатчим action об ошибке
        yield put(offsetFailure(error));
    }

};

function* watchLoadOffsetSaga() {
    yield takeLatest([OFFSET_REQUEST], handleSearchOffset);
};

export default function* saga() {

    yield spawn(watchLoadOffsetSaga)

};
