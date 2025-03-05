import { useLocation } from './LocationPlace';

function StoreList() {
  const { sortedPlaces } = useLocation();

  return (
    <>
      {sortedPlaces.map((el) => {
        return (
          <li key={el.id}>
            <img
              src={`http://localhost:3000/${el.image.src}`}
              alt={el.image.alt}
            ></img>
            <p>{el.title}</p>
          </li>
        );
      })}
    </>
  );
}

export default StoreList;
