/**
 * ============================================
 * GENERAL TESTIMONIALS / REVIEWS
 * Used in: About page, Home page review slider
 * ============================================
 */
export const generalReviews = [
  {
    id: 1,
    author: 'Alice Walker',
    position: 'Software Engineer',
    title: 'Outstanding Service',
    rating: 5,
    content:
      'This service was phenomenal, the team was very attentive and delivered on time. I especially love their dedication and professionalism. Highly recommend to anyone looking for reliable solutions.',
    image: '/assets/team1.png',
  },
  {
    id: 2,
    author: 'John Doe',
    position: 'Product Manager',
    title: 'Great Experience',
    rating: 4.5,
    content:
      'Working with this company was a great experience overall. Communication was clear and the final product exceeded my expectations. Would definitely collaborate again!',
    image: '/assets/team2.png',
  },
  {
    id: 3,
    author: 'Sophia Lee',
    position: 'UX Designer',
    title: 'Very Responsive Team',
    rating: 3.5,
    content:
      'The team is extremely responsive and open to feedback. I appreciated the iterative design process and how they made sure I was happy at every stage.',
    image: '/assets/team3.png',
  },
  {
    id: 4,
    author: 'Michael Chen',
    position: 'Marketing Director',
    title: 'Exceeded Expectations',
    rating: 4,
    content:
      'From start to finish, the process was smooth and the results were beyond what I had hoped for. The marketing strategies implemented brought real results.',
    image: '/assets/team4.png',
  },
  {
    id: 5,
    author: 'Emily Davis',
    position: 'Product Manager',
    title: 'Professional and Friendly',
    rating: 4,
    content:
      'The team was not only professional but also very friendly and approachable. They listened to our needs and delivered a product that fits perfectly.',
    image: '/assets/team5.png',
  },
  {
    id: 6,
    author: 'Alexander Smith',
    position: 'Quality Assurance',
    title: 'Attention to Detail',
    rating: 5,
    content:
      'Their attention to detail is unmatched. Every aspect of the project was carefully considered and executed flawlessly. I would recommend them to anyone.',
    image: '/assets/team6.png',
  },
  {
    id: 7,
    author: 'Olivia Brown',
    position: 'Customer Success',
    title: 'Supportive and Efficient',
    rating: 4.5,
    content:
      'Whenever we had questions or needed support, the team was there for us. Their efficiency and support made the whole experience stress-free.',
    image: '/assets/team7.png',
  },
]

/**
 * ============================================
 * LISTING-SPECIFIC REVIEWS
 * Used in: Single listing page accordion
 * ============================================
 */
export const listingReviews = [
  {
    id: 101,
    name: 'Claire H. Jeter',
    date: '02 Sept 2025',
    stars: 5,
    img: '/assets/images/closeup_pic1.jpg',
    text: 'Great place — cozy and the coffee was excellent. The staff were friendly and the atmosphere was perfect for working or relaxing. Highly recommend!',
  },
  {
    id: 102,
    name: 'Jack M. Kerry',
    date: '04 Sept 2025',
    stars: 4,
    img: '/assets/images/closeup_pic1.jpg',
    text: 'Good experience overall, some items were slow to arrive but the quality was worth the wait. Would definitely come back again.',
  },
  {
    id: 103,
    name: 'Sarah Williams',
    date: '10 Sept 2025',
    stars: 3.5,
    img: '/assets/images/closeup_pic1.jpg',
    text: 'Decent place, nothing extraordinary but gets the job done. Would visit again if in the area.',
  },
  {
    id: 104,
    name: 'Michael Chen',
    date: '15 Sept 2025',
    stars: 5,
    img: '/assets/images/closeup_pic1.jpg',
    text: 'Absolutely amazing! Best service I have experienced in years. The attention to detail is remarkable.',
  },
  {
    id: 105,
    name: 'Emily Rodriguez',
    date: '18 Sept 2025',
    stars: 4.5,
    img: '/assets/images/closeup_pic1.jpg',
    text: 'Very impressed with the quality and service. Just a minor issue with parking, but everything else was perfect.',
  },
]

/**
 * ============================================
 * RATING OPTIONS (For Review Forms)
 * ============================================
 */
export const ratingOptions = [
  { value: 1, label: '⭐ 1 - Very Poor' },
  { value: 2, label: '⭐⭐ 2 - Poor' },
  { value: 3, label: '⭐⭐⭐ 3 - Average' },
  { value: 4, label: '⭐⭐⭐⭐ 4 - Very Good' },
  { value: 5, label: '⭐⭐⭐⭐⭐ 5 - Excellent' },
]

/**
 * ============================================
 * DEFAULT IMAGES & CONFIG
 * ============================================
 */
export const defaultReviewAvatar = '/assets/images/closeup_pic1.jpg'

export const reviewFormConfig = {
  maxMessageLength: 500,
  minMessageLength: 10,
  requiredFields: ['email', 'rating', 'message'],
  optionalFields: ['name', 'title'],
}

/**
 * ============================================
 * EXPORT DEFAULT (For backward compatibility)
 * ============================================
 */
export default generalReviews
