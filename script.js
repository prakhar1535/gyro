const gyroElement = document.getElementById("gyroscopeElement");

function handleOrientation(event) {
  const { gamma } = event;
  gyroElement.style.transform = `rotate(${gamma}deg)`;
}

if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", handleOrientation);
} else {
  alert("Device orientation events are not supported on this device.");
}
