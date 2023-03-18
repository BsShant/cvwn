import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  fetchingReportSuccess,
  reportSpinnerStarts,
  reportSpinnerStops,
  fetchingReportFailure,
  fetchingCaseSuccess,
  fetchingCaseFailure,
  caseSpinnerStops,
  caseSpinnerStarts,
  fetchingArticleSuccess,
  fetchingArticleFailure,
  articleSpinnerStops,
  articleSpinnerStarts,
} from "./resourceStore.actions";
import {
  fetchReport,
  fetchCase,
  fetchArticle,
} from "../../utils/api-calls/resourceCalls";
import {
  START_FETCHING_REPORT,
  START_FETCHING_REPORT_WITH_SPINNER,
  START_FETCHING_CASE,
  START_FETCHING_CASE_WITH_SPINNER,
  START_FETCHING_ARTICLE,
  START_FETCHING_ARTICLE_WITH_SPINNER,
} from "./resourceStore.actionTypes";

export function* reportFetch() {
  try {
    let fetchData = yield fetchReport();
    yield put(fetchingReportSuccess(fetchData.data));
  } catch (error) {
    yield put(fetchingReportFailure(error));
  }
}

export function* reportFetchWithSpinner() {
  try {
    yield put(reportSpinnerStarts());
    let fetchData = yield fetchReport();
    yield put(fetchingReportSuccess(fetchData.data));
    yield put(reportSpinnerStops());
  } catch (error) {
    yield put(fetchingReportFailure(error));
  }
}

export function* startReportFetch() {
  yield takeLatest(START_FETCHING_REPORT, reportFetch);
}

export function* startReportFetchWithSpinner() {
  yield takeLatest(
    START_FETCHING_REPORT_WITH_SPINNER,
    reportFetchWithSpinner
  );
}

export function* caseFetch() {
  try {
    let fetchData = yield fetchCase();
    yield put(fetchingCaseSuccess(fetchData));
  } catch (error) {
    yield put(fetchingCaseFailure(error));
  }
}

export function* caseFetchWithSpinner() {
  try {
    yield put(caseSpinnerStarts());
    let fetchData = yield fetchCase();
    yield put(fetchingCaseSuccess(fetchData));
    yield put(caseSpinnerStops());
  } catch (error) {
    yield put(fetchingCaseFailure(error));
  }
}

export function* startCaseFetch() {
  yield takeLatest(START_FETCHING_CASE, caseFetch);
}

export function* startCaseFetchWithSpinner() {
  yield takeLatest(
    START_FETCHING_CASE_WITH_SPINNER,
    caseFetchWithSpinner
  );
}


export function* articleFetch() {
  try {
    let fetchData = yield fetchArticle();
    yield put(fetchingArticleSuccess(fetchData.data));
  } catch (error) {
    yield put(fetchingArticleFailure(error));
  }
}

export function* articleFetchWithSpinner() {
  try {
    yield put(articleSpinnerStarts());
    let fetchData = yield fetchArticle();
    yield put(fetchingArticleSuccess(fetchData.data));
    yield put(articleSpinnerStops());
  } catch (error) {
    yield put(fetchingArticleFailure(error));
  }
}

export function* startArticleFetch() {
  yield takeLatest(START_FETCHING_ARTICLE, articleFetch);
}

export function* startArticleFetchWithSpinner() {
  yield takeLatest(
    START_FETCHING_ARTICLE_WITH_SPINNER,
    articleFetchWithSpinner
  );
}

export function* resourceMode() {
  yield all([
    call(startReportFetch),
    call(startReportFetchWithSpinner),
    call(startCaseFetch),
    call(startCaseFetchWithSpinner),
    call(startArticleFetch),
    call(startArticleFetchWithSpinner),
  ]);
}
