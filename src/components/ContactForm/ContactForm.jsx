'use client'

import React, { useState }                  from 'react'
import { Send }                             from 'lucide-react'
import emailjs                              from '@emailjs/browser'
import { ToastContainer, toast }            from 'react-toastify'
import { showSuccessToast, showErrorToast } from '@/lib/toastConfig'
import 'react-toastify/dist/ReactToastify.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    const loadingToastId = toast.loading('Sending your message...', {
      position: "top-center",
      style: {
        background: '#1f2937',
        color: '#ffffff',
        fontWeight: '600',
        borderRadius: '12px',
      },
    })
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your .env.local file.')
      }
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        subject: formData.subject,
        message: formData.message,
        to_name: 'Camfind Team',
      }
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      toast.dismiss(loadingToastId)
      setTimeout(() => {
        showSuccessToast('✅ Message sent successfully! We\'ll get back to you soon.')
      }, 100)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      toast.dismiss(loadingToastId)
      setTimeout(() => {
        let errorMessage = '❌ Failed to send message. '
        if (error.text) errorMessage += `Error: ${error.text}`
        else if (error.message) errorMessage += error.message
        else errorMessage += 'Please check your internet connection and try again.'
        showErrorToast(errorMessage)
      }, 100)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ zIndex: 9999 }}
      />
      <section className='w-full bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-950 py-20 md:py-28 transition-colors duration-300'>
        <div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-800 dark:text-gray-100 sm:text-4xl lg:text-5xl mb-4'>
              Drop Us a Line
            </h2>
            <p className='mt-4 max-w-3xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-300'>
              Get in touch via form below and we will reply as soon as we can.
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
            <div className='w-full'>
              <form onSubmit={handleSubmit} className='space-y-6 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700 transition-colors duration-300'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label htmlFor='name' className='block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2'>
                      Your Name <span className='text-red-500'>*</span>
                    </label>
                    <input 
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      placeholder='John Doe' 
                      className='w-full px-4 py-3 border border-gray-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400 dark:hover:border-slate-500 disabled:bg-gray-100 dark:disabled:bg-slate-700 disabled:cursor-not-allowed bg-white dark:bg-slate-900 text-gray-900 dark:text-white'
                    />
                  </div>
                  <div>
                    <label htmlFor='email' className='block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2'>
                      Your Email <span className='text-red-500'>*</span>
                    </label>
                    <input 
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      placeholder='john@example.com' 
                      className='w-full px-4 py-3 border border-gray-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400 dark:hover:border-slate-500 disabled:bg-gray-100 dark:disabled:bg-slate-700 disabled:cursor-not-allowed bg-white dark:bg-slate-900 text-gray-900 dark:text-white'
                    />
                  </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label htmlFor='phone' className='block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2'>
                      Phone Number
                    </label>
                    <input 
                      type='tel'
                      id='phone'
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      placeholder='+1 234 567 8900' 
                      className='w-full px-4 py-3 border border-gray-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400 dark:hover:border-slate-500 disabled:bg-gray-100 dark:disabled:bg-slate-700 disabled:cursor-not-allowed bg-white dark:bg-slate-900 text-gray-900 dark:text-white'
                    />
                  </div>
                  <div>
                    <label htmlFor='subject' className='block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2'>
                      Subject <span className='text-red-500'>*</span>
                    </label>
                    <input 
                      type='text'
                      id='subject'
                      name='subject'
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      placeholder='How can we help?' 
                      className='w-full px-4 py-3 border border-gray-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400 dark:hover:border-slate-500 disabled:bg-gray-100 dark:disabled:bg-slate-700 disabled:cursor-not-allowed bg-white dark:bg-slate-900 text-gray-900 dark:text-white'
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor='message' className='block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2'>
                    Your Message <span className='text-red-500'>*</span>
                  </label>
                  <textarea 
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows='6' 
                    placeholder='Tell us more about your inquiry...' 
                    className='w-full px-4 py-3 border border-gray-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400 dark:hover:border-slate-500 resize-none disabled:bg-gray-100 dark:disabled:bg-slate-700 disabled:cursor-not-allowed bg-white dark:bg-slate-900 text-gray-900 dark:text-white'
                  ></textarea>
                </div>
                <div className='text-left'>
                  <button 
                    type='submit' 
                    disabled={isSubmitting}
                    className='inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none'
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className='w-5 h-5' />
                  </button>
                </div>
              </form>
            </div>
            <div className='w-full h-full'>
              <div className='bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700 h-full min-h-[500px] transition-colors duration-300'>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m22!1m12!1m3!1d1109.4765861243418!2d9.742616516639496!3d4.088732231960206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m7!3e6!4m4!1s0x10610de1d7b3a259%3A0x142c5c407bf8d218!3m2!1d4.089185!2d9.742777499999999!4m0!5e0!3m2!1sfr!2scm!4v1759486943102!5m2!1sfr!2scm" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, borderRadius: '12px', minHeight: '500px' }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactForm
