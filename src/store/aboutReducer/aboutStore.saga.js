import { takeLatest, call, put, all } from 'redux-saga/effects';
import { fetchingAboutFailure, fetchingAboutSuccess, aboutSpinnerStops, aboutSpinnerStarts } from './aboutStore.actions';
import { fetchAbout } from '../../utils/api-calls/aboutCalls';
import { START_FETCHING_ABOUT, START_FETCHING_ABOUT_WITH_SPINNER } from './aboutStore.actionTypes';

export function* aboutFetch(){

    try {
        let fetchData = yield fetchAbout();
        yield put(fetchingAboutSuccess(fetchData.data))
    } catch (error) {
        yield put(fetchingAboutFailure(error))
    }
}

export function* aboutFetchWithSpinner(){

    try {
        yield put(aboutSpinnerStarts())
        let fetchData = yield fetchAbout();
        yield put(fetchingAboutSuccess(fetchData.data))
        yield put(aboutSpinnerStops())

    } catch (error) {
        yield put(fetchingAboutFailure(error))
        // yield put(publicationSpinnerStops())

    }
}



export function* startAboutFetch(){
    yield takeLatest(START_FETCHING_ABOUT, aboutFetch)

    
}

export function* startAboutFetchWithSpinner(){
    yield takeLatest(START_FETCHING_ABOUT_WITH_SPINNER, aboutFetchWithSpinner)

    
}

export function* aboutMode(){
    yield all([call(startAboutFetch), call(startAboutFetchWithSpinner)])
}