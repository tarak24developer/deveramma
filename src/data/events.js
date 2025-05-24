export const events = [
  {
    id: 'annual-festival',
    title: 'Annual Temple Festival',
    date: 'June 15-21, 2025',
    time: 'All Day',
    image: '/images/temple/temple-front.jpg',
    description: 'Join us for our 7-day annual temple festival with special poojas, cultural programs, processions, and more. This is the most important celebration of the year at our temple.',
    longDescription: `The Annual Temple Festival is our most significant celebration honoring Goddess Deveramma. The festival spans seven days filled with religious ceremonies, cultural performances, and community gatherings.

Each day begins with special rituals at dawn and continues throughout the day with various events. The highlight is the chariot procession on the sixth day when the deity is taken around the temple complex in an ornate chariot, blessing devotees and the surroundings.

The festival concludes with a grand ceremony featuring traditional music, dance performances, and a community feast. Thousands of devotees from across the region attend this auspicious event to receive divine blessings and participate in the celebrations.`,
    category: 'major',
  },
  {
    id: 'full-moon-pooja',
    title: 'Full Moon Pooja',
    date: 'May 25, 2025',
    time: '6:00 PM - 8:30 PM',
    image: '/images/pooja/special-pooja.jpg',
    description: 'Special rituals and offerings during the full moon night. Join us for this divine experience as we perform sacred ceremonies under the moonlight.',
    longDescription: `The Full Moon Pooja is a special monthly ritual performed during the full moon night when the divine energies are believed to be at their peak. This ceremony includes the recitation of sacred mantras, special abhishekam (bathing ritual) for the deity, and floral offerings.

During this auspicious time, devotees can participate in the rituals and receive blessings for prosperity, peace, and spiritual growth. The temple is illuminated with traditional oil lamps creating a mystical ambiance that enhances the spiritual experience.

We welcome all devotees to join this serene and powerful ceremony. Prasadam (consecrated food) will be distributed after the pooja.`,
    category: 'recurring',
  },
  {
    id: 'youth-cultural-fest',
    title: 'Youth Cultural Festival',
    date: 'July 5-6, 2025',
    time: '10:00 AM - 6:00 PM',
    image: '/images/temple/temple-inside.jpg',
    description: 'A vibrant festival showcasing the talents of young devotees through music, dance, art, and religious discourse competitions.',
    longDescription: `The Youth Cultural Festival is an annual event that provides a platform for young devotees to showcase their talents while connecting with their cultural and spiritual roots. The festival features competitions in classical dance, devotional music, religious discourse, rangoli (decorative art), and traditional crafts.

This two-day event aims to foster cultural awareness and spiritual values among the younger generation. Experts in various art forms judge the competitions, and winners receive blessings from the temple priests along with prizes.

Beyond competitions, the festival includes workshops on temple architecture, mythology, and traditional arts to deepen participants' understanding of our rich cultural heritage. We invite all youth to participate and celebrate our traditions.`,
    category: 'community',
  },
  {
    id: 'navratri-celebrations',
    title: 'Navratri Celebrations',
    date: 'October 3-12, 2025',
    time: 'Various Times',
    image: '/images/pooja/weekly-pooja.jpg',
    description: 'Nine nights of celebration honoring the divine feminine energy through special poojas, music, dance, and decorations.',
    longDescription: `Navratri (nine nights) is a significant festival dedicated to the worship of the divine mother in her various forms. At Deveramma Temple, these nine nights are celebrated with special decorations, elaborate rituals, and cultural programs.

Each night features a special pooja dedicated to a different form of the goddess, followed by devotional music and dance performances. The temple premises are adorned with colorful decorations, flower arrangements, and traditional art forms creating a festive atmosphere.

On the ninth day, we perform a special homa (fire ritual) followed by Kanya Puja (honoring young girls as embodiments of the divine mother). The celebration concludes with Vijayadashami celebrations on the tenth day, symbolizing the triumph of good over evil.`,
    category: 'major',
  }
];

export const eventCategories = {
  all: 'All Events',
  major: 'Major Festivals',
  recurring: 'Monthly & Weekly Events',
  community: 'Community Programs',
};

// Function to sort events by date
export function sortEventsByDate(events) {
  return [...events].sort((a, b) => {
    const dateA = new Date(a.date.split('-')[0]);
    const dateB = new Date(b.date.split('-')[0]);
    return dateA - dateB;
  });
}

// Function to filter events by category
export function filterEventsByCategory(events, category) {
  if (category === 'all') return events;
  return events.filter(event => event.category === category);
}

// Function to find event by ID
export function findEventById(id) {
  return events.find(event => event.id === id);
}