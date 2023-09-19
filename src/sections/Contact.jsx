import { faAddressBook, faAddressCard, faEnvelope, faLocation, faLocationPin, faMailBulk, faMailForward, faMailReply, faMapLocation, faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Contact = () => {
  return ( 
    <section className='flex flex-col items-center justify-center w-full lg:items-start lg:px-52'> 
    <div className='flex flex-col items-center justify-center lg:items-start'>
      <h3 className='text-lg font-inc font-bold text-pOrange tracking-wider my-2 lg:text-xl'>CONTACT</h3>
      <h1 className='text-2xl font-inc font-bold text-center w-full my-2 text-pBlack lg:text-left lg:text-3xl'>Reach out via the information provided</h1>
      </div>
      <div className='flex flex-col items-center justify-center lg:items-start lg:justify-start lg:flex-row lg:w-full lg:space-x-12'>
      <div className='flex flex-col items-center justify-center text-center mt-8 lg:flex-row lg:space-x-6'>
        <FontAwesomeIcon icon={faMapLocationDot} className='text-2xl my-4 rounded-full p-2 shadow-lg shadow-slate-400 text-pOrange'></FontAwesomeIcon>
        <div className='flex flex-col items-center justify-center lg:items-start'>
        <h3 className='font-bold text-xl font-roboto text-pBlack lg:text-2xl'>Location</h3>
        <p className='font-roboto text-sm my-2 text-pGray lg:text-lg'>Manisa, Türkiye</p>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center text-center mt-8 lg:flex-row lg:space-x-6'>
        <FontAwesomeIcon icon={faEnvelope} className='text-2xl my-4 rounded-full p-2 shadow-lg shadow-slate-400 text-pOrange'></FontAwesomeIcon>
        <div className='flex flex-col items-center lg:items-start justify-center'>
        <h3 className='font-bold text-xl font-roboto text-pBlack lg:text-2xl'>Mail</h3>
        <p className='font-roboto text-sm my-2 text-pGray lg:text-lg'>saidarslan389@gmail.com</p>
        </div>
      </div>
      </div>
      </section>
  )
}

export default Contact