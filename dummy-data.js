const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'Programming for everyone',
    description:
      'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
    location: 'Somestreet 25, 12345 San Somewhereo',
    date: '2021-05-12',
    image: 'images/ShuaKoozie.jpg',
    isFeatured: false,
  },
  {
    id: 'e2',
    title: 'FrogeKoozie',
    description:
      "NFT tokenized Froge Koozies backed by digital",
    location: '$PEG $TEE $KEK',
    date: '2021-05-30',
    image: 'images/FROGE.png',
    isFeatured: true,
  },
  {
    id: 'e3',
    title: 'BrightSV NFT',
    description:
      'BrightSV NFT tied to physical shirt',
    location: '$TEE $PEG',
    date: '2022-04-10',
    image: 'images/BSVblack.png',
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}