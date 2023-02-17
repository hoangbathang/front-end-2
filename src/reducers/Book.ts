import { ACTION_TYPE } from "../constants/action";
import { actionBook } from "../models/Action";
import { IBook } from "../models/Book";

let initalstate: IBook[] = [{
    description: undefined,
    published: undefined,
    title: undefined
  }];
  const Book  = (state:IBook[]|undefined =initalstate, action:actionBook) => {
    switch (action.type) {
        case ACTION_TYPE.ADD_BOOK:
            return action.data;
        default:
            return state;
    }

}
export default Book;