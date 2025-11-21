import Image from "next/image";


export default function Third() {
  return (
    <div className="mx-auto space-y-10 relative lg:grid md:grid gap-10  lg:grid-cols-2 lg:gap-40 items-center max-w-7xl lg:py-45 py-15 px-10 justify-between">
      <div >
        {/* image  */}
        <Image
          src="/Hysterectomy.png"
          alt="Background"
          height={800}
          width={800}
        />



      </div>
      <div className="" >
        {/* text */}
        <div className="">
          <h1 className="text-5xl">Some text and Images</h1>
          <p className="text-xl ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestias officiis earum dolor rem accusantium praesentium, eius veniam quod quia dolorem aliquam nemo sapiente qui enim unde quibusdam, tenetur recusandae.</p>




        </div>

      </div>





    </div>
    
  );
}
