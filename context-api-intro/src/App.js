import './App.css';
import {React} from 'react';
import Posts from './components/post/Posts';
import GlobalState from './context/global/GlobalState';

const App = () => {
  return (
    <GlobalState>
      <div>
        <h1>Context Api with axios</h1>
        <Posts/>
      </div>
    </GlobalState>
    
  );
}

export default App;
