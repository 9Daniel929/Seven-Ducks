import { setupPlayer, updatePlayer } from "./player.js";
import { setupControls } from "./controls.js";
import { shoot } from "./shooting.js";
import { setupBuilding } from "./building.js";
import { createMap } from "./map.js";

export const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);
scene.fog = new THREE.Fog(0x87ceeb, 50, 400);

export const camera = new THREE.PerspectiveCamera(
  75,
  innerWidth / innerHeight,
  0.1,
  1000
);
camera.position.set(0, 2, 5);

export const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

/* LIGHT */
scene.add(new THREE.AmbientLight(0xffffff, 0.4));
const sun = new THREE.DirectionalLight(0xffffff, 1.2);
sun.position.set(50, 80, 50);
sun.castShadow = true;
scene.add(sun);

/* MAP */
createMap(scene);

/* INIT */
setupPlayer(camera);
setupControls(camera);
setupBuilding(scene);

document.addEventListener("click", shoot);

/* LOOP */
function animate() {
  requestAnimationFrame(animate);
  updatePlayer();
  renderer.render(scene, camera);
}
animate();

addEventListener("resize", () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});
