export function initMap() {
  //element.addEventListener("touchstart", handleTouchStart, { passive: true });
  // Create the Google Map
  const map = new google.maps.Map(document.getElementById("g-map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });

  const marker = new google.maps.Marker({
    position: { lat: -34.397, lng: 150.644 },
    map: map,
    title: "Marker Title",
  });
}
