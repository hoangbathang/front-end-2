import { IRoute } from "../models/Router";
import Book from "../pages/book/Book";

export const RouterUser: IRoute[]  = [
    {
      url: '/',
      component: Book,
    },]