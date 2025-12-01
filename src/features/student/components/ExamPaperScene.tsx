// "use client";

// import { Canvas } from "@react-three/fiber";
// import * as THREE from "three";
// import ExamPaper3D from "./ExamPaper3D";

// export default function ExamModelsScene() {
//   return (
//     <div style={{ width: "100%", height: "600px" }}>
//       <Canvas
//         camera={{ position: [0, 0, 5] }}
//         style={{ background: "#ffffff" }}
//         gl={{
//           toneMapping: THREE.NoToneMapping,
//           outputColorSpace: THREE.SRGBColorSpace,
//         }}
//         legacy={false}
//       >
//         <ambientLight intensity={1} />

//         <group position={[-2.4, 0, 0]}>
//           <ExamPaper3D title="نموذج A" />
//         </group>

//         <group position={[0, 0, 0]}>
//           <ExamPaper3D title="نموذج B" />
//         </group>

//         <group position={[2.4, 0, 0]}>
//           <ExamPaper3D title="نموذج C" />
//         </group>
//       </Canvas>
//     </div>
//   );
// }


import React from 'react'

function ExamPaperScene() {
  return (
    <div>ExamPaperScene</div>
  )
}

export default ExamPaperScene