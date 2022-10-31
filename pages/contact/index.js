import HeroSection from '../../components/hero'
import ContactForm from '../../components/contactForm'

export default function Contact() {
    return(
        <>
            <HeroSection maintitle={"Contact Us"} detail={"Email: abc@gmail.com"} />
            <ContactForm />
        </>
    )
}