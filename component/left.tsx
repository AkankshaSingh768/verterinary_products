import Image from "next/image";
interface RightProps {
  title: string;
  description: string;
  image: string;
}



export default function Left({ title, description, image }: RightProps) {
  return (
    <div className="max-w-7xl mx-auto py-20 px-5 grid grid-cols-1 md:grid-cols-2 gap-15">
        <div>
        <Image
          src={image}
          alt="section image"
          width={600}
          height={400}
          className="rounded-lg shadow-md object-cover w-full"
        />
      </div>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
      </div>

      
    </div>
  );
}
