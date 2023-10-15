
interface Entity {
    location: {
        lat: number,
        lon: number,
    };
}

export class TrackingMap {
   private googleMap: google.maps.Map;

    constructor(elementId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(elementId) as HTMLElement, {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
        });
    }



attachMarker(entity: Entity): void {
    const marker = new google.maps.Marker({
        map: this.googleMap,
        position: {
            lat: entity.location.lat,
            lng: entity.location.lon,
        },
    });

    marker.addListener('click', ()=> {
        const popup = new google.maps.InfoWindow({
            content: "Here I am",
        });
        popup.open(this.googleMap, marker);
    });
    
}
}