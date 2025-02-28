import './App.css';
import LikeBestEating from './components/LikeBestEating';
import BestEatingList from './components/BestEatingList';
import FetchPlaces from './api/FetchPlaces';
import { useEffect, useState } from 'react';

function App() {
  const [eat, setEat] = useState([]);

  useEffect(() => {
    async function EatData() {
      try {
        const data = await FetchPlaces();
        setEat(data);
      } catch (error) {
        console.log('데이터 가져오기 실패', error);
      }
    }

    EatData();
  }, []);

  console.log(eat);
  return (
    <>
      <header>
        <nav>
          <h1>맛집 리스트</h1>
        </nav>
      </header>
      <main className='container'>
        <LikeBestEating places={eat} />
        <BestEatingList places={eat} />
      </main>
    </>
  );
}

export default App;
