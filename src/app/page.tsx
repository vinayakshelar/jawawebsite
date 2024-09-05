import AccessoriesSection from "@/components/common/accessories/page";
import AllStories from "@/components/common/allStories/page";
import Banner from "@/components/common/banner/page";
import Exhibit from "@/components/common/exhibit/page";
import JoinVibrant from "@/components/common/joinVibrant/page";
import LegacyJawa from "@/components/common/legacyJawa/page";
import MotorLegacy from "@/components/common/motorLegacy/page";
import TestRide from "@/components/common/testRide/page";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Banner />
      <Exhibit />
      <LegacyJawa />
      <MotorLegacy />
      <AllStories />
      <TestRide />
      <AccessoriesSection />
      <JoinVibrant />
      <Footer />
    </main>
  );
}
