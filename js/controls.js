let yaw = 0;
let pitch = 0;

export function setupControls(camera) {
  document.body.addEventListener("click", () => {
    document.body.requestPointerLock();
  });

  document.addEventListener("mousemove", e => {
    if (document.pointerLockElement === document.body) {
      yaw -= e.movementX * 0.002;
      pitch -= e.movementY * 0.002;
      pitch = Math.max(-1.5, Math.min(1.5, pitch));
      camera.rotation.set(pitch, yaw, 0);
    }
  });
}
