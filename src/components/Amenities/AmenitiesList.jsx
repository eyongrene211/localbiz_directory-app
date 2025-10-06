import {
  Flame,
  Thermometer,
  Bell,
  Building2,
  Wind,
  Zap,
  Wifi,
  Accessibility,
  Droplet,
  Snowflake,
} from 'lucide-react'

export default function AmenitiesList() {
  const amenities = [
    { icon: Flame, label: 'Natural Gas' },
    { icon: Thermometer, label: 'Heating' },
    { icon: Bell, label: 'Smoke Detectors' },
    { icon: Building2, label: 'Elevator' },

    { icon: Wind, label: 'Ventilation' },
    { icon: Zap, label: 'Electricity' },
    { icon: Wifi, label: 'Free WiFi' },
    { icon: Accessibility, label: 'Chair Accessible' },

    { icon: Droplet, label: 'Pure Water' },
    { icon: Snowflake, label: 'Cooling Air' },
    { icon: Flame, label: 'Fireplace' },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {amenities.map(({ icon: Icon, label }) => (
        <div key={label} className="flex items-center space-x-2">
          <Icon size={20} className="text-blue-600 dark:text-blue-400" />
          <span className="text-gray-800 dark:text-gray-200">{label}</span>
        </div>
      ))}
    </div>
  )
}
