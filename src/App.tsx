import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IRoute } from './models/Router';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { RouterUser } from './routers';
function App() {
  const renderRouter = (data: IRoute[]) => {
    return data.map((item, key) => {
      return <Route key={key} path={`${item.url}`} element={<item.component></item.component>} />
    });
  }
  return (
    <Router>
      <Routes>
      {renderRouter(RouterUser)}
      </Routes>
    </Router>
  );
}

export default App;
