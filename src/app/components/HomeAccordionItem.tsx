import { AnimatePresence, motion } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";


export default function HomeAccordionItem({
    title,
    content,
    isOpen,
    onClick,
}: {
    title: string;
    content: string;
    isOpen: boolean;
    onClick: () => void;
}) {
    return (
        <div>
            <div className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                    onClick={onClick}
                    className="w-full flex justify-between items-center px-4 py-4 text-xl md:text-base text-left font-semibold text-gray-900 focus:outline-none"
                >
                    {title}
                    <span className="text-xl">
                        {isOpen ? <FiMinus /> : <FiPlus />}
                    </span>
                </button>
            </div>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div
                            className="p-4 mt-2 bg-[#F7F9FC] text-gray-600 rounded-xl transition-all duration-300 ease-in-out"
                        >
                            {content}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

