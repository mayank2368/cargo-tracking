import { faker  } from "@faker-js/faker";
import { Entity } from "./TrackingMap";

export class Cargo implements Entity {
    trackingId: string;
    weight: number;
    location: {
        lat: number;
        lon: number;
    };

    constructor() {
        this.trackingId = faker.string.uuid();
        this.location = {
            lat: +faker.location.latitude(),
            lon: +faker.location.longitude(),
        }
    }
    popupText(): string{
        return `<h3>Return Name: ${this.trackingId}</h3>`;
    }

}