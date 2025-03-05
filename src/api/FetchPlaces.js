async function FetchPlaces() {
  try {
    const response = await fetch('http://localhost:3000/places');

    if (!response.ok) {
      switch (response.status) {
        case 404:
          throw new Error('요청하신 데이터를 찾을 수 없습니다 (404)');
        default:
          throw new Error('서버에서 데이터를 불러오지 못했습니다.');
      }
    }

    const data = await response.json();
    return data.places;
  } catch (error) {
    console.log('데이터 가져오기 실패', error);
    throw error;
  }
}

export default FetchPlaces;
