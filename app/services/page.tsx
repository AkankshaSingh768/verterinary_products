"use client";
import Image from "next/image";
import Header from "@/component/header";
import Right from "@/component/right";
import { useRouter } from "next/navigation";
import Left from "@/component/left";
import Footer from "@/component/footer";
import { motion } from "framer-motion";



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
          <div className="max-w-7xl space-y-5  mx-auto text-center lg:px-4 md:px-7 px-10 lg:py-20 md:py-7 py-3 ">
                <motion.h1 
                initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once:false, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
                className="lg:text-6xl md:text-4xl text-3xl italic">"Caring for Every Paw, Protecting Every Life" </motion.h1>
                <motion.h1 
                initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once:false, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
                className="lg:text-4xl md:text-3xl text-2xl font-medium ">Your Peace of Mind</motion.h1>
                <motion.p
                initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once:false, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
                 className="text-xl text-gray-600">
                    We provide comprehensive veterinary care to keep your pets healthy, happy, and thriving. From routine health check-ups and vaccinations to specialized nutrition plans, reproductive services, and grooming, our expert team ensures personalized care for every animal. Our preventive and medical services are designed to promote wellness, detect health issues early, and provide compassionate support for your furry companions at every stage of life.
                </motion.p>

                <motion.a 
                initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once:false, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
  href="/Services.pdf"
  download
  target="_blank"
  className="border px-5 py-2 rounded-2xl text-white bg-black"
>
  Download
</motion.a>


                
            </div>


            



            <Right
                title="General Health Check-Ups"
                description="Routine Physical Examinations: Regular check-ups to ensure overall health."
                description2="Vaccination Schedules: Keeping pets protected against common diseases."
                description3="Health Monitoring: Tracking vital signs and well-being over time."

                image="/third23jpg.jpg"
            />

            <Left
                title="Reproductive Services"
                description="Artificial Insemination: Controlled breeding to improve genetics and reproductive efficiency."
                description2="Pregnancy Diagnosis: Early detection of pregnancy for better care and management."
                description3="Labor & Delivery Support: Assistance during birthing to ensure safety of mother and offspring."
                image="/checkup.webp"
            />


            <Right
                title="Vaccinations & Preventive Care"
                description="Annual Vaccinations: Protects animals from common diseases every year."
                description2="Puppy & Kitten Vaccination Programs: Special immunization schedules for young pets to keep them healthy."
                description3="Travel-Related Vaccinations: Ensures pets meet health requirements for safe travel."
                image="/vaccanation.jpeg"
            />

              <Left
                title="Nutrition & Diet Planning"
                description="Diet Charts for Pets: Customized meal plans for optimal health."
                description2="Weight Loss/Weight Gain Programs: Tailored plans to achieve healthy body weight."
                description3="Special Diets for Medical Conditions: Nutrition designed to support specific health needs."
                image="/nuteriotion.webp"
            />

             <Right
                title="Pet Grooming & Hygiene"
                description="Bathing: Keeps pets clean, fresh, and healthy."
                description2="Nail Trimming: Maintains proper nail length and prevents injuries."
                description3="Ear Cleaning: Ensures healthy ears and prevents infections."
                image="/pets.webp"
            />



            <Footer />

            





        </div>
    );
}
