"use client";
import Image from "next/image";
import Header from "@/component/header";
import Right from "@/component/right";
import { useRouter } from "next/navigation";
import Left from "@/component/left";
import Footer from "@/component/footer";



export default function Services() {
    const router = useRouter();
   
    return (
        <div id="services" >
            <Header />
            <button
                onClick={() => router.push("/")}
                className="lg:px-15 md:px-7 px-3 lg:py-20 md:py-10 py-5  text-black "
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                    />
                </svg>
            </button>
            {/* top section */}
          <div className="max-w-3xl space-y-5  mx-auto text-center lg:px-4 md:px-7 px-10 lg:py-10 md:py-7 py-3 ">
                <h1 className="lg:text-6xl md:text-4xl text-3xl">Trusted Legal solutions for </h1>
                <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold ">Your Peace of Mind</h1>
                <p className="text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quo
                    harum eligendi reiciendis incidunt impedit optio possimus ex saepe.
                </p>
                <button className="border px-5 py-2 rounded-2xl text-white bg-black">
                    Download
                </button>
            </div>


            



            <Right
                title="Some text and Images"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit..."
                image="/Hysterectomy.png"
            />

            <Left
                title="Some text and Images"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit..."
                image="/Hysterectomy.png"
            />


            <Right
                title="Some text and Images"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit..."
                image="/Hysterectomy.png"
            />

              <Left
                title="Some text and Images"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit..."
                image="/Hysterectomy.png"
            />

             <Right
                title="Some text and Images"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit..."
                image="/Hysterectomy.png"
            />



            <Footer />

            





        </div>
    );
}
