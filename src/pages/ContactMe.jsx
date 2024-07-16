import React from 'react'
import ContactText from '../components/ContactText'
import ContactForm from '../components/ContactForm'

function ContactMe() {
  return (
    <div className='lg:px-36 px-4 lg:flex lg:flex-row flex-col justify-between items-center mt-5'>
      <section>
        <ContactText />
      </section>
      <section className='w-full mt-10 lg:mt-0'>
        <ContactForm />
      </section>
    </div>
  )
}

export default ContactMe