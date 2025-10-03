'use client'

import React           from 'react'
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent'
import ContactForm     from '../../components/ContactForm/ContactForm'
import FooterComponent from '../../components/Footer/FooterComponent'
import { SocialIcon }  from 'react-social-icons'
import { to }          from '../../../.next/static/chunks/[turbopack]_browser_dev_hmr-client_hmr-client_ts_c8c997ce._';
import SubscribeLetter from '@/components/SubscribeSection/SubscribeLetter'

const page = () => {
  const socialLinks = {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    pinterest: "https://pinterest.com",
  }

  return (
    <>
      <div className="min-h-screen bg-white overflow-x-hidden">
        <NavBarComponent />

        <main
          className="relative w-full  bg-[url('/assets/contact_bgpic.png')] bg-cover bg-center bg-no-repeat"
          style={{ minHeight: '100vh' }}
        >
          {/* Overlay to darken background */}
          <div className="absolute inset-0 bg-[#00000080] z-10"></div>

          <section className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                Contact Us
              </h1>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-200">
                Cicero famously orated against his political opponent Lucius Sergius Catilina.
              </p>
            </div>

            {/* Info Cards - Desktop: 3 columns, Tablet: 2+1, Mobile: 1 column */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Card 1 - Mail */}
              <div className="flex flex-col items-center text-center gap-4 p-8 rounded-xl bg-[#ffffff25] shadow-lg hover:bg-[#ffffff35] transition-all duration-300">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="2.5em"
                  width="2.5em"
                  className="text-white"
                >
                  <path d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"></path>
                </svg>
                <span className="text-white text-lg font-semibold">Drop a Mail</span>
                <span className="text-white/90 text-sm">Shreethemes@gmail.com</span>
                <span className="text-white/90 text-sm">Support@yourdomain.com</span>
              </div>

              {/* Card 2 - Phone */}
              <div className="flex flex-col items-center text-center gap-4 p-8 rounded-xl bg-[#ffffff25] shadow-lg hover:bg-[#ffffff35] transition-all duration-300">
                <svg
                  className="text-white"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="2.5em"
                  width="2.5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"></path>
                </svg>
                <span className="text-white text-lg font-semibold">Call Us</span>
                <span className="text-white/90 text-sm">+123 456 7890</span>
                <span className="text-white/90 text-sm">+098 765 4321</span>
              </div>

              {/* Card 3 - Social */}
              <div className="flex flex-col items-center justify-center text-center gap-4 p-8 rounded-xl bg-[#ffffff25] shadow-lg hover:bg-[#ffffff35] transition-all duration-300 sm:col-span-2 lg:col-span-1">
                <svg
                  className="text-white"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 496 512"
                  height="2.5em"
                  width="2.5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path>
                </svg>
                <span className="text-white text-lg font-semibold">Connect with Social</span>
                <span className="text-white/90 text-sm">Let's Connect with Us via social media</span>
                
                {/* Social Icons with custom styling */}
                <div className="flex gap-4 mt-4 justify-center flex-wrap">
                  <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="social-icon-wrapper">
                    <SocialIcon url={socialLinks.facebook} fgColor="#ffffff" bgColor="transparent" style={{ height: 40, width: 40 }} className="social-icon" />
                  </a>
                  <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="social-icon-wrapper">
                    <SocialIcon url={socialLinks.twitter} fgColor="#ffffff" bgColor="transparent" style={{ height: 40, width: 40 }} className="social-icon" />
                  </a>
                  <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="social-icon-wrapper">
                    <SocialIcon url={socialLinks.instagram} fgColor="#ffffff" bgColor="transparent" style={{ height: 40, width: 40 }} className="social-icon" />
                  </a>
                  <a href={socialLinks.pinterest} target="_blank" rel="noopener noreferrer" className="social-icon-wrapper">
                    <SocialIcon url={socialLinks.pinterest} fgColor="#ffffff" bgColor="transparent" style={{ height: 40, width: 40 }} className="social-icon" />
                  </a>
                </div>
              </div>

            </div>
          </section>
        </main>

        {/* Contact Form Section */}
        <ContactForm />

        {/* Subscribe to Newsletter */}
        <SubscribeLetter/>
      

        {/* Footer */}
        <FooterComponent />

        {/* Inline styles for social icon hover */}
        <style jsx>{`
          .social-icon-wrapper {
            display: inline-block;
            border-radius: 50%;
            border: 2px solid rgba(255, 255, 255, 0.3);
            transition: all 0.3s ease;
          }
          
          .social-icon-wrapper:hover {
            border-color: #3b82f6;
            background-color: rgba(59, 130, 246, 0.2);
            transform: translateY(-3px);
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
          }
        `}</style>
      </div>
    </>
  )
}

export default page
