import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Form from '../components/Form'

const Pricing = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='TRY IT.' text='Choose your images.' />
            <Form/>
        </div>
    )
}

export default Pricing
