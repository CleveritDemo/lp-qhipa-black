"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const LINE_OPACITIES = [0.1, 0.1, 0.1];

export function HeroDome() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) {
      return;
    }

    const lineColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--color-text-primary")
      .trim() || "#f4f4f6";

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(66, 1, 0.1, 2400);
    camera.position.set(0, 18, 0);
    camera.rotation.x = -0.04;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "low-power",
    });
    renderer.setClearColor(0xffffff, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.domElement.setAttribute("aria-hidden", "true");
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.inset = "0";
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.pointerEvents = "none";
    mount.appendChild(renderer.domElement);

    const dome = new THREE.Group();
    dome.position.y = -130;
    scene.add(dome);

    const geometries: THREE.BufferGeometry[] = [];
    const materials: THREE.LineBasicMaterial[] = [];
    const radius = 900;
    const segments = 256;

    const createMaterial = (index: number) => {
      const material = new THREE.LineBasicMaterial({
        color: new THREE.Color(lineColor),
        transparent: true,
        opacity: LINE_OPACITIES[index % LINE_OPACITIES.length],
        depthWrite: false,
      });
      materials.push(material);
      return material;
    };

    for (let ring = 1; ring <= 22; ring += 1) {
      const phi = (ring / 24) * Math.PI * 0.82;
      const y = Math.cos(phi) * radius;
      const ringRadius = Math.sin(phi) * radius;
      const points: THREE.Vector3[] = [];

      for (let segment = 0; segment <= segments; segment += 1) {
        const theta = (segment / segments) * Math.PI * 2;
        points.push(
          new THREE.Vector3(
            Math.cos(theta) * ringRadius,
            y,
            Math.sin(theta) * ringRadius,
          ),
        );
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      geometries.push(geometry);
      dome.add(new THREE.Line(geometry, createMaterial(ring)));
    }

    for (let radial = 0; radial < 64; radial += 1) {
      const theta = (radial / 64) * Math.PI * 2;
      const points: THREE.Vector3[] = [];

      for (let step = 0; step <= 80; step += 1) {
        const phi = (step / 80) * Math.PI * 0.82;
        const currentRadius = Math.sin(phi) * radius;
        points.push(
          new THREE.Vector3(
            Math.cos(theta) * currentRadius,
            Math.cos(phi) * radius,
            Math.sin(theta) * currentRadius,
          ),
        );
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      geometries.push(geometry);
      dome.add(new THREE.Line(geometry, createMaterial(radial + 2)));
    }

    const pointer = { x: 0, y: 0 };
    const smoothPointer = { x: 0, y: 0 };
    let frameId = 0;

    const resize = () => {
      const width = mount.clientWidth || window.innerWidth;
      const height = mount.clientHeight || window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const animate = () => {
      smoothPointer.x += (pointer.x - smoothPointer.x) * 0.12;
      smoothPointer.y += (pointer.y - smoothPointer.y) * 0.12;

      dome.rotation.y = smoothPointer.x * 0.14;
      dome.rotation.x = -smoothPointer.y * 0.06;
      camera.rotation.y = smoothPointer.x * 0.08;
      camera.rotation.x = -0.04 - smoothPointer.y * 0.055;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);

      geometries.forEach((geometry) => geometry.dispose());
      materials.forEach((material) => material.dispose());
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ zIndex: 1 }}
    />
  );
}
