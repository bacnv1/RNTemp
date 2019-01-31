import {combineEpics} from 'redux-observable';
import {
    getUserEpic
} from './DemoEpic'

export const rootEpic = combineEpics(
    getUserEpic
)