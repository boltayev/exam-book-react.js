import './App.scss';

import { Routes, Route, Navigate } from 'react-router-dom';
// import Navbar from '../pages/components/navbar/Navbar';
import Header from '../header/Header';
// import Search from '../pages/components/search/Search';

import Login from '../pages/auth/Login';
import HomePage from '../pages/components/homePage/HomePage';
import BooksBlock from '../pages/components/booksBlock/BooksBlock';
import SignPages from '../pages/signpages/SignPages';
import ErrorPages from '../pages/error/ErrorPages';
import Layouts from '../layouts/Layouts';
import { useEffect } from 'react';
import useState from 'react'



function App() {
 useEffect(() => {
  if(localStorage.getItem('mode') === 'true'){
    document.body.classList.add('dark')
  }else{
    document.body.classList.remove('dark')
  }
 })
  return (
      <div>
          {/* <Header></Header> */}
          {/* <Navbar></Navbar>
          <Search></Search> */}
          {/* <HomePage></HomePage> */}
          {/* <BooksBlock></BooksBlock> */}
          {/* <SignPages></SignPages> */}
          {/* <Login></Login> */}
          {/* <ErrorPages></ErrorPages> */}

          <>
            <Routes>
                <Route path='/' element={<Navigate to={'/sign-in'} />} />
                <Route path='/home' element={<Layouts />}>
                    <Route index element={<HomePage />} />	
                    <Route path='/home/books/:postId' element={<SignPages />} />
                </Route>
                <Route path='/sign-in' element={<Login />} />
                <Route path='*' element={<ErrorPages />} />s
            </Routes>

          </>

      </div>

      
  );
}

export default App;