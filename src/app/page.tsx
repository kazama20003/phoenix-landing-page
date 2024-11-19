import ContactForm from "@/components/home/ContactForm";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import Hero from "@/components/home/Hero";
import Portfolio from "@/components/home/Portfolio";
import ServicesCarousel from "@/components/home/ServicesCarousel";
import Testimonials from "@/components/home/Testimonials";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <Hero/>
      <ServicesCarousel/>
      <FeaturesGrid/>
      <Portfolio/>
      <Testimonials/>
      <ContactForm/>
    </Layout>
  );
}
