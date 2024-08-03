const formGroups = document.querySelectorAll('.form-group');
let delay = 0;

function animateFormGroups() {
    formGroups.forEach((group, index) => {
        setTimeout(() => {
            group.classList.add('animate-form-group');
        }, delay);
        delay += 200;
    });
}

window.addEventListener('load', animateFormGroups);

const form = document.getElementById('registrationForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Your cosmic journey has begun! Welcome aboard, space cadet!');
});

// New code for star background
function createStarField() {
    const starsContainer = document.getElementById('stars-container');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    starsContainer.appendChild(renderer.domElement);

    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({color: 0xFFFFFF});

    const starVertices = [];
    for (let i = 0; i < 10000; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = -Math.random() * 2000;
        starVertices.push(x, y, z);
    }

    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    camera.position.z = 1;

    function animate() {
        requestAnimationFrame(animate);
        stars.rotation.y += 0.0002;
        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

createStarField();
