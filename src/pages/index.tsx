// import { useState, useRef } from "react";
// import Webcam from "react-webcam";
// import JsBarcode from "jsbarcode";

// export default function Home() {
//   const [code, setCode] = useState<string | null>(null);
//   const webcamRef = useRef<Webcam>(null);

//   const scanBarcode = async () => {
//     // Obtener la imagen de la cámara
//     const imageSrc = webcamRef.current?.getScreenshot();
//     if (!imageSrc) return;

//     // Crear un elemento canvas para dibujar la imagen
//     const canvas = document.createElement("canvas");
//     const context = canvas.getContext("2d");
//     if (!context) return;

//     // Crear un elemento imagen para cargar la imagen
//     const image = new Image();
//     image.src = imageSrc;
//     image.onload = () => {
//       // Ajustar el tamaño del canvas al de la imagen
//       canvas.width = image.width;
//       canvas.height = image.height;
//       // Dibujar la imagen en el canvas
//       context.drawImage(image, 0, 0);
//       // Leer el código de barras del canvas
//       const barcode = JsBarcode.scan(canvas);
//       // const barcode = (JsBarcode as any).scan(canvas); solucion de forzar tipo

//       // Si se encuentra un código, actualizar el estado
//       if (barcode.length > 0) {
//         setCode(barcode[0].data);
//       } else {
//         // Si no se encuentra un código, mostrar un mensaje de error
//         setCode("No se ha encontrado ningún código de barras");
//       }
//     };
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
//       <div className="relative py-3 sm:max-w-xl sm:mx-auto">
//         <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
//         <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
//           <div className="max-w-md mx-auto">
//             <div className="flex items-center justify-center">
//               <Webcam
//                 audio={false}
//                 ref={webcamRef}
//                 screenshotFormat="image/jpeg"
//                 className="w-64 h-64 rounded-lg border-4 border-gray-300"
//               />
//             </div>
//             <div className="mt-8">
//               <button
//                 onClick={scanBarcode}
//                 className="py-2 px-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:from-green-600 hover:to-blue-600 focus:outline-none"
//               >
//                 Escanear código de barras
//               </button>
//             </div>
//             <div className="mt-8">
//               <p className="text-xl font-semibold text-gray-700">
//                 Código de barras: {code || "Ninguno"}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import Scanner from './Scanner';

function index() {
  return (
    <div className='App'>
      <h1>Bar Code Scanner</h1>
      <Scanner/>
    </div>
  )
}

export default index