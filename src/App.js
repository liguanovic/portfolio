import React from 'react';
import Loader from './components/Loader/loader';
import Nav from './components/Nav/nav';
import About from './components/About/about';
import Skills from './components/Skills/skills';
import Projects from './components/Projects/projects';
import Form from './components/Form/form';
import Data from './Data/data.json';
import Footer from './components/Footer/footer';

function App() {
  return (
    <React.StrictMode basename='/portfolio'>
      <Loader />
      <Nav />
      <About />
      <Skills competences={Data.competences} />
      <Projects />
      <Form />
      <Footer />
    </React.StrictMode>
  );
}

export default App;
