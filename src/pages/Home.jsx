import Hero from "../components/Hero/Hero";
import BirthdayMessage from "../components/BirthdayMessage/BirthdayMessage";
import CountdownTimer from "../components/CountdownTimer/CountdownTimer";
import MemoryTimeline from "../components/MemoryTimeline/MemoryTimeline";
import PhotoGallery from "../components/PhotoGallery/PhotoGallery";
import SurpriseSection from "../components/SurpriseSection/SurpriseSection";
import WishesSlider from "../components/WishesSlider/WishesSlider";
import CTASection from "../components/CTASection/CTASection";


export default function Home() {
  return <>
      <Hero />
      <BirthdayMessage />
      <CountdownTimer />
      <MemoryTimeline />
      <PhotoGallery />
      <SurpriseSection />
      <WishesSlider />
      <CTASection />
    </>
}
