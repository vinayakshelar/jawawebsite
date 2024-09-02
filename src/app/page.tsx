import Banner from "@/components/common/banner/page";
import Exhibit from "@/components/common/exhibit/page";
import Header from "@/components/layout/header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Banner />
      <Exhibit />
    </main>
  );
}
