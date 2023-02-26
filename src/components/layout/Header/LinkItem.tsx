import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0 },
};
export const LinkItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="show"
      exit="hidden"
      transition={{
        duration: 0.1,
        type: 'tween',
      }}
    >
      {children}
    </motion.div>
  );
};
