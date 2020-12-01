import React from "react"
import Layout from "../layout/Layout"
import { Helmet } from "react-helmet"
import HeroSection from "../homeSections/HeroSection"
import IntroSection from "../homeSections/IntroSection"
import PerfectionSection from "../homeSections/PerfectionSection"
import ChefSection from "../homeSections/ChefSection"
import AboutSection from "../homeSections/AboutSection"
import TableSection from "../homeSections/TableSection"

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <title>My Starter Theme</title>
      </Helmet>
      <main>
        <IntroSection />
        <HeroSection />
        <AboutSection />
        <PerfectionSection />
        <ChefSection />
        <TableSection />
      </main>
    </Layout>
  )
}
