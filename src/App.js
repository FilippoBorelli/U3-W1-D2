import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/NavComponent';
import MyFooter from './components/FooterComponent';
import MyAlert from './components/AlertComponents';
import AllTheBooks from './components/BooksComponent';

function App() {
  return (
    <div bg="dark" data-bs-theme="dark">
      <MyAlert/>
      <header>
        <MyNav/>
      </header>
      <main>
        <AllTheBooks/>
      </main>
      <footer>
        <MyFooter/>
      </footer>
    </div>
  );
}

export default App;
