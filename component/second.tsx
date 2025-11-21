'use client';
import Image from "next/image";
// import Header from "@/component/header";
// import Banner  from "@/component/banner";
import { motion } from "framer-motion";

export default function Second() {
    return (
        <motion.div 
        initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once:false, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex items-center justify-center lg:py-15 md:py-30 py-10">
            <Image
                src="/second.jpg"
                alt="Background"
                height={900}
                width={1200}
                className="rounded-xl"
            />





        </motion.div>
    );
}
