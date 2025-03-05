import { useLocation } from './LocationPlace';
import StoreList from './StoreList';

function BestEatingList() {
  const { sortedPlaces, loading, error } = useLocation();
  return (
    <section>
      <h2>맛집 리스트</h2>
      <ul className='eat_list'>
        {error ? (
          <p className='error'> {error}</p>
        ) : loading === true ? (
          <p className='loading'> 로딩 중 입니다...</p>
        ) : sortedPlaces.length > 0 ? (
          <StoreList place={sortedPlaces} />
        ) : (
          <p> 주변 맛집 찾는 중...</p>
        )}
      </ul>
    </section>
  );
}

export default BestEatingList;
