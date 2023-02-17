import { ACTION_TYPE } from "../constants/action";
import { IBook } from "../models/Book";

export const addBook = (data :IBook)=>{
    return {
        type : ACTION_TYPE.ADD_BOOK,     
        data
    }
};