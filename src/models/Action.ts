import { IBook } from "./Book";

export interface actionBook {
    type: string|undefined,
    data: IBook[]|undefined
}