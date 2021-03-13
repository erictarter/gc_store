import './App.scss';
import Wrapper from './components/wrapper/Wrapper';
import { ContextProvider } from './components/context/AppContext';

function App() {
  return (
    <div className='App'>
      <ContextProvider>
        <Wrapper></Wrapper>
      </ContextProvider>
    </div>
  );
}

export default App;
