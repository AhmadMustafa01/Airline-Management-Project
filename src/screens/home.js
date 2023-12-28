import React from 'react'
import Navbar from '../components/nav'
import Cards_home from '../components/Cards_home'
import Carousel from '../components/Carousel'
import Banner from '../components/Banner'
import Under_carousel_content from '../components/Under_carousel_content'
import Footer from '../components/Footer' 
import ContactUs from '../components/ContactUs'
export default function Home() {
    return (
        <div>
        <Navbar /> 
<Banner/>
<Carousel/>

<Under_carousel_content/>
<ContactUs/>
<Footer/>

</div>
    )
}
