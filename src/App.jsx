import './App.css';
import LikeBestEating from './components/LikeBestEating';
import BestEatingList from './components/BestEatingList';
import { LocationProvider } from './components/LocationPlace';

function App() {
  return (
    <LocationProvider>
      <header>
        <nav>
          <h1>맛집 리스트</h1>
        </nav>
      </header>
      <main className='container'>
        <LikeBestEating />
        <BestEatingList />
      </main>
    </LocationProvider>
  );
}

export default App;
