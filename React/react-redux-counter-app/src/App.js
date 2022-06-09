import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <UserProfile />}
      {isAuthenticated && <Counter />}
    </>
  );
}

export default App;
