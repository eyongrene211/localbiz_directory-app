export const blogPosts = [
  {
    id: 1,
    slug: 'learn-cooking-with-shree-patel',
    title: 'Learn Cooking with Shree Patel',
    category: 'Cooking',
    categoryColor: 'green',
    excerpt: 'Join master chef Shree Patel for an exciting cooking workshop where you will learn traditional and modern culinary techniques.',
    coverImage: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80&auto=format&fit=crop',
    author: {
      name: 'Shree Patel',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80&auto=format&fit=crop',
      bio: 'Professional Chef with 15 years experience'
    },
    date: '2025-05-05',
    time: {
      start: '10:30 AM',
      end: '14:40 PM'
    },
    content: `
      <p>Welcome to an unforgettable culinary journey! In this exclusive cooking workshop, master chef Shree Patel will guide you through the art of creating delicious, restaurant-quality dishes right in your own kitchen.</p>
      
      <h2>What You'll Learn</h2>
      <ul>
        <li>Professional knife skills and food preparation techniques</li>
        <li>Traditional and fusion cooking methods</li>
        <li>Plating and presentation secrets</li>
        <li>Kitchen organization and efficiency tips</li>
      </ul>
      
      <h2>About the Workshop</h2>
      <p>This hands-on workshop is designed for cooking enthusiasts of all skill levels. Whether you're a complete beginner or looking to refine your techniques, you'll find valuable insights and practical knowledge.</p>
      
      <h2>What to Bring</h2>
      <ul>
        <li>Comfortable clothing and closed-toe shoes</li>
        <li>Notebook for taking notes</li>
        <li>Your enthusiasm and appetite!</li>
      </ul>
      
      <h2>Workshop Details</h2>
      <p>The workshop includes all ingredients, equipment, and a recipe booklet to take home. Light refreshments will be provided throughout the session.</p>
    `,
    tags: ['cooking', 'workshop', 'culinary', 'food'],
    location: 'Douala Culinary Center, Akwa',
    price: 'Free',
    capacity: 25,
    enrolled: 18
  },
  {
    id: 2,
    slug: 'digital-marketing-masterclass',
    title: 'Digital Marketing Masterclass for Small Businesses',
    category: 'Business',
    categoryColor: 'blue',
    excerpt: 'Learn proven digital marketing strategies to grow your business online and reach more customers.',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop',
    author: {
      name: 'Jean Mbarga',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&auto=format&fit=crop',
      bio: 'Digital Marketing Expert & Business Consultant'
    },
    date: '2025-05-12',
    time: {
      start: '09:00 AM',
      end: '13:00 PM'
    },
    content: `
      <p>Unlock the power of digital marketing for your business! This comprehensive masterclass will teach you everything you need to know to establish a strong online presence and attract more customers.</p>
      
      <h2>Course Outline</h2>
      <ul>
        <li>Social Media Marketing Fundamentals</li>
        <li>Content Creation and Strategy</li>
        <li>Email Marketing Best Practices</li>
        <li>Google Business Profile Optimization</li>
        <li>Basic SEO for Local Businesses</li>
      </ul>
      
      <h2>Who Should Attend</h2>
      <p>This masterclass is perfect for small business owners, entrepreneurs, and marketing professionals looking to enhance their digital marketing skills.</p>
      
      <h2>What You'll Gain</h2>
      <ul>
        <li>Practical marketing templates and tools</li>
        <li>Step-by-step implementation guide</li>
        <li>Access to our private business community</li>
        <li>Certificate of completion</li>
      </ul>
    `,
    tags: ['marketing', 'business', 'digital', 'entrepreneurship'],
    location: 'Yaounde Business Hub, Bastos',
    price: '15,000 FCFA',
    capacity: 30,
    enrolled: 22
  },
  {
    id: 3,
    slug: 'photography-basics-workshop',
    title: 'Photography Basics: Capture Stunning Images',
    category: 'Photography',
    categoryColor: 'purple',
    excerpt: 'Master the fundamentals of photography and learn to take professional-quality photos with any camera.',
    coverImage: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80&auto=format&fit=crop',
    author: {
      name: 'Marie Fotso',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&auto=format&fit=crop',
      bio: 'Award-winning Photographer & Visual Artist'
    },
    date: '2025-05-18',
    time: {
      start: '14:00 PM',
      end: '18:00 PM'
    },
    content: `
      <p>Discover the art and science of photography! This beginner-friendly workshop will teach you the essential skills needed to capture beautiful, professional-looking photos.</p>
      
      <h2>Topics Covered</h2>
      <ul>
        <li>Understanding your camera settings</li>
        <li>Composition and framing techniques</li>
        <li>Lighting fundamentals</li>
        <li>Basic photo editing</li>
        <li>Creating a photography portfolio</li>
      </ul>
      
      <h2>What to Bring</h2>
      <p>Bring your camera (DSLR, mirrorless, or even smartphone) and a willingness to learn. We'll have practice equipment available as well.</p>
      
      <h2>Practical Session</h2>
      <p>The workshop includes a hands-on outdoor photo walk where you'll apply what you've learned under professional guidance.</p>
    `,
    tags: ['photography', 'workshop', 'art', 'creative'],
    location: 'Downtown Douala, Bonanjo',
    price: '10,000 FCFA',
    capacity: 15,
    enrolled: 12
  },
  {
    id: 4,
    slug: 'tech-startup-networking-event',
    title: 'Tech Startup Networking Evening',
    category: 'Technology',
    categoryColor: 'orange',
    excerpt: 'Connect with fellow entrepreneurs, investors, and tech enthusiasts in Cameroon\'s growing startup ecosystem.',
    coverImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80&auto=format&fit=crop',
    author: {
      name: 'Patrick Nkeng',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop',
      bio: 'Tech Entrepreneur & Startup Mentor'
    },
    date: '2025-05-25',
    time: {
      start: '17:30 PM',
      end: '21:00 PM'
    },
    content: `
      <p>Join the most vibrant tech community in Cameroon! This networking event brings together startup founders, developers, investors, and innovators for an evening of connection and collaboration.</p>
      
      <h2>Event Highlights</h2>
      <ul>
        <li>Speed networking sessions</li>
        <li>Startup pitch competition</li>
        <li>Panel discussion with successful founders</li>
        <li>Investor meetups</li>
        <li>Live music and refreshments</li>
      </ul>
      
      <h2>Who Should Attend</h2>
      <p>This event is ideal for tech entrepreneurs, software developers, product managers, investors, and anyone interested in the startup ecosystem.</p>
      
      <h2>Why Attend</h2>
      <ul>
        <li>Meet potential co-founders and team members</li>
        <li>Connect with investors and mentors</li>
        <li>Learn from successful entrepreneurs</li>
        <li>Discover collaboration opportunities</li>
      </ul>
    `,
    tags: ['technology', 'startup', 'networking', 'entrepreneurship'],
    location: 'ActivSpaces Douala, Bonaberi',
    price: 'Free (Registration Required)',
    capacity: 100,
    enrolled: 67
  },
  {
    id: 5,
    slug: 'yoga-wellness-retreat',
    title: 'Weekend Yoga & Wellness Retreat',
    category: 'Wellness',
    categoryColor: 'pink',
    excerpt: 'Rejuvenate your mind and body with a peaceful weekend yoga retreat in the beautiful Cameroonian countryside.',
    coverImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80&auto=format&fit=crop',
    author: {
      name: 'Amina Sani',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80&auto=format&fit=crop',
      bio: 'Certified Yoga Instructor & Wellness Coach'
    },
    date: '2025-06-01',
    time: {
      start: '08:00 AM',
      end: '18:00 PM'
    },
    content: `
      <p>Escape the hustle and bustle of city life and immerse yourself in a transformative wellness experience. This one-day retreat combines yoga, meditation, and holistic wellness practices.</p>
      
      <h2>Retreat Schedule</h2>
      <ul>
        <li>Morning yoga session (Hatha & Vinyasa)</li>
        <li>Guided meditation and breathing exercises</li>
        <li>Healthy organic brunch</li>
        <li>Wellness workshop</li>
        <li>Afternoon relaxation and nature walk</li>
        <li>Sunset yoga session</li>
      </ul>
      
      <h2>What's Included</h2>
      <ul>
        <li>All yoga equipment and mats</li>
        <li>Healthy meals and refreshments</li>
        <li>Wellness goodie bag</li>
        <li>Professional instruction</li>
      </ul>
      
      <h2>Perfect For</h2>
      <p>This retreat welcomes all levels, from complete beginners to experienced yogis. Come alone or bring friends!</p>
    `,
    tags: ['yoga', 'wellness', 'health', 'meditation'],
    location: 'Mount Cameroon Eco-Resort, Buea',
    price: '25,000 FCFA',
    capacity: 20,
    enrolled: 15
  },
  {
    id: 6,
    slug: 'french-language-intensive-course',
    title: 'French Language Intensive Course',
    category: 'Education',
    categoryColor: 'indigo',
    excerpt: 'Improve your French language skills with our comprehensive intensive course designed for all proficiency levels.',
    coverImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80&auto=format&fit=crop',
    author: {
      name: 'Dr. Sophie Kamga',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80&auto=format&fit=crop',
      bio: 'French Language Professor & Cultural Expert'
    },
    date: '2025-06-08',
    time: {
      start: '16:00 PM',
      end: '19:00 PM'
    },
    content: `
      <p>Master the French language with our expertly designed intensive course! Whether you're a beginner or looking to refine your skills, our program offers personalized attention and practical learning.</p>
      
      <h2>Course Structure</h2>
      <ul>
        <li>Grammar and vocabulary building</li>
        <li>Conversational practice sessions</li>
        <li>Writing and comprehension exercises</li>
        <li>Cultural immersion activities</li>
        <li>Business French (optional module)</li>
      </ul>
      
      <h2>Learning Approach</h2>
      <p>Our communicative method focuses on real-world application, ensuring you can confidently use French in everyday situations and professional contexts.</p>
      
      <h2>Course Benefits</h2>
      <ul>
        <li>Small class sizes for personalized attention</li>
        <li>Native French-speaking instructors</li>
        <li>Study materials included</li>
        <li>Certificate upon completion</li>
      </ul>
    `,
    tags: ['language', 'education', 'french', 'learning'],
    location: 'Alliance Française, Yaoundé',
    price: '50,000 FCFA (4-week course)',
    capacity: 12,
    enrolled: 9
  }
]
