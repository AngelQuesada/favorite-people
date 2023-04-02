import { Provider } from 'react-redux';
import { Navbar } from './components';
import Home from './pages/Home';
import store from './redux/store';
import { LayoutContainer } from './styled-components/layout.styled.component';

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <LayoutContainer>
          <Home />
        </LayoutContainer>
      </Provider>
    </>
  );
};

export default App;
