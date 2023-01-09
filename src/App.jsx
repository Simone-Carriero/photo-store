import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Cart, Photos, Error, Favorite, SharedLayout } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<SharedLayout />}>
          <Route
            index
            element={<Photos />}
          />
          <Route
            path='favorite'
            element={<Favorite />}
          />
          <Route
            path='cart'
            element={<Cart />}
          />
        </Route>
        <Route
          path='*'
          element={<Error />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
