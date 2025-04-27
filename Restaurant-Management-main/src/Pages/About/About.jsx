import { Helmet } from "react-helmet-async"
import AboutSection from "../../Components/Home/AboutSection"
import Testimonials from "../../Components/Home/Testimonials"
import PrimaryHero from "../../Components/Hero/PrimaryHero"


const About = () => {
  return (
   <>
   
            {/* helmet */}
            <Helmet>
                <title>Restaurant Management / About Us</title>
            </Helmet>
            {/* page title */}
            <PrimaryHero text="About Us" />
   <AboutSection/>
   <Testimonials/>
   
   </>

  )
}

export default About