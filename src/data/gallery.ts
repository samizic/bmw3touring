// Gallery chapters in chronological order. Photos live in src/assets/gallery/ (metadata already stripped;
// see README "Adding gallery photos"). Each caption doubles as the image's alt text.

export const header = {
  file: 'pxl_20260419_062622748-v2.jpg',
  alt: 'The Alpine White 330d Touring on a hillside road above an old coastal town, with the Adriatic behind',
  focus: '30% 72%',
};

export interface GalleryChapter {
  id: string;
  title: string;
  when: string;
  photos: { file: string; caption: string }[];
}

export const chapters: GalleryChapter[] = [
  {
    id: 'first-drive',
    title: 'First drive',
    when: 'February 2024',
    photos: [
      { file: 'pxl_20240217_110217598.jpg', caption: 'Rear three-quarter on a mountain road' },
      { file: 'pxl_20240217_110554476.jpg', caption: 'Side profile against the limestone cliffs' },
      { file: 'pxl_20240217_124125531.jpg', caption: 'Front three-quarter above a glassy Adriatic' },
      { file: 'coast-road-pullout-16x9.jpg', caption: 'Coast road pull-out, sea and sky' },
      { file: 'pxl_20240217_124235496.jpg', caption: 'Rear three-quarter on the coastal headland' },
      { file: 'pxl_20240217_124252537.jpg', caption: 'Tailgate and L-shaped lights facing the sea' },
      { file: 'pxl_20240217_124411502.jpg', caption: 'Heading down the coast road' },
      { file: 'pxl_20240217_124546370.jpg', caption: '330d badge and tail light, low angle' },
    ],
  },
  {
    id: 'mountain-fog',
    title: 'Fog in the mountains',
    when: 'March 2024',
    photos: [
      { file: 'pxl_20240310_062647944-mp-v1.jpg', caption: 'Morning fog among the pines' },
      { file: 'pxl_20240310_062647944-mp-v2.jpg', caption: 'Headlights on, mountain road in the mist' },
    ],
  },
  {
    id: 'detailing',
    title: 'Fresh out of detailing',
    when: 'April 2024',
    photos: [
      { file: 'img-20240403-wa0023.jpg', caption: 'PPF and ceramic coating done, ready for collection' },
      { file: 'img-20240403-wa0025.jpg', caption: 'Bonnet, kidneys and adaptive LED headlights under the studio lights' },
    ],
  },
  {
    id: 'cockpit',
    title: 'Cockpit',
    when: '2024 – 2026',
    photos: [
      { file: 'pxl_20241105_081517620.jpg', caption: 'Curved display and M Sport steering wheel' },
      { file: 'pxl_20260222_134917977.jpg', caption: 'Driver’s seat, ambient lighting and all-weather mats' },
    ],
  },
  {
    id: 'winter',
    title: 'Winter',
    when: 'December 2025 – January 2026',
    photos: [
      { file: 'pxl_20251210_145538384-v3.jpg', caption: 'Fuel stop on a wet December afternoon' },
      { file: 'pxl_20251210_185505934-v2.jpg', caption: '19″ Style 793 wheel' },
      { file: 'pxl_20251210_185550847-v3.jpg', caption: 'Adaptive LED headlight and M Sport front bumper' },
      { file: 'pxl_20260111_120155606.jpg', caption: 'Ski trip: roof box on, snowy peaks behind' },
      { file: 'pxl_20260129_070223115-v3.jpg', caption: 'Frosty morning at the pump' },
    ],
  },
  {
    id: 'panoramic-views',
    title: 'Panoramic views',
    when: 'April 2026',
    photos: [
      { file: 'pxl_20260419_062622748-v2.jpg', caption: 'Old town and the islands below' },
      { file: 'pxl_20260419_062656851-v2.jpg', caption: 'Side profile over the bay' },
      { file: 'pxl_20260419_062800518-v2.jpg', caption: 'Front three-quarter, sea on the horizon' },
    ],
  },
  {
    id: 'city',
    title: 'Street parked',
    when: 'Summer set',
    photos: [
      { file: 'street-side-profile.jpg', caption: 'Side profile on the 19″ Style 793 summer wheels, old town street' },
    ],
  },
  {
    id: 'garage',
    title: 'Underground',
    when: 'October 2026',
    photos: [
      { file: 'garage-pair-rear.jpg', caption: 'Touring and saloon, rear three-quarter' },
      { file: 'garage-pair-side.jpg', caption: 'Side by side with a G20 3 Series saloon in an underground car park' },
      { file: 'garage-rear-wheel.jpg', caption: 'Roofline, tail light and 19″ Style 793 wheel' },
    ],
  },
];
