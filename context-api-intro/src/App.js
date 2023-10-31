import './App.css';
import {React} from 'react';
import Form from './components/form/Forms';
import Students from './components/students/Students'
import GlobalState from './context/global/GlobalState';

const App = () => {
  return (
    <GlobalState>
      <div>
        <Form/>
        <Students/>
      </div>
    </GlobalState>
    
  );
}

export default App;
