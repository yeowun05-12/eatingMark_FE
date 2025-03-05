import { createContext, useContext, useState, useEffect } from 'react';
import Geolocation from '../api/Geolocation';
import FetchPlaces from '../api/FetchPlaces';
import { sortPlacesByDistance } from '../api/loc';

// Context 생성
const LocationContext = createContext();

export function LocationProvider({ children }) {
  const [userLocation, setUserLocation] = useState(null);
  const [placeLocation, setPlaceLocation] = useState([]);
  const [sortedPlaces, setSortedPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 사용자 위치 가져오기
  useEffect(() => {
    async function fetchLocation() {
      try {
        const location = await Geolocation();
        console.log('사용자의 위치', location);
        setUserLocation(location);
        setError(null);
      } catch (error) {
        setError(`사용자의 위치를 가져오는데 실패했습니다`, error);
      } finally {
        setLoading(false);
      }
    }
    fetchLocation();
  }, []);

  // 맛집 데이터 가져오기
  useEffect(() => {
    async function fetchPlaceLocation() {
      try {
        const places = await FetchPlaces();
        setPlaceLocation(places);
        setError(null);
      } catch (error) {
        if(error.message.includes("클라이언트 오류")){
          setError(`요청하신 데이터를 찾을 수 없습니다. (404)`);
        }else if(error.message.includes("서버 오류")){
          setError(`서버에서 데이터를 불러올 수 없습니다. 나중에 다시 시도해주세요.`);
        }else{
          setError(`알 수 없는 오류가 발생했습니다`);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchPlaceLocation();
  }, []);

  // 위치 기반으로 가까운 맛집 정렬
  useEffect(() => {
    if (userLocation && placeLocation.length > 0) {
      const sorted = sortPlacesByDistance(
        placeLocation,
        userLocation.userLat,
        userLocation.userLon
      );
      console.log('정렬된 맛집 리스트', sorted);
      setSortedPlaces(sorted);
    }
  }, [userLocation, placeLocation]);

  return (
    <LocationContext.Provider
      value={{ sortedPlaces, userLocation, loading, error }}
    >
      {children}
    </LocationContext.Provider>
  );
}

// 컨텍스트 사용하기 위한 훅 생성
export function useLocation() {
  return useContext(LocationContext);
}
