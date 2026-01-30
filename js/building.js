import { camera } from "./main.js";

export function setupBuilding(scene) {
  addEventListener("keydown", e => {
    if (e.key.toLowerCase() === "b") {
      buildWall(scene);
    }
  });
}

function buildWall(scene) {
  const wall = new THREE.Mesh(
    new THREE.BoxGeometry(4, 4, 0.3),
    new THREE.MeshStandardMaterial({ color: 0xdddddd })
  );

  const dir = new THREE.Vector3();
  camera.getWorldDirection(dir);
  wall.position.copy(camera.position).add(dir.multiplyScalar(6));
  wall.position.y = 2;

  wall.castShadow = true;
  scene.add(wall);
}
