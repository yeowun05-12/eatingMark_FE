function LikeBestEating({ places }) {
  return (
    <section>
      <h2>찜한 맛집</h2>
      <ul className='like_eat'>
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
        ,
      </ul>
    </section>
  );
}

export default LikeBestEating;
