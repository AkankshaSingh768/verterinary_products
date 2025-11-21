'use client';
import Image from "next/image";
import { motion } from "framer-motion";


export default function Third() {
  return (
    <div className="mx-auto space-y-10 relative lg:grid md:grid gap-10  lg:grid-cols-2 lg:gap-40 items-center max-w-7xl lg:py-45 py-15 px-10 justify-between">
      <motion.div
      initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once:false, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
       >
        {/* image  */}
        <Image
          src="/third2.jpg"
          alt="Background"
          height={800}
          width={800}
          className="rounded-xl"
        />



      </motion.div>
      <motion.div
      initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once:false, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
       className="space-y-10" >
         <h1 className="text-5xl ">Who is Verterinarian ?</h1>
        {/* text */}
        <motion.div  className="space-y-2">
         
          <p className="text-xl   ">Veterinaraian is also called as Vet, Veterinary Physician or Veterinary Surgeon.</p>
          <p className="font-bold italic">"Verterinarian is a professional who practices veterinary medician by trating diseases, disorder, and injury in animal."</p>




        </motion.div>

      </motion.div>





    </div>
    
  );
}
