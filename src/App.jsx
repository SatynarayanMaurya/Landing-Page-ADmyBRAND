import { useState } from "react"
import ContactUs from "./Components/ContactUs"
import FAQ from "./Components/FAQ"
import Features from "./Components/Features"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Pricing from "./Components/Pricing"
import Testimonials from "./Components/Testimonials"

function App() {


  return (
    <div className="">

      <Navbar/>
      <Hero/>
      <Features/>
      <Pricing/>
      <Testimonials/>
      <FAQ/>
      <ContactUs/>
      <Footer/>

    </div>
  )
}

export default App
