import React from 'react';
import Nav from './components/Nav/nav';
import Footer from './components/Footer/footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Nav />


        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
