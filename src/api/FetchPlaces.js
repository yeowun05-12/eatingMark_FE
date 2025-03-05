async function FetchPlaces() {
  try {
    const response = await fetch('http://localhost:3000/placess');

    if (!response.ok) {
      if(response.status >= 400 && response.status < 500){
        throw new Error(`클라이언트 오류 발생 (${response.status})`);
      }else if(response.status > 500){
        throw new Error(`서버 오류 발생 (${response.status})`);
      }else{
        throw new Error(`알 수 없는 오류가 발생했습니다.)`); 
      }
    }
    const data = await response.json();
    return data.places;
    }catch (error) {
      console.log('데이터 가져오기 실패', error);
      throw error;
  } 
  }


export default FetchPlaces;
