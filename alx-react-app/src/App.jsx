import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from'./components/Header';
import MainContent from './components/MainContent';
import footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>
        <MainContent/>
        <WelcomeMessage/>
        <UserProfile name="alice" age="25" bio="loves hiking and photography"/>
        <Footer/>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
export default App