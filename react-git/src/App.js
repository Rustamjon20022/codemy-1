import React from 'react';
import  Navbar  from './components/Navbar';
import Body from "./components/Body"
import Footer from "./components/Footer"
import KidsLatest from './components/Kid\'s Latest';
import SocialMedia from './components/Social Media';
function App() {
  return (
    <div>
      <Navbar />
      <Body />
      <KidsLatest />
      <SocialMedia />
      <Footer /> 
    </div>
  );
}

export default App;
