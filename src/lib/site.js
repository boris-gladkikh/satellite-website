// Site-wide links and contact details.
// Entries marked TODO are placeholders from the design handoff.

export const BANDCAMP_URL = 'https://satelliterespond.bandcamp.com/';

export const socials = [
  { label: 'Spotify', url: '#' }, // TODO: Spotify artist page
  { label: 'Apple Music', url: '#' }, // TODO: Apple Music artist page
  { label: 'Bandcamp', url: BANDCAMP_URL },
  { label: 'SoundCloud', url: '#' }, // TODO
  { label: 'Instagram', url: '#' }, // TODO
  { label: 'Facebook', url: 'https://www.facebook.com/SatelliteRespond' },
  { label: 'X', url: 'https://x.com/SateliteRespond' },
];

export const contactEmails = {
  booking: 'booking@satelliterespond.com', // TODO: placeholder
  press: 'press@satelliterespond.com', // TODO: placeholder
};

// Contact-form topics, and which inbox each one routes to.
export const contactTopics = [
  { value: 'booking', label: 'Booking', routeTo: contactEmails.booking },
  { value: 'press', label: 'Press', routeTo: contactEmails.press },
  { value: 'other', label: 'Other', routeTo: contactEmails.press },
];
