import React from 'react';
import { useAnimateOnScroll } from './AnimateWatcher';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  useAnimateOnScroll();
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
