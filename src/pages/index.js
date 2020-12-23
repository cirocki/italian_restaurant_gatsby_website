import React from "react"
import Layout from "../layout/Layout"
import { Helmet } from "react-helmet"
import HeroSection from "../homeSections/HeroSection"


export default function Home() {
  return (
    <Layout>
      <Helmet>
        <title>Mondello Restaurant - Napoli</title>
      </Helmet>
      <main>
        <HeroSection />

      </main>
    </Layout>
  )
}
