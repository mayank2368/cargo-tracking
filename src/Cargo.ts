import {faker} from "@faker-js/faker";


let map; // Declare the map variable

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

export class Cargo {
  trackingId: string;
  location: {
    lat: number;
    lon: number;
  };

  constructor() {
    this.trackingId = faker.string.uuid();
    this.location = {
      lat: faker.location.latitude(),
      lon: faker.location.longitude(),
    };
  }
}
