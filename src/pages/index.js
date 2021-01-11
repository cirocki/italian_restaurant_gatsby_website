import React from "react"
import Layout from "../layout/Layout"
import { Helmet } from "react-helmet"
import HeroSection from "../homeSections/HeroSection"
import AboutSection from "../homeSections/AboutSection"
import HistorySection from "../homeSections/HistorySection"
import ChefSection from "../homeSections/ChefSection"
import WineSection from "../homeSections/WineSection"
import ReservationSection from "../homeSections/ReservationSection"
import ContactSection from "../homeSections/ContactSection"
import styled from "styled-components"

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <title>Mondello Restaurant - Napoli</title>
      </Helmet>
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
