// components/StatisticItem.jsx (or whatever you call your component file)
'use client'
import CountUp from 'react-countup';

const StatisticItem = ({ end, label, unit = '' }) => {
  // Common props for the CountUp animation
  const countUpProps = {
    end: end,
    duration: 2.5, // The animation will take 2.5 seconds
    separator: ",", // Add a comma separator for large numbers (e.g., 145,000)
    enableScrollSpy: true, // This is key! It starts the animation when the component scrolls into view.
    scrollSpyOnce: true, // Ensures the animation only plays one time.
  };

  return (
    <div className='flex flex-col w-fit'>
      <h2 className='text-blue-400 text-center text-2xl md:text-3xl lg:text-4xl font-bold'>
        <CountUp {...countUpProps} />
        {/* If a unit is provided (like 'K'), render it */}
        {unit && <span className='text-black'>{unit}</span>}
      </h2>
      <span>{label}</span>
    </div>
  );
};

export default StatisticItem;