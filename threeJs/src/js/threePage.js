
function init() {

  var renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('mainCanvas')
  });

  renderer.setClearColor(0x000000);

  var scene = new THREE.Scene();

  // 添加一个长方体
  // addCube(scene, renderer);

  // set OrthographicCamera
  // setOrthographicCamera(scene, renderer);

  //set PerspectiveCamera
  // setPerspectiveCamera(scene, renderer);

  // 创建小车
  createCar(scene, renderer);
}

function createCar(scene, renderer) {
  var camera = new THREE.OrthographicCamera(-10, 10, 7.5, -7.5, 1, 40);
  camera.position.set(20, 18, -19);
  camera.lookAt(new THREE.Vector3(0, 0, 0));
  scene.add(camera);

  // 设置立方体
  var cube = new THREE.Mesh(new THREE.CubeGeometry(6, 4, 8),
    new THREE.MeshBasicMaterial({
      color: 0xdedede
    })
  );
  scene.add(cube);

  // 设置两个圆柱体
  var cylinder1 = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 10, 18, 3),
    new THREE.MeshBasicMaterial({
      color: 0xbcbcbc
    })
  );
  cylinder1.position.set(0, -1, 3);
  cylinder1.rotateZ(Math.PI / 2);
  scene.add(cylinder1);
  var cylinder2 = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 10, 18, 3),
    new THREE.MeshBasicMaterial({
      color: 0xbcbcbc
    })
  );
  cylinder2.position.set(0, -1, -3);
  cylinder2.rotateZ(Math.PI / 2);
  scene.add(cylinder2);

  //add

  renderer.render(scene, camera);
}

function setPerspectiveCamera(scene, renderer) {

  var camera = new THREE.PerspectiveCamera(45, 400 / 300, 1, 10);
  camera.position.set(0, 0, 5);

  var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({
      color: 0xff0000,
      wireframe: true
    })
  );
  scene.add(cube);

  // 渲染
  renderer.render(scene, camera);
}

function setOrthographicCamera(scene, renderer) {

  // 设置相机
  var camera = new THREE.OrthographicCamera(-1, 3, 1.5, -1.5, 1, 10);
  camera.position.set(4, 4, 5);
  camera.lookAt(new THREE.Vector3(0, 0, 0));
  scene.add(camera);

  // 设置正方体（框架型，wire frame）
  var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({
      color: 0xff0000,
      wireframe: true
    })
  );
  scene.add(cube);

  // 渲染
  renderer.render(scene, camera);
}


function addCube(scene, renderer) {
  var camera = new THREE.PerspectiveCamera(45, 4 / 3, 1, 1000);
  camera.position.set(0, 0, 5);
  scene.add(camera);

  // 向空间中添加一个长方体
  var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 2, 3),
    new THREE.MeshBasicMaterial({
      color: 0xff0000
    })
  );
  scene.add(cube);

  // 渲染
  renderer.render(scene, camera);
}
