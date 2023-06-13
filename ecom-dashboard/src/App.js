
import './App.css';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Login from './Login';
import Register from './Register';
import Protected from './Protected';
import ProductList from './ProductList';
import { Routes,Route } from 'react-router-dom';
import SearchProduct from './SearchProduct';


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/add' element={<Protected Cmd={AddProduct} />} />
        <Route path="/update/:id" element={<Protected Cmd={UpdateProduct}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<SearchProduct />} />
        <Route path='/' element={<Protected Cmd={ProductList} />} />
      </Routes>
    </div>
  );
}

export default App;
