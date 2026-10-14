// Technical specifications for the 2024 BMW 330d Touring (G21 LCI, RWD, 8-speed auto, Europe).
// Factory figures; source: automobile-catalog.com (see `source` below).
// To change a value, edit it here — the Specs page is generated from this file.

export interface SpecRow {
  label: string;
  value: string;
  /** Optional secondary line, e.g. imperial units or rpm */
  note?: string;
}

export interface SpecGroup {
  id: string;
  title: string;
  intro?: string;
  rows: SpecRow[];
}

export const source = {
  name: 'automobile-catalog.com',
  url: 'https://www.automobile-catalog.com/car/2024/3085415/bmw_330d_touring.html',
};

/** Exterior dimensions in mm, used by the blueprint drawing */
export const dimensions = {
  length: 4713,
  width: 1827,
  widthMirrors: 2068,
  height: 1440,
  wheelbase: 2851,
  // From BMW's official G21 dimension drawing (pre-LCI; LCI shares the platform)
  overhangRear: 1059,
  trackFront: 1579,
  trackRear: 1569,
};

/** Headline numbers shown big at the top of the Specs page */
export const highlights = [
  { value: '286', unit: 'PS', label: '210 kW @ 4,000 rpm' },
  { value: '650', unit: 'Nm', label: '@ 1,500–2,500 rpm' },
  { value: '5.5', unit: 's', label: '0–100 km/h' },
  { value: '250', unit: 'km/h', label: 'Top speed, limited' },
  { value: '5.3', unit: 'l/100', label: 'WLTP combined' },
];

export const groups: SpecGroup[] = [
  {
    id: 'overview',
    title: 'Overview',
    rows: [
      { label: 'Model', value: 'BMW 330d Touring' },
      { label: 'Chassis', value: 'G21 LCI', note: '3 Series Touring, phase II' },
      { label: 'Production period', value: 'July 2022 – May 2024' },
      { label: 'Built in', value: 'Germany' },
      { label: 'Body', value: '5-door estate (Touring)' },
      { label: 'Drive', value: 'Rear-wheel drive' },
      { label: 'Segment', value: 'D · compact executive' },
      { label: 'Paint', value: 'Alpine White' },
      { label: 'Package', value: 'M Sport' },
    ],
  },
  {
    id: 'engine',
    title: 'Engine',
    intro: 'B57 three-litre straight-six diesel with two-stage turbocharging.',
    rows: [
      { label: 'Engine code', value: 'B57D30' },
      { label: 'Layout', value: 'Inline 6, DOHC, 4 valves per cylinder' },
      { label: 'Displacement', value: '2,993 cc', note: '182.8 cu in' },
      { label: 'Max. power', value: '210 kW / 286 PS', note: 'at 4,000 rpm · 282 hp' },
      { label: 'Max. torque', value: '650 Nm', note: 'at 1,500–2,500 rpm · 479 lb-ft' },
      { label: 'Aspiration', value: 'Two-stage twin turbo', note: 'Variable-geometry low-pressure + fixed high-pressure turbo, intercooled' },
      { label: 'Fuel injection', value: 'Common rail, 2,700 bar', note: 'Piezo injectors' },
      { label: 'Emissions control', value: 'Oxidation catalyst, DPF, SCR' },
      { label: 'Emissions standard', value: 'Euro 6d' },
    ],
  },
  {
    id: 'hybrid',
    title: 'Mild hybrid',
    intro: '48-volt starter-generator that boosts acceleration and smooths start-stop.',
    rows: [
      { label: 'System', value: '48 V mild hybrid (MHEV)' },
      { label: 'Electric boost', value: '8 kW / 11 PS' },
      { label: 'Battery capacity', value: '0.52 kWh' },
      { label: 'Start-stop', value: 'Yes, MHEV start-stop' },
    ],
  },
  {
    id: 'drivetrain',
    title: 'Transmission',
    rows: [
      { label: 'Gearbox', value: 'ZF 8HP' },
      { label: 'Type', value: '8-speed automatic', note: 'Steptronic manual shift mode' },
      { label: 'Driven wheels', value: 'Rear' },
    ],
  },
  {
    id: 'performance',
    title: 'Performance',
    intro: 'Factory-claimed figures.',
    rows: [
      { label: '0–100 km/h', value: '5.5 s' },
      { label: '0–60 mph', value: '5.2 s' },
      { label: 'Top speed', value: '250 km/h', note: '155 mph · electronically limited' },
      { label: 'Power-to-weight', value: '118.6 W/kg', note: 'At curb weight · 6.2 kg/PS' },
    ],
  },
  {
    id: 'efficiency',
    title: 'Consumption & emissions',
    rows: [
      { label: 'Fuel consumption', value: '5.3 l/100 km', note: 'WLTP combined · 53.3 mpg (UK)' },
      { label: 'CO₂ emissions', value: '140 g/km', note: 'WLTP' },
      { label: 'Fuel tank', value: '59 l' },
      { label: 'Theoretical range', value: '≈ 1,110 km', note: 'Full tank at WLTP combined' },
    ],
  },
  {
    id: 'dimensions',
    title: 'Dimensions',
    rows: [
      { label: 'Length', value: '4,713 mm' },
      { label: 'Width', value: '1,827 mm', note: '2,068 mm including mirrors' },
      { label: 'Height', value: '1,440 mm' },
      { label: 'Wheelbase', value: '2,851 mm' },
      { label: 'Track, front / rear', value: '1,579 / 1,569 mm', note: 'BMW dimension drawing' },
      { label: 'Overhang, front / rear', value: '803 / 1,059 mm', note: 'Front derived from length, wheelbase and rear' },
      { label: 'Drag coefficient', value: 'Cd 0.28' },
    ],
  },
  {
    id: 'weights',
    title: 'Weights & towing',
    rows: [
      { label: 'Curb weight', value: '1,770 kg', note: 'Without driver' },
      { label: 'Max. permitted weight', value: '2,345 kg' },
      { label: 'Payload', value: '575 kg' },
      { label: 'Towing, braked', value: '1,800 kg' },
      { label: 'Towing, unbraked', value: '750 kg' },
    ],
  },
  {
    id: 'chassis',
    title: 'Brakes & wheels',
    rows: [
      { label: 'Front brakes', value: 'Ventilated discs' },
      { label: 'Rear brakes', value: 'Ventilated discs' },
      { label: 'Summer wheels', value: 'BMW Individual Style 793', note: '19″ staggered set' },
      { label: 'Summer tyres, front', value: '225/40 R19' },
      { label: 'Summer tyres, rear', value: '255/35 R19' },
      { label: 'Winter wheels', value: 'BMW Style 780', note: '18″ square set' },
      { label: 'Winter tyres', value: '225/45 R18', note: 'Michelin Pilot Alpin 5, all four' },
    ],
  },
  {
    id: 'capacities',
    title: 'Capacities',
    intro: 'Handy for servicing.',
    rows: [
      { label: 'Engine oil', value: '7.0 l', note: 'Incl. filter change' },
      { label: 'Fuel tank', value: '59 l' },
    ],
  },
];
