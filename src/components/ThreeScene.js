import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const My3DScene = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const CELL_NUM = 15;

    // レンダラーを作成
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);

    // シーンを作成
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    // カメラの初期座標を設定（X座標:0, Y座標:0, Z座標:0）
    camera.position.set(0, -30, 500);

    // 地面を作成
    scene.add(new THREE.GridHelper(0));
    scene.add(new THREE.AxesHelper(0));

    const container = new THREE.Group();
    scene.add(container);

    // 共通マテリアル
    const material = new THREE.MeshNormalMaterial();
    // Box
    for (let i = 0; i < CELL_NUM; i++) {
      for (let j = 0; j < CELL_NUM; j++) {
        for (let k = 0; k < CELL_NUM; k++) {
          // 立方体個別の要素を作成
          const mesh = new THREE.Mesh(
            new THREE.BoxGeometry(1, 20, 1),
            material
          );

          // XYZ座標を設定
          mesh.position.set(
            8 * (i - CELL_NUM / 2),
            8 * (j - CELL_NUM / 2),
            8 * (k - CELL_NUM / 2)
          );

          // メッシュを3D空間に追加
          container.add(mesh);
        }
      }
    }

    // 平行光源
    const light = new THREE.DirectionalLight(0xffffff);
    light.intensity = 2; // 光の強さを倍に
    light.position.set(1, 1, 1); // ライトの方向
    // シーンに追加
    scene.add(light);

    // Render loop
    const render = () => {
      requestAnimationFrame(render);

      container.rotation.x += 0.01;
      container.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    render();

    // 初期化のために実行
    onResize();
    // リサイズイベント発生時に実行
    window.addEventListener("resize", onResize);

    function onResize() {
      // サイズを取得
      const width = window.innerWidth;
      const height = window.innerHeight;

      // レンダラーのサイズを調整する
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);

      // カメラのアスペクト比を正す
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }
  }, []);

  return (
    <canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
      ref={canvasRef}
      id="myCanvas"
    />
  );
};

export default My3DScene;
