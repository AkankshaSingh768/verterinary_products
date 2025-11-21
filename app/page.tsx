import Image from "next/image";
import Header from "@/component/header";
import Banner  from "@/component/banner";
import Second from "@/component/second";
import Third from "@/component/third";
import Products from "@/component/products";
import Footer from "@/component/footer";

export default function Home() {
  return (
    <div>
        <Header />
        <Banner />
        <Second />
        <Third />
        <Products />
        <Footer />


      
    </div>
  );
}
