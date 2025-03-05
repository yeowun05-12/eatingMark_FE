async function Geolocation() {
  return new Promise((resolve, reject) => {
    let options = {
      //enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      let crd = pos.coords;

      let userLat = crd.latitude;
      let userLon = crd.longitude;

      resolve({ userLat, userLon });
    }

    function error(err) {
      reject(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  });
}

export default Geolocation;
