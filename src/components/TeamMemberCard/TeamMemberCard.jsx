// components/TeamMemberCard/TeamMemberCard.jsx

import React          from 'react'
import { SocialIcon } from 'react-social-icons'

const TeamMemberCard = ({ name, position, image, socialLinks }) => {
    return (
      <div className='flex flex-col border p-4 rounded-2xl w-full max-w-[388px] md:max-w-[355px] lg:max-w-[247px] mx-auto'>
        {/* Image Container */}
        <div className='w-full mb-4'>
          <img 
            src={image} 
            alt={name}  
            className='w-full h-auto aspect-square object-cover rounded-xl'
          />
        </div>

        {/* Description */}
        <div className='flex flex-col items-center gap-1 text-center mb-3'>
          <span className='font-bold text-base md:text-lg'>{name}</span>
          <span className='text-sm md:text-base text-gray-600'>{position}</span>
        </div>

        {/* Social Media Icons - At Bottom */}
        <div className='flex gap-2 justify-center items-center pt-3 border-t'>
          <SocialIcon 
            url={socialLinks.facebook} 
            style={{ height: 32, width: 32 }}
            target="_blank"
            rel="noopener noreferrer"
          />
          <SocialIcon 
            url={socialLinks.twitter} 
            style={{ height: 32, width: 32 }}
            target="_blank"
            rel="noopener noreferrer"
          />
          <SocialIcon 
            url={socialLinks.instagram} 
            style={{ height: 32, width: 32 }}
            target="_blank"
            rel="noopener noreferrer"
          />
          <SocialIcon 
            url={socialLinks.pinterest} 
            style={{ height: 32, width: 32 }}
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      </div>
    )
}

export default TeamMemberCard
