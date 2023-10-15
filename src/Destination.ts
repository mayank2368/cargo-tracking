import {faker} from "@faker-js/faker";
import { Entity } from "./TrackingMap";

export class Destination implements Entity {
    receiver: string;
    weight: number;
    location: {
        lat: number,
        lon: number
    };

    constructor() {
        this.receiver = faker.person.firstName();
        this.location = {
            lat: +faker.location.latitude(),
            lon: +faker.location.longitude()
            
        }
        
    }
    popupText(): string {
            return `<h3>Return Name: ${this.receiver}</h3>`
    }
}

 