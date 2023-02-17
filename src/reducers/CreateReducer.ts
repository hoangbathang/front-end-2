import {combineReducers} from 'redux';
import Book from './Book';
const reducers = combineReducers({
    Book
})
export default  reducers;
export type IRootState = ReturnType<typeof reducers>;