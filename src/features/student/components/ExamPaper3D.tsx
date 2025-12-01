// "use client";

// import { useRef, useState, useEffect } from "react";
// import { useFrame } from "@react-three/fiber";
// import * as THREE from "three";

// interface Props {
//   title: string;
// }

// export default function ExamPaper3D({ title }: Props) {
//   const ref = useRef<THREE.Mesh>(null);
//   const [texture, setTexture] = useState<THREE.Texture | null>(null);

//   // Drag rotation storage
//   const dragging = useRef(false);
//   const last = useRef<[number, number] | null>(null);
//   const target = useRef({ x: 0, y: 0 });

//   // Create paper texture
//   useEffect(() => {
//     const canvas = document.createElement("canvas");
//     canvas.width = 1024;
//     canvas.height = 1450;
//     const ctx = canvas.getContext("2d")!;

//     ctx.fillStyle = "#ffffff";
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     ctx.strokeStyle = "rgba(0,0,0,0.15)";
//     ctx.lineWidth = 6;
//     ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

//     ctx.direction = "rtl";
//     ctx.textAlign = "right";
//     ctx.fillStyle = "#000";
//     ctx.font = "bold 48px Arial";
//     ctx.fillText(title, canvas.width - 60, 100);

//     ctx.strokeStyle = "rgba(0,0,0,0.18)";
//     ctx.lineWidth = 2;
//     const top = 150,
//       bottom = 80,
//       spacing = 55;

//     for (let y = top; y < canvas.height - bottom; y += spacing) {
//       ctx.beginPath();
//       ctx.moveTo(60, y);
//       ctx.lineTo(canvas.width - 60, y);
//       ctx.stroke();
//     }

//     setTexture(new THREE.CanvasTexture(canvas));
//   }, [title]);

//   // Pointer controls
//   const onDown = (e: any) => {
//     dragging.current = true;
//     last.current = [e.clientX, e.clientY];
//   };

//   const onUp = () => {
//     dragging.current = false;
//     last.current = null;
//   };

//   const onMove = (e: any) => {
//     if (!dragging.current || !last.current) return;

//     const [lx, ly] = last.current;
//     const dx = e.clientX - lx;
//     const dy = e.clientY - ly;

//     // Add rotation speed
//     target.current.y += dx * 0.01;
//     target.current.x += dy * 0.01;

//     last.current = [e.clientX, e.clientY];
//   };

//   // Smooth rotation via interpolation
//   useFrame(() => {
//     if (!ref.current) return;

//     ref.current.rotation.x += (target.current.x - ref.current.rotation.x) * 0.15;
//     ref.current.rotation.y += (target.current.y - ref.current.rotation.y) * 0.15;
//   });

//   return (
//     <mesh ref={ref} onPointerDown={onDown} onPointerUp={onUp} onPointerLeave={onUp} onPointerMove={onMove}>
//       <planeGeometry args={[2.1, 3]} />
//       {texture && <meshBasicMaterial map={texture} side={THREE.DoubleSide} toneMapped={false} />}
//     </mesh>
//   );
// }


import React from 'react'

function ExamPaper3D() {
  return (
    <div>ExamPaper3D</div>
  )
}

export default ExamPaper3D