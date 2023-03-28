import logo from './logo.svg';
import './App.css';
import ProductList from './Product';
import AddButton from './Product/addProduct';

function App() {

  return (
    <div className="App">

      <div className='product-page'>
        <div></div>
        <h1 className='product-title'>Product List</h1>
        <AddButton />
      </div>
      <ProductList />
    </div>
  );
}

export default App;
