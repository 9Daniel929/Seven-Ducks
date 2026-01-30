let camera;
const keys = {};

export function setupPlayer(cam) {
  camera = cam;
  addEventListener("keydown", e => keys[e.key.toLowerCase()] = true);
  addEventListener("keyup", e => keys[e.key.toLowerCase()] = false);
}

export function updatePlayer() {
  const speed = 0.25;

  const forward = new THREE.Vector3();
  camera.getWorldDirection(forward);
  forward.y = 0;
  forward.normalize();

  const right = new THREE.Vector3().crossVectors(forward, camera.up);

  if (keys.w) camera.position.addScaledVector(forward, speed);
  if (keys.s) camera.position.addScaledVector(forward, -speed);
  if (keys.a) camera.position.addScaledVector(right, -speed);
  if (keys.d) camera.position.addScaledVector(right, speed);
}
