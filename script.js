const gyroElement = document.getElementById("gyroscopeElement");

let xPosition = 0;
let yPosition = 0;

function handleOrientation(event) {
  const { gamma, beta } = event;
  // Adjust the position based on gyroscope data
  xPosition += gamma;
  yPosition += beta;

  gyroElement.style.transform = `translate(${xPosition}px, ${yPosition}px)`;
}

if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", handleOrientation);
} else {
  alert("Device orientation events are not supported on this device.");
}
