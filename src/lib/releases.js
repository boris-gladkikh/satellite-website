// Discography, newest first. Pulled from https://satelliterespond.bandcamp.com/
// `bandcampTrackId` (or `bandcampAlbumId`) drives the embedded player on /music.

export const releases = [
  {
    slug: 'august-falls',
    title: 'August Falls',
    type: 'Single',
    year: 2020,
    cover: '/img/august-falls-cover.jpg',
    bandcampTrackId: '4021380489',
    url: 'https://satelliterespond.bandcamp.com/track/august-falls',
  },
  {
    slug: 'medusa',
    title: 'Medusa',
    type: 'Single',
    year: 2020,
    cover: '/img/SR-MEDUSA-COVER.jpg',
    bandcampTrackId: '1571288429',
    url: 'https://satelliterespond.bandcamp.com/track/medusa',
    duration: 285, // 4:45
    audio: '/audio/medusa.mp3', // TODO: add the file to public/audio/
    streams: [
      { label: 'Spotify', url: 'https://open.spotify.com/album/0GrGoapuXsN9in1XWZmkNG' },
      { label: 'Apple Music', url: '#' }, // TODO
      { label: 'Bandcamp', url: 'https://satelliterespond.bandcamp.com/track/medusa' },
      { label: 'SoundCloud', url: '#' }, // TODO
    ],
  },
  {
    slug: 'fugue-state',
    title: 'Fugue State',
    type: 'Single',
    year: 2020,
    cover: '/img/SATELLITE-RESPOND-FUGUE-STATE-COVER.jpg',
    bandcampTrackId: '1717839127',
    url: 'https://satelliterespond.bandcamp.com/track/fugue-state',
  },
  {
    slug: 'i-can-be-dr-ke-edit',
    title: 'I Can Be (Dr*ke edit)',
    type: 'Edit',
    year: 2012,
    cover: '/img/i-can-be-cover.jpg',
    bandcampTrackId: '3629044363',
    url: 'https://satelliterespond.bandcamp.com/track/i-can-be-dr-ke-edit',
  },
];

// The release featured in the Home spotlight.
export const spotlight = releases.find((r) => r.slug === 'medusa');

export function bandcampEmbedUrl(release) {
  const id = release.bandcampAlbumId
    ? `album=${release.bandcampAlbumId}`
    : `track=${release.bandcampTrackId}`;
  return `https://bandcamp.com/EmbeddedPlayer/${id}/size=small/bgcol=000000/linkcol=ffffff/transparent=true/`;
}
