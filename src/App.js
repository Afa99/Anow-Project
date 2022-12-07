import './App.css';
import React from 'react';  
import Presentation from './pages/page-presentation/Presentation';
import Header from './pages/page-presentation/components/header/Header';
import About from './pages/page-about/About';
import Portfolio from './pages/page-portfolio/Portfolio';
import BackgroundImg from './pages/page-backgroundimg/BackgroundImg';
import Laboratory from './pages/page-laboratory/Laboratory';
import Purple from './pages/page-purple/Purple';
import Email from './pages/page-email/Email';
import Futer from './pages/page-futer/Futer';
  

function App() {  
  return(
    <div>
      <Header/>
      <Presentation/>
      <About/>
      <Portfolio/>
      <BackgroundImg/>   
      <Laboratory/> 
      <Purple/> 
      <Email/> 
      <Futer/>  
    </div>
  );
 }
export default App;
