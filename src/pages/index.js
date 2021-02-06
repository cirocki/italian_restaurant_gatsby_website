import React from "react"
import Layout from "../layout/Layout"
import SEO from "../components/seo/seo"
import HeroSection from "../homeSections/HeroSection"
import AboutSection from "../homeSections/AboutSection"
import HistorySection from "../homeSections/HistorySection"
import ChefSection from "../homeSections/ChefSection"
import WineSection from "../homeSections/WineSection"
import ReservationSection from "../homeSections/ReservationSection"
import ContactSection from "../homeSections/ContactSection"

export default function Home() {
  return (
    <Layout>
      <SEO
        title="Home"
        description="Mondello Restaurant - We specialize in homemade classic Italian pizza, pasta, salads, soups and much more.."
      />
      <main>
        <HeroSection />
        <AboutSection />
        <HistorySection />
        <ChefSection />
        <WineSection />
        <ReservationSection />
        <ContactSection />
      </main>
    </Layout>
  )
}
