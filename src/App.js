import './App.scss';
import Main from './components/Main';
import store from './store/index'
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
    
  );
}

export default App;
