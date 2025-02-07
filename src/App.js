import './App.css';
import Counter from './component/Counter.jsx';
import { Provider } from 'react-redux';
import store from './redux1/store.js';

function App() {
  return (
    <div className="App">
     <Provider store={store}>
      <Counter/></Provider>
    </div>
  );  
}

export default App;
