import { motion } from "framer-motion";
const PageLoader3 = () => {
  return (
    <motion.div
      className="h-[calc(100vh-50vh)] flex items-center justify-center "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div className="relative">
        <motion.div
          className="w-16 h-16 bg-primary/20 border-4 border-primary rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 0.95, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-8 h-8 border-4 border-secondary rounded-full"
          initial={{ x: "-50%", y: "-50%" }}
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-3 h-3 bg-primary rounded-full"
          initial={{ x: "-50%", y: "-50%" }}
          animate={{
            scale: [1, 0, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
      <motion.p
        className="absolute mt-24 text-primary/80 font-light"
        animate={{
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Loading...
      </motion.p>
    </motion.div>
  );
};

export default PageLoader3;
