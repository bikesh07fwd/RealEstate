// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { useNavigate } from "react-router-dom";

// function Hero() {
//   const imgRef = useRef(null);
//   const headingRef = useRef(null);
//   const rightRef = useRef(null);
//   const navigate = useNavigate();

//   const boxRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       headingRef.current,
//       { y: 50, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1.5,
//         ease: "power3.out",
//       }
//     );

//     gsap.fromTo(
//       rightRef.current,
//       { y: -50, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1.5,
//         ease: "power3.out",
//       }
//     );

//     gsap.fromTo(
//       imgRef.current,
//       { opacity: 0.2, scale: 0.8 }, // Initial state
//       {
//         opacity: 1,
//         scale: 1, // Final state
//         duration: 2,
//         ease: "power2.out",
//       }
//     );

//     gsap.fromTo(
//       boxRef.current,
//       {
//         width: 0,
//         opacity: 0,
//         overflow: "hidden",
//         whiteSpace: "nowrap",
//       },
//       {
//         width: "auto", // Expands to fit content
//         opacity: 1,
//         duration: 1.8,
//         ease: "power2.out",
//       }
//     );
//   }, []);

//   return (
//     <>
//       <div className="flex">
//         <div className="flex flex-col  w-1/2 h-screen">
//           <div className="flex justify-between my-6 mx-5">
//             <h1 className="text-xl font-bold">Monte Real Estate</h1>
//             <span className="flex">
//               <i className="fa-solid fa-map text-black mx-4"></i>
//               <i className="fa-solid fa-grip-lines text-black mx-4"></i>
//             </span>
//           </div>

//           <div className=" flex flex-col justify-center items-center flex-1">
//             <div ref={headingRef} className="text-center space-y-1">
//               <h2 className="text-base font-medium text-gray-500">
//                 Building Your Dream
//               </h2>
//               <h3 className="text-3xl sm:text-4xl font-semibold text-gray-800">
//                 Real Estate in India
//               </h3>
//               <h4 className="text-2xl sm:text-3xl font-normal text-gray-700">
//                 Ideal for Living and Investing
//               </h4>
//             </div>
//           </div>

//           <div className="flex flex-col sm:flex-row justify-between items-center gap-4 my-6 mx-5">
//             <a
//               ref={boxRef}
//               href="#"
//               className="text-sm font-medium text-white  rounded-xl px-4 py-1 bg-black  transition-colors duration-200"
//             >
//               <i class="fa-solid fa-phone mr-3 bg-white text-black p-2  rounded-2xl"></i>
//               Contact Us Now
//             </a>
//             <a
//               href="#"
//               className="text-lg font-medium border-b text-gray-700 hover:text-blue-800 transition-colors duration-200"
//             >
//               Explore All Properties
//             </a>
//           </div>
//         </div>

//         <div
//           ref={imgRef}
//           className="bg-red-950 w-1/2 h-srceen    rounded-2xl bg-[url('https://images.pexels.com/photos/1334605/pexels-photo-1334605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center flex flex-col justify-between text-white"
//         >
//           <div
//             className="flex justify-between font-bold my-6 mx-5"
//             ref={rightRef}
//           >
//             <h2 className="text-sm w-36">
//               More than 1500 real estate Properties
//             </h2>
//             <h3 className="text-sm w-40">
//               From $145,000 with a yield of 10% per annum
//             </h3>
//             <span>
//               <i
//                 class="fa-solid fa-right-to-bracket border-2 p-3 rounded-2xl cursor-pointer"
//                 onClick={() => {
//                   navigate("/sign-up");
//                 }}
//               ></i>
//             </span>
//           </div>

//           <div className="text-right my-4 mx-5">
//             <a href="" className="text-lg underline">
//               Download catalog
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Hero;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Hero() {
  const imgRef = useRef(null);
  const headingRef = useRef(null);
  const rightRef = useRef(null);
  const navigate = useNavigate();

  const boxRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      rightRef.current,
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      imgRef.current,
      { opacity: 0.2, scale: 0.8 }, // Initial state
      {
        opacity: 1,
        scale: 1, // Final state
        duration: 2,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      boxRef.current,
      {
        width: 0,
        opacity: 0,
        overflow: "hidden",
        whiteSpace: "nowrap",
      },
      {
        width: "auto", // Expands to fit content
        opacity: 1,
        duration: 1.8,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <>
      <div className="flex">
        <div className="flex flex-col  w-1/2 h-screen">
          <div className="flex justify-between my-6 mx-5">
            <h1 className="text-xl font-bold">Monte Real Estate</h1>
            <span className="flex">
              <i className="fa-solid fa-map text-black mx-4"></i>

              <i className="fa-solid fa-grip-lines text-black mx-4"></i>
            </span>
          </div>

          <div className=" flex flex-col justify-center items-center flex-1">
            <div ref={headingRef} className="text-center space-y-1">
              <h2 className="text-base font-medium text-gray-500">
                Building Your Dream
              </h2>
              <h3 className="text-3xl sm:text-4xl font-semibold text-gray-800">
                Real Estate in India
              </h3>
              <h4 className="text-2xl sm:text-3xl font-normal text-gray-700">
                Ideal for Living and Investing
              </h4>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 my-6 mx-5">
            <a
              ref={boxRef}
              href="mailto:contact@realstate.com"
              className="text-sm font-medium text-white  rounded-xl px-4 py-1 bg-black  transition-colors duration-200"
            >
              <i class="fa-solid fa-phone mr-3 bg-white text-black p-2  rounded-2xl"></i>
              Contact Us Now
            </a>
            <a
              href="#"
              className="text-lg font-medium border-b text-gray-700 hover:text-blue-800 transition-colors duration-200"
            >
              Explore All Properties
            </a>
          </div>
        </div>

        <div
          ref={imgRef}
          className="bg-red-950 w-1/2 h-srceen    rounded-2xl bg-[url('https://images.pexels.com/photos/1334605/pexels-photo-1334605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center flex flex-col justify-between text-white"
        >
          <div
            className="flex justify-between font-bold my-6 mx-5"
            ref={rightRef}
          >
            <h2 className="text-sm w-36">
              More than 1500 real estate Properties
            </h2>
            <h3 className="text-sm w-40">
              From $145,000 with a yield of 10% per annum
            </h3>
            <span>
              <i
                class="fa-solid fa-right-to-bracket border-2 p-3 rounded-2xl cursor-pointer"
                onClick={() => {
                  navigate("/sign-up");
                }}
              ></i>
            </span>
          </div>

          {/* <div className="text-right my-4 mx-5">
            <a href="" className="text-lg underline">
              Download catalog
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Hero;
