'use client'
import React, { useState, useEffect } from 'react'
import { useUser }                    from '@clerk/nextjs'
import { useRouter }                  from 'next/navigation'
import Image                          from 'next/image'
import CreatableSelect                from 'react-select/creatable'
import { toast }                      from 'react-toastify'
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  DollarSign,
  Upload,
  X,
  Loader2,
  CheckCircle,
  Image as ImageIcon,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react'

import NavBarComponent                from '@/components/NavBarComponent/NavBarComponent'
import FooterComponent                from '@/components/Footer/FooterComponent'
import { selectClassNames }           from '@/config/selectStyles'
import { amenitiesData }              from '@/data/amenitiesData'
import {
  categoryOptions,
  regionOptions,
  cityOptions,
  priceRangeOptions,
} from '@/data/addListingFormData'

export default function AddListingPage() {
  const { isSignedIn, user, isLoaded } = useUser()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedImages, setSelectedImages] = useState([])
  const [imagePreviewUrls, setImagePreviewUrls] = useState([])

  // Form state
  const [formData, setFormData] = useState({
    // Basic Info
    businessName: '',
    category: null,
    description: '',

    // Location
    region: null,
    city: null,
    address: '',
    mapCoordinates: '',

    // Contact
    phone: '',
    email: '',
    website: '',
    whatsapp: '',

    // Details
    priceRange: null,
    amenities: [],
    
    // Hours
    businessHours: '',
  })

  // Redirect if not signed in (client-side protection)
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      console.log('❌ Not signed in, redirecting to login')
      router.replace('/login?redirect=/add-listing&action=add-listing')
    }
  }, [isLoaded, isSignedIn, router])

  // Handle form field changes
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  // Handle amenities toggle
  const toggleAmenity = (amenityLabel) => {
    setFormData((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenityLabel)
        ? prev.amenities.filter((a) => a !== amenityLabel)
        : [...prev.amenities, amenityLabel],
    }))
  }

  // Handle image upload
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files)
    const maxImages = 6

    if (selectedImages.length + files.length > maxImages) {
      toast.error(`You can only upload up to ${maxImages} images`)
      return
    }

    // Validate file sizes (max 10MB per file)
    const invalidFiles = files.filter((file) => file.size > 10 * 1024 * 1024)
    if (invalidFiles.length > 0) {
      toast.error('Some files are too large. Max size is 10MB per image.')
      return
    }

    // Generate preview URLs
    const newPreviewUrls = files.map((file) => URL.createObjectURL(file))
    setImagePreviewUrls((prev) => [...prev, ...newPreviewUrls])
    setSelectedImages((prev) => [...prev, ...files])
    
    toast.success(`${files.length} image(s) added successfully`)
  }

  // Remove image
  const removeImage = (index) => {
    // Revoke object URL to prevent memory leak
    URL.revokeObjectURL(imagePreviewUrls[index])
    
    setImagePreviewUrls((prev) => prev.filter((_, i) => i !== index))
    setSelectedImages((prev) => prev.filter((_, i) => i !== index))
    
    toast.info('Image removed')
  }

  // Validate current step
  const validateStep = (step) => {
    switch (step) {
      case 1:
        if (!formData.businessName.trim()) {
          toast.error('Business name is required')
          return false
        }
        if (!formData.category) {
          toast.error('Please select a category')
          return false
        }
        if (!formData.description.trim() || formData.description.length < 20) {
          toast.error('Description must be at least 20 characters')
          return false
        }
        return true
        
      case 2:
        if (!formData.region) {
          toast.error('Please select a region')
          return false
        }
        if (!formData.city) {
          toast.error('Please select a city')
          return false
        }
        if (!formData.address.trim()) {
          toast.error('Street address is required')
          return false
        }
        return true
        
      case 3:
        if (!formData.phone.trim()) {
          toast.error('Phone number is required')
          return false
        }
        return true
        
      case 4:
        if (selectedImages.length === 0) {
          toast.warning('We recommend adding at least one image')
        }
        return true
        
      default:
        return true
    }
  }

  // Handle step navigation
  const goToNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(4, prev + 1))
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const goToPreviousStep = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateStep(4)) {
      return
    }

    setLoading(true)

    try {
      // Simulate API call (replace with your actual API)
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Here you would typically:
      // 1. Upload images to storage (Cloudinary, AWS S3, etc.)
      // 2. Submit form data to your backend API
      // 3. Create listing in database

      const listingData = {
        ...formData,
        userId: user.id,
        userEmail: user.primaryEmailAddress?.emailAddress,
        userName: `${user.firstName} ${user.lastName}`,
        images: selectedImages.map((file) => file.name), // In real app, these would be URLs
        createdAt: new Date().toISOString(),
      }

      console.log('Submitting Listing:', listingData)
      console.log('Images:', selectedImages)

      toast.success('🎉 Listing created successfully!')
      
      // Redirect after success
      setTimeout(() => {
        router.push('/listings')
      }, 2000)
      
    } catch (error) {
      console.error('Submission error:', error)
      toast.error('Failed to create listing. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // Show loading while checking auth
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 flex flex-col items-center justify-center">
        <Loader2 className="animate-spin text-blue-600" size={48} />
        <p className="text-slate-700 dark:text-slate-300 mt-4">Loading...</p>
      </div>
    )
  }

  // If not signed in, show loading (will redirect via useEffect)
  if (!isSignedIn) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 flex flex-col items-center justify-center">
        <Loader2 className="animate-spin text-blue-600" size={48} />
        <p className="text-slate-700 dark:text-slate-300 mt-4">
          Redirecting to login...
        </p>
      </div>
    )
  }

  const totalSteps = 4

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors">
      <NavBarComponent />

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-700 dark:to-indigo-800 text-white pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-3">Add Your Business Listing</h1>
          <p className="text-blue-100">
            Share your business with thousands of potential customers across Cameroon
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm text-blue-100">
            <span className="bg-blue-800/50 px-3 py-1 rounded-full">
              Signed in as: {user.firstName || user.emailAddresses[0].emailAddress}
            </span>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((step) => (
              <React.Fragment key={step}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                      currentStep >= step
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 dark:bg-slate-700 text-gray-500 dark:text-slate-400'
                    }`}
                  >
                    {currentStep > step ? <CheckCircle size={20} /> : step}
                  </div>
                  <span className="text-xs mt-2 text-slate-600 dark:text-slate-400 hidden sm:block">
                    {step === 1 && 'Basic Info'}
                    {step === 2 && 'Location'}
                    {step === 3 && 'Details'}
                    {step === 4 && 'Images'}
                  </span>
                </div>
                {step < totalSteps && (
                  <div
                    className={`flex-1 h-1 mx-2 rounded transition-colors ${
                      currentStep > step
                        ? 'bg-blue-600'
                        : 'bg-gray-200 dark:bg-slate-700'
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 space-y-6 animate-fadeIn">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                <Building2 size={24} className="text-blue-600" />
                Basic Information
              </h2>

              {/* Business Name */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Business Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => handleChange('businessName', e.target.value)}
                  required
                  placeholder="e.g., Café du Centre"
                  className="w-full px-4 py-2.5 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Category <span className="text-red-500">*</span>
                </label>
                <CreatableSelect
                  unstyled
                  classNames={selectClassNames}
                  options={categoryOptions}
                  value={formData.category}
                  onChange={(opt) => handleChange('category', opt)}
                  placeholder="Select or create a category..."
                  isClearable
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleChange('description', e.target.value)}
                  required
                  rows={6}
                  maxLength={500}
                  placeholder="Describe your business, services, and what makes you unique..."
                  className="w-full px-4 py-2.5 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none"
                />
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {formData.description.length} / 500 characters (min 20)
                </p>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Price Range (Optional)
                </label>
                <CreatableSelect
                  unstyled
                  classNames={selectClassNames}
                  options={priceRangeOptions}
                  value={formData.priceRange}
                  onChange={(opt) => handleChange('priceRange', opt)}
                  placeholder="Select price range..."
                  isClearable
                />
              </div>
            </div>
          )}

          {/* Step 2: Location */}
          {currentStep === 2 && (
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 space-y-6 animate-fadeIn">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                <MapPin size={24} className="text-blue-600" />
                Location Details
              </h2>

              {/* Region & City */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Region <span className="text-red-500">*</span>
                  </label>
                  <CreatableSelect
                    unstyled
                    classNames={selectClassNames}
                    options={regionOptions}
                    value={formData.region}
                    onChange={(opt) => handleChange('region', opt)}
                    placeholder="Select region..."
                    isClearable
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    City <span className="text-red-500">*</span>
                  </label>
                  <CreatableSelect
                    unstyled
                    classNames={selectClassNames}
                    options={cityOptions}
                    value={formData.city}
                    onChange={(opt) => handleChange('city', opt)}
                    placeholder="Select city..."
                    isClearable
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Street Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => handleChange('address', e.target.value)}
                  required
                  placeholder="e.g., Avenue Kennedy, Bastos"
                  className="w-full px-4 py-2.5 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                />
              </div>

              {/* Map Coordinates */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Map Coordinates (Optional)
                </label>
                <input
                  type="text"
                  value={formData.mapCoordinates}
                  onChange={(e) => handleChange('mapCoordinates', e.target.value)}
                  placeholder="e.g., 3.8480, 11.5021"
                  className="w-full px-4 py-2.5 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                />
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Enter latitude and longitude separated by comma
                </p>
              </div>
            </div>
          )}

          {/* Step 3: Contact & Details */}
          {currentStep === 3 && (
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 space-y-6 animate-fadeIn">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                <Phone size={24} className="text-blue-600" />
                Contact & Details
              </h2>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    required
                    placeholder="+237 6XX XXX XXX"
                    className="w-full px-4 py-2.5 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => handleChange('whatsapp', e.target.value)}
                    placeholder="+237 6XX XXX XXX"
                    className="w-full px-4 py-2.5 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="business@example.com"
                    className="w-full px-4 py-2.5 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Website
                  </label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => handleChange('website', e.target.value)}
                    placeholder="https://example.com"
                    className="w-full px-4 py-2.5 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  />
                </div>
              </div>

              {/* Business Hours */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Business Hours
                </label>
                <input
                  type="text"
                  value={formData.businessHours}
                  onChange={(e) => handleChange('businessHours', e.target.value)}
                  placeholder="e.g., Mon-Fri: 8AM-6PM, Sat-Sun: 10AM-4PM"
                  className="w-full px-4 py-2.5 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                />
              </div>

              {/* Amenities */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                  Amenities & Features
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {amenitiesData.map(({ icon: Icon, label }) => (
                    <label
                      key={label}
                      className={`flex items-center gap-2 p-3 border rounded-lg cursor-pointer transition-all ${
                        formData.amenities.includes(label)
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-slate-300 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-700'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.amenities.includes(label)}
                        onChange={() => toggleAmenity(label)}
                        className="rounded text-blue-600 focus:ring-blue-500"
                      />
                      <Icon size={16} className="text-blue-600 dark:text-blue-400" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">
                        {label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Images */}
          {currentStep === 4 && (
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 space-y-6 animate-fadeIn">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                <ImageIcon size={24} className="text-blue-600" />
                Business Images
              </h2>

              <p className="text-sm text-slate-600 dark:text-slate-400">
                Upload up to 6 high-quality images of your business (interior, exterior, products, etc.)
              </p>

              {/* Image Upload */}
              <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg p-8 text-center hover:border-blue-500 dark:hover:border-blue-400 transition-colors cursor-pointer">
                <input
                  type="file"
                  id="image-upload"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <label
                  htmlFor="image-upload"
                  className="cursor-pointer flex flex-col items-center gap-3"
                >
                  <Upload size={48} className="text-slate-400" />
                  <div>
                    <p className="text-slate-700 dark:text-slate-300 font-medium">
                      Click to upload images
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      PNG, JPG up to 10MB (Max 6 images)
                    </p>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {selectedImages.length} / 6 images uploaded
                  </div>
                </label>
              </div>

              {/* Image Previews */}
              {imagePreviewUrls.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {imagePreviewUrls.map((url, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={url}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-40 object-cover rounded-lg border-2 border-slate-200 dark:border-slate-700"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-2 right-2 w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                      >
                        <X size={16} />
                      </button>
                      <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                        Image {index + 1}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
            <button
              type="button"
              onClick={goToPreviousStep}
              disabled={currentStep === 1}
              className="flex items-center gap-2 px-6 py-2.5 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowLeft size={18} />
              Previous
            </button>

            <span className="text-sm text-slate-600 dark:text-slate-400">
              Step {currentStep} of {totalSteps}
            </span>

            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={goToNextStep}
                className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Next Step
                <ArrowRight size={18} />
              </button>
            ) : (
              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 px-8 py-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Creating...
                  </>
                ) : (
                  <>
                    <CheckCircle size={18} />
                    Create Listing
                  </>
                )}
              </button>
            )}
          </div>
        </form>
      </div>

      <FooterComponent />

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}
