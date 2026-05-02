// scroll reveal
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 50) {
      el.classList.add("active");
    }
  });
});

// three.js
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("bg"),
  alpha: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;

const geometry = new THREE.BufferGeometry();
const vertices = [];

for (let i = 0; i < 1000; i++) {
  vertices.push(
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10
  );
}

geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

const material = new THREE.PointsMaterial({
  color: 0x6366f1,
  size: 0.02
});

const points = new THREE.Points(geometry, material);
scene.add(points);

function animate() {
  requestAnimationFrame(animate);
  points.rotation.y += 0.0004;
  renderer.render(scene, camera);
}

animate();