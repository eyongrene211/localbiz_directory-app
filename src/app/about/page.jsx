'use client'
import React                                          from 'react'
import NavBarComponent                                from '@/components/NavBarComponent/NavBarComponent'
import FooterComponent                                from '@/components/Footer/FooterComponent'
import Link                                           from 'next/link'
import { motion }                                     from 'framer-motion'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import StatisticItem                                  from '../../components/StatisticItemComponent/StatisticItem'
import { CirclePlay, Play, Users, Mail, CheckCircle } from 'lucide-react'
import ProcessStepCard                                from '../../components/ProcessStepCard/ProcessStepCard'
import TeamSlider                                     from '@/components/TeamSlider/TeamSlider'
import ReviewList                                     from '@/components/ReviewList/ReviewList'
import SubscribeLetter                                from '@/components/SubscribeSection/SubscribeLetter'

// SVG Icons
const GlobeIcon = (props) => (
  <svg
    {...props}
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8z"
    ></path>
    <path
      fillRule="evenodd"
      d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"
    ></path>
  </svg>
)

const EnvelopeIcon = (props) => (
  <svg
    {...props}
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 16 16"
  >
    <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"></path>
    <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"></path>
  </svg>
)

const CheckMarkIcon = (props) => (
  <svg
    {...props}
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0"
    ></path>
    <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"></path>
  </svg>
)

const Page = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 overflow-x-hidden transition-colors">
      <NavBarComponent />
      <main className="w-full pb-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full bg-blue-300 dark:bg-blue-900 mb-20 transition-colors"
        >
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10 md:pt-32 md:pb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full flex flex-col gap-4 items-center justify-center text-center"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                About Page
              </h1>
              <div className="font-semibold lg:text-lg mt-2">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                          Home
                        </Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="text-gray-700 dark:text-gray-300" />
                    <BreadcrumbItem>
                      <BreadcrumbPage className="text-gray-900 dark:text-white">
                        About
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </motion.div>
          </section>
        </motion.div>

        {/* How We Start Work Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-12 md:mt-20 flex-col flex justify-center items-center text-center"
          >
            <div className="mb-10 md:mb-12">
              <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                How We Start Work
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Explore our work step by step and our mission
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="h-[350px] sm:h-[400px] w-full max-w-sm mx-auto flex justify-center items-center"
              >
                <img
                  src="/assets/side-img.png"
                  alt="side-img"
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-col justify-center space-y-3 sm:space-y-4 text-center md:text-left"
              >
                <span className="flex justify-center md:justify-start items-center p-2 rounded-[25px] w-max bg-blue-200 dark:bg-blue-900/30 text-xs mx-auto md:mx-0">
                  <h2 className="text-blue-500 dark:text-blue-400 font-bold">
                    About Mission
                  </h2>
                </span>
                <h1 className="font-bold text-xl sm:text-2xl md:text-3xl text-gray-900 dark:text-white">
                  Explore Our Aim & Mission
                </h1>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsum
                  sed autem cupiditate at laboriosam sapiente aut? Vero saepe tempore
                  quo natus. Eligendi voluptas sunt autem similique asperiores quisquam
                  laboriosam exercitationem incidunt quasi cupiditate eum quas ut ipsam
                  accusamus natus quis repudiandae, itaque ab inventore.
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
                  voluptatibus inventore repellat cumque dolorum neque perferendis
                  possimus nemo. Facere, minus.
                </p>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex justify-center md:justify-start items-center p-3 rounded-3xl w-fit text-blue-500 dark:text-blue-400 font-bold bg-blue-200 dark:bg-blue-900/30 cursor-pointer transition duration-300 hover:bg-blue-300 dark:hover:bg-blue-800/50 mx-auto md:mx-0"
                >
                  Meet Our Team
                </motion.span>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Our Impact Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mt-16 md:mt-20 mb-8 md:mb-10 text-gray-900 dark:text-white"
          >
            Our Impact in Numbers
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full mx-auto py-8 md:py-12 border-y border-gray-200 dark:border-gray-700 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 place-items-center"
          >
            <StatisticItem end={145} unit=" K" label="Daily Visitors" />
            <StatisticItem end={670} label="Active Listings" />
            <StatisticItem end={22} label="Won Awards" />
            <StatisticItem end={642} unit=" K" label="Happy Customers" />
          </motion.div>
        </section>

        {/* Promo Video Section */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full relative bg-[url('/assets/banner-2-.jpg')] bg-cover bg-center bg-no-repeat mb-20"
        >
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div className="relative z-20 max-w-7xl mx-auto h-[350px] sm:h-[400px] flex flex-col items-center justify-center gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-fit border-2 border-white p-[6px_10px] font-bold text-xs rounded-full"
            >
              <span>Get Help with Promo Videos</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="max-w-3xl"
            >
              <h1 className="text-center text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold mb-1">
                Embark on your thrilling adventure with us.
              </h1>
              <h2 className="text-center text-sm sm:text-base md:text-xl font-semibold text-gray-200">
                Our Agency will guide you through the captivating realm of digital
                innovation
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center p-[8px_16px] rounded-3xl bg-blue-500 hover:bg-blue-600 transition duration-300 cursor-pointer text-sm font-semibold"
            >
              <CirclePlay className="w-4 h-4 mr-2" />
              <span>Watch Promo Video</span>
            </motion.div>
          </div>
        </motion.section>

        {/* Process Step Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <h1 className="font-bold text-2xl sm:text-3xl mb-1 text-gray-900 dark:text-white">
              Our Working <span className="text-blue-500 dark:text-blue-400">Process</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-10">
              Explore our work process step by step and our mission
            </p>
            <div className="w-full grid grid-cols-1 md:flex md:flex-wrap md:justify-center md:gap-x-10 lg:grid lg:grid-cols-3 lg:gap-8 lg:gap-y-0 gap-y-8 md:gap-y-12 mb-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <ProcessStepCard
                  Icon={GlobeIcon}
                  title="Explore Best Place"
                  description="Reviewers tend to be distracted by presented with the actual comprehensible content..."
                  stepNumber={1}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <ProcessStepCard
                  Icon={EnvelopeIcon}
                  title="Book and Order"
                  description="Reviewers tend to be distracted by presented with the actual comprehensible content..."
                  stepNumber={2}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="w-full md:w-full md:max-w-sm md:mx-auto lg:w-auto lg:max-w-none lg:mx-0"
              >
                <ProcessStepCard
                  Icon={CheckMarkIcon}
                  title="Achieve Goals"
                  description="Reviewers tend to be distracted by presented with the actual comprehensible content..."
                  stepNumber={3}
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-3xl border border-blue-500 dark:border-blue-400 text-blue-500 dark:text-blue-400 hover:bg-blue-500 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white transition duration-300 p-[10px_20px] cursor-pointer w-fit font-semibold"
            >
              <span>View More Details</span>
              <Play className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </section>

        {/* Reviews Section */}
        <section className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900 dark:text-white">
              Our Great <span className="text-blue-500 dark:text-blue-400">Review</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-10">
              Our Clients love our services and give great & positive reviews
            </p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative pb-16 pt-2 w-full"
            >
              <ReviewList />
            </motion.div>
          </motion.div>
        </section>

        {/* Team Members Section */}
        <section className="w-full mt-16 md:mt-24 mb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center"
            >
              <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                Meet Our Great <span className="text-blue-500 dark:text-blue-400">Expert</span>
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-12">
                Explore our team and contact for any type of help you need
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <TeamSlider />
          </motion.div>
        </section>
      </main>
      <SubscribeLetter />
      <FooterComponent />
    </div>
  )
}

export default Page
