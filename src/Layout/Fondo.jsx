import { useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
import '../Estilos/Fondo.css';


// Shim de compatibilidad para Vanta.js con versiones modernas de Three.js
const vantaThree = new Proxy(THREE, {
  get(target, prop, receiver) {
    if (prop === "VertexColors") {
      return true;
    }
    return Reflect.get(target, prop, receiver);
  },
});

if (typeof window !== "undefined") {
  window.THREE = vantaThree;
}

export default function Fondo({ darkMode }) {
  const vantaRef = useRef(null);

  useEffect(() => {
    const initNet = NET.default || NET;
    let effect = initNet({
      el: vantaRef.current,
      THREE: vantaThree,

      color: darkMode ? 0x8bb174 : 0x426b69, // líneas

      backgroundColor: darkMode 
        ? 0x222e50   // oscuro
        : 0xf5f5f5,  // claro

      points: 10,
      maxDistance: 20,
      spacing: 11,
    });

    return () => {
      if (effect) effect.destroy();
    };
  }, [darkMode]);

  return <div ref={vantaRef} className="background"></div>;
}