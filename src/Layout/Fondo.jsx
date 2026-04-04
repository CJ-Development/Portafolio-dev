import { useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
import '../Estilos/Fondo.css';


export default function Fondo({ darkMode }) {
  const vantaRef = useRef(null);

  useEffect(() => {
    let effect = NET.default({
      el: vantaRef.current,
      THREE: THREE,

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