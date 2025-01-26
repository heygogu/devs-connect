// import React from "react";

// const PageLoader = () => {
//   return (
//     <div className="animate-in fade-in-50 duration-500">
//       <div className="w-full h-[calc(100vh-300px)] flex items-center justify-center">
//         <div className="relative"></div>
//         <div className="animate-spin rounded-full h-24 w-24 border-4 border-t-primary border-r-primary border-b-gray-200 border-l-gray-200">
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//             <div className="animate-pulse h-12 w-12 rounded-full bg-primary/20"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PageLoader;
import React from "react";
import { motion } from "framer-motion";

const PageLoader = () => {
  return (
    <>
      <motion.div
        className="h-[calc(100vh-300px)] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex gap-4"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-5 h-5 rounded-full bg-primary"
              animate={{
                y: ["0%", "-100%", "0%"],
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </motion.div>
      <motion.p
        className=" text-center text-lg font-semibold text-primary"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Hold on...
      </motion.p>
    </>
  );
};

export default PageLoader;
