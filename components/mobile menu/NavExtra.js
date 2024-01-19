import { motion } from "framer-motion";

export default function NavExtra({ children, onClick, order }) {
  return (
    <motion.div
      custom={order}
      onClick={onClick}
      onKeyPress={onClick}
      className="w-full py-2"
      tabIndex="0"
    >
      {children}
    </motion.div>
  );
}
