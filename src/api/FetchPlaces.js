async function FetchPlaces() {
  try {
    const response = await fetch('http://localhost:3000/places');
    const data = await response.json();
    return data.places;
  } catch (error) {
    console.log('데이터 가져오기 실패', error);
    return [];
  }
}

export default FetchPlaces;
