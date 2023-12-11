
import './App.css';
import Footer from './components/Layouts/Footer';
import Header from './components/Layouts/Header';
import AppRouter from './routes/AppRouter';


function App() {
  return (
    <div className='container'>
      <Header />
      <AppRouter />
      <Footer />
    </div>
  )
}

export default App;
