import { Route, Switch } from 'react-router-dom';

import Welcome from './pages/Welcome.jsx';
import Products from './pages/Products.jsx';
import MainHeader from './components/MainHeader.jsx';
import ProductDetail from './pages/ProductDetail.jsx';

function App() {
  return (
    <div>
      <header>
        <MainHeader />
      </header>
      <main>
        <Switch>
          <Route path='/welcome'>
            <Welcome />
          </Route>
          <Route path='/products' exact>
            <Products />
          </Route>
          <Route path='/products/:productId'>
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
