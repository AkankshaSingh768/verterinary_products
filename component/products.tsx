'use client';
import Image from "next/image";
import {motion} from "framer-motion";



export default function Products() {
  const test=[
      {
      id: 1,
      name: "Jordan Lee",
      role: "Project Manager",
      company: "AlphaWave",
      quote: "Fast, flexible, and genuinely smart.",
      image: "/CinerariaMaritima.jpg",
    },
    {
      id: 2,
      name: "Jordan Lee",
      role: "Project Manager",
      company: "AlphaWave",
      quote: "Fast, flexible, and genuinely smart.",
      image: "/FourLifeTransferFactor.jpg",
    },
    {
      id: 3,
      name: "Jordan Lee",
      role: "Project Manager",
      company: "AlphaWave",
      quote: "Fast, flexible, and genuinely smart.",
      image: "/Harpagophytum.jpg",
    },
    {
      id: 4,
      name: "Jordan Lee",
      role: "Project Manager",
      company: "AlphaWave",
      quote: "Fast, flexible, and genuinely smart.",
      image: "/Kirkland.jpg",
    },
    {
      id: 5,
      name: "Jordan Lee",
      role: "Project Manager",
      company: "AlphaWave",
      quote: "Fast, flexible, and genuinely smart.",
      image: "/MiltonHerbs.jpg",
    },
    {
      id: 6,
      name: "Jordan Lee",
      role: "Project Manager",
      company: "AlphaWave",
      quote: "Fast, flexible, and genuinely smart.",
      image: "/MotherTInctore.jpg",
    },
    {
      id: 7,
      name: "Jordan Lee",
      role: "Project Manager",
      company: "AlphaWave",
      quote: "Fast, flexible, and genuinely smart.",
      image: "/Prosoluble.jpg",
    },
    {
      id: 8,
      name: "Jordan Lee",
      role: "Project Manager",
      company: "AlphaWave",
      quote: "Fast, flexible, and genuinely smart.",
      image: "/SerraPet.jpg",
    },
    {
      id: 9,
      name: "Jordan Lee",
      role: "Project Manager",
      company: "AlphaWave",
      quote: "Fast, flexible, and genuinely smart.",
      image: "/Symlin.jpg",
    },
    
    
    
  
  ]
  return (
 <div id="products" className="mx-auto relative items-center max-w-7xl py-15 justify-between">
  <h1 className="text-center text-5xl">Our Products</h1>

  <motion.div
  initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once:false, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
   className="grid grid-cols-2 py-15 md:grid-cols-2 px-5 lg:grid-cols-3 gap-6">
    {test.map((t) => (
      <div
        key={t.id}
        className="rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300"
      >
        <div className="w-full h-full rounded-xl overflow-hidden">
          <Image
            src={t.image}
            alt="Product Image"
            width={400}
            height={300}
            className="object-cover w-full h-full"

          />
        </div>
      </div>
    ))}
  </motion.div>
</div>

                
     
     
     
     
   
    
  );
}
