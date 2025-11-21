import Image from "next/image";
import {motion} from "framer-motion"
interface RightProps {
  title: string;
  description: string;
  description2: string;
  description3: string;
  
  image: string;
}



export default function Right({ title, description, image, description2,description3 }: RightProps) {
  return (
    <div className="max-w-7xl mx-auto py-20 px-5 grid grid-cols-1 md:grid-cols-2 gap-15">
      <motion.div
      initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once:false, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
       className="space-y-4">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
        <p className="text-lg text-gray-600 leading-relaxed">{description2}</p>
        <p className="text-lg text-gray-600 leading-relaxed">{description3}</p>
      </motion.div>

      <motion.div
      initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once:false, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Image
          src={image}
          alt="section image"
          width={600}
          height={400}
          className="rounded-lg shadow-md object-cover w-full"
        />
      </motion.div>
    </div>
  );
}
