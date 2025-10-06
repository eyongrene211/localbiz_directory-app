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
 * Cities (can be expanded per region)
 */
export const cityOptions = [
  { value: 'yaounde', label: 'Yaoundé', region: 'centre' },
  { value: 'douala', label: 'Douala', region: 'littoral' },
  { value: 'bafoussam', label: 'Bafoussam', region: 'west' },
  { value: 'bamenda', label: 'Bamenda', region: 'northwest' },
  { value: 'buea', label: 'Buea', region: 'southwest' },
  { value: 'limbe', label: 'Limbe', region: 'southwest' },
  { value: 'garoua', label: 'Garoua', region: 'north' },
  { value: 'maroua', label: 'Maroua', region: 'far-north' },
  { value: 'ngaoundere', label: 'Ngaoundéré', region: 'adamawa' },
]

/**
 * Business hours presets
 */
export const businessHoursOptions = [
  { value: '24/7', label: '24/7 (Always Open)' },
  { value: 'weekdays', label: 'Weekdays Only (Mon-Fri)' },
  { value: 'weekends', label: 'Weekends Only (Sat-Sun)' },
  { value: 'custom', label: 'Custom Hours' },
]

/**
 * Price range options
 */
export const priceRangeOptions = [
  { value: '$', label: '$ - Budget Friendly' },
  { value: '$$', label: '$$ - Moderate' },
  { value: '$$$', label: '$$$ - Expensive' },
  { value: '$$$$', label: '$$$$ - Very Expensive' },
]
