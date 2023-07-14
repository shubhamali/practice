import './App.css';
// import Header from './Header';
import Login from './login/Login';
// import Products from './Products';
// import Home from './Home';
// import {Route,Routes}from'react-router-dom';
function App() {
  return (
    <div className="App">
      {/* <Header/>
      <Home/> */}
      {/* <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        {/* <Route path='/products' element={<Products/>}/>
      </Routes> */}
      <Login/>
    </div>
  );
}

export default App;
