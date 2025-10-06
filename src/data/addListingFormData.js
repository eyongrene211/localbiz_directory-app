/**
 * Categories for business listings
 */
export const categoryOptions = [
  { value: 'restaurant', label: '🍽️ Restaurant' },
  { value: 'cafe', label: '☕ Café' },
  { value: 'hotel', label: '🏨 Hotel' },
  { value: 'bar', label: '🍺 Bar & Lounge' },
  { value: 'gym', label: '💪 Gym & Fitness' },
  { value: 'spa', label: '💆 Spa & Wellness' },
  { value: 'salon', label: '💇 Salon & Barbershop' },
  { value: 'shop', label: '🛍️ Retail Shop' },
  { value: 'clinic', label: '🏥 Clinic & Healthcare' },
  { value: 'school', label: '🎓 School & Education' },
  { value: 'entertainment', label: '🎬 Entertainment' },
  { value: 'service', label: '🔧 Service Provider' },
  { value: 'auto', label: '🚗 Auto Services' },
  { value: 'beauty', label: '💄 Beauty & Cosmetics' },
  { value: 'real-estate', label: '🏠 Real Estate' },
  { value: 'finance', label: '💰 Financial Services' },
  { value: 'tech', label: '💻 Technology' },
  { value: 'other', label: '📌 Other' },
]

/**
 * Regions in Cameroon
 */
export const regionOptions = [
  { value: 'centre', label: 'Centre Region' },
  { value: 'littoral', label: 'Littoral Region' },
  { value: 'west', label: 'West Region' },
  { value: 'northwest', label: 'Northwest Region' },
  { value: 'southwest', label: 'Southwest Region' },
  { value: 'south', label: 'South Region' },
  { value: 'east', label: 'East Region' },
  { value: 'adamawa', label: 'Adamawa Region' },
  { value: 'north', label: 'North Region' },
  { value: 'far-north', label: 'Far North Region' },
]

/**
 * Major cities in Cameroon
 */
export const cityOptions = [
  // Centre Region
  { value: 'yaounde', label: 'Yaoundé', region: 'centre' },
  { value: 'obala', label: 'Obala', region: 'centre' },
  { value: 'mbalmayo', label: 'Mbalmayo', region: 'centre' },
  
  // Littoral Region
  { value: 'douala', label: 'Douala', region: 'littoral' },
  { value: 'edea', label: 'Edéa', region: 'littoral' },
  { value: 'nkongsamba', label: 'Nkongsamba', region: 'littoral' },
  
  // West Region
  { value: 'bafoussam', label: 'Bafoussam', region: 'west' },
  { value: 'dschang', label: 'Dschang', region: 'west' },
  { value: 'mbouda', label: 'Mbouda', region: 'west' },
  
  // Northwest Region
  { value: 'bamenda', label: 'Bamenda', region: 'northwest' },
  { value: 'kumbo', label: 'Kumbo', region: 'northwest' },
  { value: 'wum', label: 'Wum', region: 'northwest' },
  
  // Southwest Region
  { value: 'buea', label: 'Buea', region: 'southwest' },
  { value: 'limbe', label: 'Limbe', region: 'southwest' },
  { value: 'kumba', label: 'Kumba', region: 'southwest' },
  { value: 'tiko', label: 'Tiko', region: 'southwest' },
  
  // South Region
  { value: 'ebolowa', label: 'Ebolowa', region: 'south' },
  { value: 'kribi', label: 'Kribi', region: 'south' },
  { value: 'sangmelima', label: 'Sangmélima', region: 'south' },
  
  // East Region
  { value: 'bertoua', label: 'Bertoua', region: 'east' },
  { value: 'batouri', label: 'Batouri', region: 'east' },
  
  // Adamawa Region
  { value: 'ngaoundere', label: 'Ngaoundéré', region: 'adamawa' },
  { value: 'meiganga', label: 'Meiganga', region: 'adamawa' },
  
  // North Region
  { value: 'garoua', label: 'Garoua', region: 'north' },
  { value: 'guider', label: 'Guider', region: 'north' },
  
  // Far North Region
  { value: 'maroua', label: 'Maroua', region: 'far-north' },
  { value: 'kousseri', label: 'Kousséri', region: 'far-north' },
  { value: 'mokolo', label: 'Mokolo', region: 'far-north' },
]

/**
 * Price range options
 */
export const priceRangeOptions = [
  { value: '$', label: '$ - Budget Friendly (Under 5,000 XAF)' },
  { value: '$$', label: '$$ - Moderate (5,000 - 15,000 XAF)' },
  { value: '$$$', label: '$$$ - Expensive (15,000 - 30,000 XAF)' },
  { value: '$$$$', label: '$$$$ - Very Expensive (30,000+ XAF)' },
]
