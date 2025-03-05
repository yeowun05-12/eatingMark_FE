import StoreList from './StoreList';

function LikeBestEating({ places }) {
  return (
    <section>
      <h2>찜한 맛집</h2>
      <p className='null_like'> 가고 싶은 맛집을 찜해주세요!</p>
      <ul className='like_eat'></ul>
    </section>
  );
}

export default LikeBestEating;
