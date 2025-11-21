import Image from "next/image";

export default function Footer() {
    return (
        <footer className=" bg-gray-200 py-10">

            <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-12">



                {/* Company */}
                <div className="text-center md:text-left">
                    <h3 className=" font-medium mb-4 text-lg">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-amber-800">About</a></li>
                        <li><a href="#" className="hover:text-amber-800">Contact</a></li>
                        <li><a href="#" className="hover:text-amber-800">404</a></li>
                    </ul>
                </div>

                {/* Information */}
                <div className="text-center md:text-left">
                    <h3 className=" font-medium mb-4 text-lg">Information</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-amber-800">Pricing</a></li>
                        <li><a href="#" className="hover:text-amber-800">Integrations</a></li>
                        <li><a href="#" className="hover:text-amber-800">Changelog</a></li>
                    </ul>
                </div>

                {/* Socials */}
                <div className="text-center md:text-left">
                    <h3 className=" font-medium mb-4 text-lg">Our Socials</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-amber-800">LinkedIn</a></li>
                        <li><a href="#" className="hover:text-amber-800">YouTube</a></li>
                        <li><a href="#" className="hover:text-amber-800">Twitter (X)</a></li>
                    </ul>
                </div>
                <div className="flex md:justify-start justify-center mb-4">
                    <Image src="/logo.png" alt="Logo" width={150} height={150} />
                </div>

            </div>

            {/* Bottom Line */}
            <div className="mt-12 border-t pt-6 text-center text-xs md:text-sm tracking-wide">
                Some Text Here
            </div>
        </footer>
    );
}
