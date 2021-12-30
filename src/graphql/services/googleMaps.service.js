import fetch from "node-fetch";

const serviceDistanceMatrix = async (origin, destination) => {
  let url = "https://maps.googleapis.com/maps/api";
  const googleMapsKey = process.env.GOOOGLE_MAPS_KEY;
  url += "/distancematrix/json";
  // eslint-disable-next-line function-paren-newline
  url += `?origins=${encodeURIComponent(
    `${origin.coordinates[1]},${origin.coordinates[0]}`
    // eslint-disable-next-line function-paren-newline
  )}`;
  // eslint-disable-next-line function-paren-newline
  url += `&destinations=${encodeURIComponent(
    `${destination.coordinates[1]},${destination.coordinates[0]}`
    // eslint-disable-next-line function-paren-newline
  )}`;
  url += `&language=${encodeURIComponent("es")}`;
  url += `&region=${encodeURIComponent("gt")}`;
  url += `&key=${encodeURIComponent(googleMapsKey)}`;
  console.log("url", url);
  const res = await fetch(url, {
    method: "GET"
  });
  if (!res.ok) {
    throw new Error("Error en la comunicación con Google maps");
  }
  const data = await res.json();
  console.log("data", data);
  if (data.status === "OK") {
    if (data.rows) {
      if (data.rows[0]) {
        if (data.row[0].elements) {
          if (data.rows[0].elements[0]) {
            if (data.rows[0].elements[0].distance) {
              data.rows[0].elements[0].distance.value /= 1000;
              return data.rows[0].elements[0].distance;
            }
          }
        }
      }
    }
  }
  return {
    // eslint-disable-next-line camelcase
    administrative_area_level_1: "",
    // eslint-disable-next-line camelcase
    administrative_area_level_2: "",
    neighborhood: "",
    // eslint-disable-next-line camelcase
    street_address: "",
    sublocality: "",
    distance: {
      text: "",
      value: 0
    }
  };
};

export default {
  serviceDistanceMatrix
};
