import { camera, scene } from "./main.js";

const raycaster = new THREE.Raycaster();
const enemies = [];

/* spawn enemies */
for (let i = 0; i < 10; i++) {
  const enemy = new THREE.Mesh(
    new THREE.BoxGeometry(1.5, 1.5, 1.5),
    new THREE.MeshStandardMaterial({ color: 0xff3333 })
  );
  enemy.position.set(
    (Math.random() - 0.5) * 100,
    1,
    (Math.random() - 0.5) * 100
  );
  enemies.push(enemy);
  scene.add(enemy);
}

export function shoot() {
  if (document.pointerLockElement !== document.body) return;

  raycaster.setFromCamera({ x: 0, y: 0 }, camera);
  const hits = raycaster.intersectObjects(enemies);

  if (hits.length > 0) {
    scene.remove(hits[0].object);
    enemies.splice(enemies.indexOf(hits[0].object), 1);
  }
}
