import { put, call } from "redux-saga/effects"
import { topSalesFailure, topSalesSucces } from "../actions/topSalesCreators"
import { fetchTopSales } from "../api/topSales"

function* handleSearchTopSalesSaga() {
    try {

        const data = yield call(fetchTopSales)

        // После успешного получения данных диспатчите соответствующий action
        yield put(topSalesSucces(data));
    } catch (error) {
        // Если произошла ошибка, диспатчите action об ошибке
        yield put(topSalesFailure(error));
    }
};

export default function* saga() {
 
    yield call(handleSearchTopSalesSaga)

};
