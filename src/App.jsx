import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className ="App">
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos a mi Ecommerce'}/>

    </div>
  );
}

export default App;
