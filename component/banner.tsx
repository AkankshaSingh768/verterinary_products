import Image from "next/image";


export default function Banner() {
    return (
        <div>
             <div className="mx-auto  space-y-10 relative lg:grid md:grid  lg:grid-cols-2 lg:gap-40 items-center  lg:max-w-7xl  w-full lg:py-45 py-15 px-10 lg:justify-between justify-center">
            <div >
                {/* text */}
                <div className="space-y-5">
                    <h1 className="text-5xl">Some text and Images</h1>
                    <p className="text-xl ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestias officiis earum dolor rem accusantium praesentium, eius veniam quod quia dolorem aliquam nemo sapiente qui enim unde quibusdam, tenetur recusandae.</p>




                </div>


            </div>
            <div>
                {/* image  */}
                <Image
                    src="/nursing_service.png"
                    alt="Background"
                    height={800}
                    width={800}
                />
            </div>





        </div>

        

        </div>
       
    );
}
