import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className=" bg-gray-200 py-10">

            <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-12">



                {/* Company */}
                <div className="text-center md:text-left">
                    <h3 className=" font-bold mb-4 text-lg">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/about" className="hover:text-amber-800">About</Link></li>
                        <li><Link href="/contactus" className="hover:text-amber-800">Contact</Link></li>
                    </ul>
                </div>

                {/* Information */}
                <div className="text-center md:text-left">
                    <h3 className=" font-bold mb-4 text-lg">Information</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/services" className="hover:text-amber-800">Services</Link></li>
                        <li><a href="#" className="hover:text-amber-800">Our Products</a></li>
                    </ul>
                </div>

                {/* Socials */}
                <div className="text-center md:text-left">
                    <h3 className=" font-bold mb-4 text-lg">Our Socials</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="https://linkedIn.com" className="hover:text-amber-800">LinkedIn</a></li>
                        <li><a href="https://youtube.com" className="hover:text-amber-800">YouTube</a></li>
                        <li><a href="https://Instagram.com" className="hover:text-amber-800">Instagram</a></li>
                    </ul>
                </div>
                <div className="flex md:justify-start justify-center mb-4">
                    <Image src="/logo2-cpy.png" alt="Logo" width={150} height={150} />
                </div>

            </div>

            {/* Bottom Line */}
            <div className="mt-12 border-t pt-6 text-center text-xs md:text-sm tracking-wide">
                All the rights are reserved Since 1990
            </div>
        </footer>
    );
}
