function BestEatingList({ places }) {
  return (
    <section>
      <h2>맛집 리스트</h2>
      <ul className='eat_list'>
        {places.map((el) => {
          return (
            <li>
              <img
                key={el.id}
                src={`http://localhost:3000/${el.image.src}`}
                alt={el.image.alt}
              ></img>
              <p>{el.title}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default BestEatingList;
