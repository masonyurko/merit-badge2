export default async function handler(request, res) {
  const roster = [
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/6/6e/Jalen_Hurts_11-14-22_%28cropped%29.jpg',
      name: 'Jalen Hurts',
      position: 'Quarterback',
      statsLabel: 'Career Stats',
      top: 'MVP',
    },
    {
      image:
        'https://cdn.profootballrumors.com/files/2023/03/USATSI_19998966-scaled.jpg',
      name: 'Miles Sanders',
      position: 'Running Back',
      statsLabel: 'Career Stats',
      top: 'RIP',
    },
  ];
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  res.json(roster);
}
