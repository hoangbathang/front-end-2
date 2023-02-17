import axios from 'axios';
import React, { useEffect, useMemo } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../../actions/book.action';
import { IBook } from '../../models/Book';
import { IRootState } from '../../reducers/CreateReducer';
const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
    { id: 4, name: 'Product 4', price: 400 },
    { id: 5, name: 'Product 5', price: 500 },
    { id: 6, name: 'Product 6', price: 600 },
  ];
const ShowBook = () => {
    const Dispatch = useDispatch();
    useEffect(()=>{
        axios.get('http://localhost:8080/api/book').then((res)=>{
            Dispatch(action.addBook(res.data))
        })

    },[])
    const dataBook: IBook[] | undefined = useSelector((state: IRootState) => {
        if (state.Book !== undefined) {
            return state.Book;
        }
    });
    const dataBookRender = useMemo(() => dataBook, [dataBook]);
    return (
        <Container>
          <Row xs={1} sm={2} md={3} lg={4}>
            { dataBookRender && dataBookRender.map((product,index) => (
              <Col key={index}>
                <Card>
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>{product.published}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      );
}

export default ShowBook
