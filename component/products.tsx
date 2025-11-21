import Image from "next/image";



export default function Products() {
  const test=[
      {
      id: 1,
      name: "Jordan Lee",
      role: "Project Manager",
      company: "AlphaWave",
      quote: "Fast, flexible, and genuinely smart.",
      image: "/OIP3.webp",
    },
    {
      id: 2,
      name: "Jordan Lee",
      role: "Project Manager",
      company: "AlphaWave",
      quote: "Fast, flexible, and genuinely smart.",
      image: "/OIP3.webp",
    },
    {
      id: 3,
      name: "Jordan Lee",
      role: "Project Manager",
      company: "AlphaWave",
      quote: "Fast, flexible, and genuinely smart.",
      image: "/OIP3.webp",
    },
    {
      id: 4,
      name: "Jordan Lee",
      role: "Project Manager",
      company: "AlphaWave",
      quote: "Fast, flexible, and genuinely smart.",
      image: "/OIP3.webp",
    },
    {
      id: 5,
      name: "Jordan Lee",
      role: "Project Manager",
      company: "AlphaWave",
      quote: "Fast, flexible, and genuinely smart.",
      image: "/OIP3.webp",
    },
    {
      id: 6,
      name: "Jordan Lee",
      role: "Project Manager",
      company: "AlphaWave",
      quote: "Fast, flexible, and genuinely smart.",
      image: "/OIP3.webp",
    },
    {
      id: 7,
      name: "Jordan Lee",
      role: "Project Manager",
      company: "AlphaWave",
      quote: "Fast, flexible, and genuinely smart.",
      image: "/OIP3.webp",
    },
    {
      id: 8,
      name: "Jordan Lee",
      role: "Project Manager",
      company: "AlphaWave",
      quote: "Fast, flexible, and genuinely smart.",
      image: "/OIP3.webp",
    },
    {
      id: 9,
      name: "Jordan Lee",
      role: "Project Manager",
      company: "AlphaWave",
      quote: "Fast, flexible, and genuinely smart.",
      image: "/OIP3.webp",
    },
    {
      id: 10,
      name: "Jordan Lee",
      role: "Project Manager",
      company: "AlphaWave",
      quote: "Fast, flexible, and genuinely smart.",
      image: "/OIP3.webp",
    },
    {
      id: 11,
      name: "Jordan Lee",
      role: "Project Manager",
      company: "AlphaWave",
      quote: "Fast, flexible, and genuinely smart.",
      image: "/OIP3.webp",
    },
    {
      id: 12,
      name: "Jordan Lee",
      role: "Project Manager",
      company: "AlphaWave",
      quote: "Fast, flexible, and genuinely smart.",
      image: "/OIP3.webp",
    },
  
  ]
  return (
   <div id="products" className="mx-auto relative  items-center max-w-7xl py-15 justify-between">
    
     <h1 className="text-center text-5xl">Our Products</h1>

    <div 
       
        className="grid grid-cols-2 py-15 md:grid-cols-2 px-5 lg:grid-cols-3 gap-6">
          {test.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl p-6 flex flex-col items-start shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-base">{t.name}</p>
                  <p className="text-gray-400 text-sm">
                    {t.role} • {t.company}
                  </p>
                </div>
              </div>
              <p className="text-lg leading-snug text-gray-200 italic">
                “{t.quote}”
              </p>
            </div>
          ))}
        </div>




    </div>
                
     
     
     
     
   
    
  );
}
