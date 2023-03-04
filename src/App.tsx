import React from 'react';
import './components/index.css';
import './components/App.css';
import { Navbar } from './components/Header/NavBar';
import { Aboutweb } from './components/Header/AboutWeb/AboutWeb';
import { Articles } from './components/Articles/Articles';
import { Sendingemail } from './components/Sendingemail/Sendingemail';
import { Footer } from './components/Footer/Footer';
import { Downheader } from './components/DownHeader/DownHeader';

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Aboutweb />
      </header>
      <Downheader />
      <Articles />
      <Sendingemail />
      <Footer />
    </>
  );
}
export default App;
