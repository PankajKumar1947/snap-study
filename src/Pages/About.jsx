import React, {useEffect} from 'react'
import Products from '../Component/Product/Products'
import Team from '../Component/Team/Team'
import AboutDetails from '../Component/About/AboutDetails'

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <AboutDetails/>
        <Products/>
        <Team/>
    </div>
  )
}

export default About