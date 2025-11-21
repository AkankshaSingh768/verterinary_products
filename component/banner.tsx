'use client';
import Image from "next/image";
import { motion } from "framer-motion";



export default function Banner() {
    return (
        <div>
            <div className="mx-auto  space-y-10 relative lg:grid md:grid  lg:grid-cols-2 lg:gap-40 items-center  lg:max-w-7xl  w-full lg:py-45 py-15 px-10 lg:justify-between justify-center">
                <motion.div
                 initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once:false, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}

                
                
                className="space-y-5" >
                    {/* text */}
                    
                        <h1 className="text-5xl">Veterinary Medicinal Products (VMPs)</h1>
                        <p className=" ">Veterinary products include a wide range of items for animal health, such as pharmaceuticals, vaccines, nutritional supplements, and topical treatments for both farm animals and pets. Common examples include antibiotics like penicillin and enrofloxacin, anti-inflammatories like meloxicam, antiparasitics such as albendazole, and various vaccines, shampoos, and dietary supplements.</p>




                  


                </motion.div>
                <motion.div
                 initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once:false, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}

                >
                    {/* image  */}
                    <Image
                        src="/banner.jpg"
                        alt="Background"
                        height={800}
                        width={800}
                        className="rounded-xl"
                    />
                </motion.div>





            </div>



        </div>

    );
}
