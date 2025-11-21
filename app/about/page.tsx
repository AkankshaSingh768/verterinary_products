"use client";
import Image from "next/image";
import Header from "@/component/header";
import Right from "@/component/right";
import { useRouter } from "next/navigation";
import Left from "@/component/left";
import Footer from "@/component/footer";
import { motion } from "framer-motion";



export default function About() {
    const router = useRouter();
    const test = [
        {

            image: "/First.jpg",
        },
        {

            image: "/second1.jpg",
        },
        {

            image: "/third23jpg.jpg",
        },
        {

            image: "/four.jpg",
        },
    ]
    return (
        <div id="about" >
            <Header />
            <button
                onClick={() => router.push("/")}
                className=" lg:px-15 md:px-7 px-3 lg:py-20 md:py-10 py-5  text-black "
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
                <motion.h1 initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.7, ease: "easeOut" }} className="lg:text-6xl md:text-4xl text-3xl">Compassionate care,</motion.h1>
                <motion.h1 initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.7, ease: "easeOut" }} className="lg:text-4xl md:text-3xl text-2xl font-medium">cutting-edge of medicine</motion.h1>
                <motion.p initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.7, ease: "easeOut" }} className="text-xl text-gray-600">
                    Cardinal Animal Hospital is a full-service state accredited veterinary hospital, We know how important your pet is to you. That's why we provide the highest quality veterinary care, advanced medical technology, and compassionate service to pets and their owners in a warm and welcoming environment.
                </motion.p>
                <motion.a
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    href="/About.pdf"
                    download
                    target="_blank"
                    className="border px-5 py-2 rounded-2xl text-white bg-black"
                >
                    Download
                </motion.a>
            </div>


            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="grid max-w-7xl mx-auto grid-cols-2 py-30 md:grid-cols-2 px-5 lg:grid-cols-4 gap-6">
                {test.map((t) => (
                    <div className="rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300">
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



            <Right
                title="About us"
                description="We are a trusted provider of veterinary products dedicated to supporting healthier, happier animals. Our mission is to bring innovative, safe, and research-backed solutions to veterinarians, pet owners, and livestock farmers."
                description2="For years, we’ve partnered with experts to develop high-quality medical supplies, nutritional supplements, and preventive care products that improve the lives of animals. Every product we offer goes through strict safety checks to ensure purity, effectiveness, and reliability."
                description3="We believe animals deserve the best — and so do the people who care for them."

                image="/OIP1.jpeg"
            />

            <Left


                title="Who We Are"
                description="We are passionate animal lovers committed to making veterinary care easier, safer, and more effective. Whether it’s pets at home or livestock on farms, we create products designed with care and backed by science."
                image="/OIP.jpeg"
                description2=""
                description3="Because every animal matters."
            />


            <Right

                title="Our Story"
                description="We are a trusted provider of veterinary products dedicated to supporting healthier, happier animals. Our mission is to bring innovative, safe, and research-backed solutions to veterinarians, pet owners, and livestock farmers."
                image="/OIP.webp"
                description2="For years, we’ve partnered with experts to develop high-quality medical supplies, nutritional supplements, and preventive care products that improve the lives of animals. Every product we offer goes through strict safety checks to ensure purity, effectiveness, and reliability."
                description3="We believe animals deserve the best — and so do the people who care for them."
            />
            <Footer />





        </div>
    );
}
