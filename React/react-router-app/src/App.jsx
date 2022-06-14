import { Route } from 'react-router-dom';

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
        <Route path='/welcome'>
          <Welcome />
        </Route>
        <Route path='/products'>
          <Products />
        </Route>
        <Route path='/product-detail/:productId'>
          <ProductDetail />
        </Route>
      </main>
    </div>
  );
}

export default App;
