/**
 * Garage door pages: /garage-door-repairs and /garage-door-installation.
 *
 * DRAFT, 15 Oct 2026. Urban has not confirmed that it repairs or fits garage
 * doors. Until `garageDoors.published` is true both routes return 404, are
 * left out of the sitemap, and nothing links to them. Set URBAN_GARAGE_DRAFT=on
 * on a preview deployment to read them; production ignores it.
 *
 * These are hub pages only. They must never be added to data/services.ts:
 * that would generate a city page for every city (see CLAUDE.md, `cityPages`).
 *
 * Rules for this copy: no prices, response times or maker names until the
 * owner supplies them; no instructions for springs, cables or motor
 * internals; door types shown only from the confirmed lists below.
 */

export type GarageDoorType = 'roller' | 'sectional' | 'up-and-over' | 'side-hinged';

export const garageDoors = {
  published: false,
  /** Strike any type Urban does not repair. */
  repairTypes: ['roller', 'sectional', 'up-and-over', 'side-hinged'] as GarageDoorType[],
  /** Strike any type Urban does not supply and fit. */
  installTypes: ['roller', 'sectional', 'up-and-over', 'side-hinged'] as GarageDoorType[],
  /** Converting a manual door to electric. False removes that section. */
  automation: true,
  /** Everything the owner must answer before `published` goes true. */
  owed: [
    'Does Urban repair garage doors, install them, or both? For homes, businesses or both?',
    'Which door types: roller, sectional, up-and-over, side-hinged?',
    'Who carries out the work: Urban’s own fitters or a partner firm? If a partner, the pages must say so.',
    'Area covered for garage door repairs, and for installations.',
    'Is there any emergency or same-day garage door repair? If not, the pages must not imply one.',
    'Does Urban motorise existing manual doors?',
    'Which manufacturers’ doors Urban supplies (name one only if Urban buys direct).',
    'Typical prices: spring, cable and motor repairs; single and double doors installed.',
    'Is servicing sold as a separate visit? What is checked and what does it cost?',
    'Photos of real garage door jobs, with town and month.',
  ],
};

/** Lets the owner read the drafts on a preview deployment. Never on production. */
export const garageLive = garageDoors.published || (process.env.URBAN_GARAGE_DRAFT === 'on' && process.env.VERCEL_ENV !== 'production');

export const typeLabel: Record<GarageDoorType, string> = {
  roller: 'Roller',
  sectional: 'Sectional',
  'up-and-over': 'Up-and-Over',
  'side-hinged': 'Side-Hinged',
};

export function typeList(types: GarageDoorType[]): string {
  const words = types.map((t) => typeLabel[t].toLowerCase());
  return words.length < 2 ? words.join('') : `${words.slice(0, -1).join(', ')} and ${words.at(-1)}`;
}

export interface GarageCopy {
  path: '/garage-door-repairs' | '/garage-door-installation';
  h1: string;
  metaTitle: string;
  /** `{types}` is replaced with the confirmed types. */
  metaDescription: string;
  intro: string;
  typeHeading: string;
  types: Record<GarageDoorType, { headline: string; detail: string }>;
  blocks: { id?: string; heading: string; paragraphs: string[]; points?: string[] }[];
  process: { title: string; detail: string }[];
  costDrivers: string[];
  outOfScope: string[];
  faqs: { question: string; answer: string }[];
  related: { href: string; label: string }[];
}

export const repairsCopy: GarageCopy = {
  path: '/garage-door-repairs',
  h1: 'Garage Door Repairs',
  metaTitle: 'Garage Door Repairs & Spring Replacement',
  metaDescription: 'Repairs to {types} garage doors: springs, cables, off-track doors, motors and remotes. Priced in writing first.',
  intro:
    'Repairs to {types} garage doors. The common call-outs are a snapped spring, a cable off its drum, a door that has left its track, and electric operators that hum but will not move. We diagnose from your photos first where we can, then confirm the fault on site and price the repair in writing before any work starts.',
  typeHeading: 'Door Types and Their Usual Faults',
  types: {
    roller: {
      headline: 'Curtain, guides and operator',
      detail: 'Damaged or dislodged laths, guide rails knocked out of line, a bottom slat bent by a bumper, and tubular motors or limit settings that have failed.',
    },
    sectional: {
      headline: 'Torsion springs, cables and track',
      detail: 'The torsion spring on the shaft above the opening is the most common failure, followed by lifting cables, worn track rollers and loose intermediate hinges.',
    },
    'up-and-over': {
      headline: 'Gear and pivots',
      detail: 'Canopy and retractable doors run on tension springs or counterbalance cables. Pivot arms wear, springs fatigue, and the locking handle and rods seize over time.',
    },
    'side-hinged': {
      headline: 'Leaves, hinges and bolts',
      detail: 'Leaves drop on worn hinges and drag on the threshold. Drop bolts and locks then miss their keeps, and timber leaves swell and bind.',
    },
  },
  blocks: [
    {
      heading: 'First Steps When a Garage Door Fails',
      paragraphs: [
        'Stop operating the door. If it is powered, isolate it at the plug or fused spur. Keep people and vehicles out from under it.',
        'A sudden loud crack usually means a spring has fractured. The door then carries its full weight on the remaining parts and can fall. Leave it where it is.',
      ],
      points: [
        'Photograph the door from outside and, if safe, from inside',
        'Photograph the operator label (make and model) on an electric door',
        'Note whether it is jammed open, jammed shut or part-way',
      ],
    },
    {
      heading: 'Why Springs and Cables Are a Fitter’s Job',
      paragraphs: [
        'Counterbalance springs store enough energy to lift the whole door, and the cables carry that load. Releasing or re-tensioning them without the correct winding bars and a matched replacement is how serious injuries happen. We do not provide DIY instructions for this work.',
      ],
    },
    {
      heading: 'Electric Operator Faults',
      paragraphs: [
        'Before booking, it is worth confirming the simple things: power at the socket or spur, a fresh battery in the handset, the manual release not engaged, and nothing obstructing the safety photocells.',
        'If those are fine, the fault is likely in the operator, its control board or the door’s balance. After any repair to a powered door we test the safety reversal on contact and obstruction, as BS EN 12453 requires.',
      ],
    },
    {
      heading: 'Noisy, Juddering or Off-Track Doors',
      paragraphs: [
        'Grinding and squealing point to dry or worn rollers and hinges. Juddering usually comes from an unbalanced door or a loose track bracket. A door that has left its track is unevenly loaded and should not be pushed back by hand.',
      ],
    },
    {
      id: 'servicing',
      heading: 'Servicing and Inspection',
      paragraphs: [
        'A powered door in daily use benefits from an annual inspection: balance, springs, cables, rollers, hinges, track alignment, fixings and the safety reversal test. Ask for an inspection alongside any repair visit.',
      ],
    },
    {
      heading: 'Repair or Replace?',
      paragraphs: [
        'Repair when the door leaf is sound and parts are available. Replacement starts to make sense when panels are corroded through or distorted, when parts are obsolete, or when the same failures keep returning. We will give you both options where both are realistic.',
      ],
    },
  ],
  process: [
    { title: 'Photos', detail: 'Send photos of the door and the operator label, with the postcode.' },
    { title: 'Diagnosis', detail: 'We identify the likely fault and the parts needed.' },
    { title: 'Written price', detail: 'The repair is confirmed on site and priced in writing before work.' },
    { title: 'Repair and test', detail: 'We repair, rebalance where needed and test the safety functions.' },
  ],
  costDrivers: [
    'The failed component and whether it is stocked or must be ordered',
    'Door type, width and weight, which set the spring and cable sizes',
    'The operator make, as some parts are manufacturer-only',
    'Access to the door and the working space inside the garage',
    'Travel distance to the property',
  ],
  outOfScope: [
    'DIY guidance on springs, cables or operator internals',
    'Door types not listed above',
  ],
  faqs: [
    {
      question: 'How Are Garage Door Repairs Priced?',
      answer: 'On the failed part and the door. We have not yet published typical garage door repair prices. Send photos and we will price the repair before attending.',
    },
    {
      question: 'Can you repair a garage door fitted by another company?',
      answer: 'Yes. Labels on the door, springs or operator help us identify parts before the visit.',
    },
    {
      question: 'My garage door remote has stopped working. Can it be replaced?',
      answer: 'Usually, once we know the operator make and model. A photo of the operator label and the existing handset is the quickest way.',
    },
    {
      question: 'Are parts still available for older up-and-over doors?',
      answer: 'For many, yes. Where a door is no longer supported, we will tell you before any charge and quote a replacement instead.',
    },
  ],
  related: [
    { href: '/garage-door-installation', label: 'Garage Door Installation' },
    { href: '/services/shutter-repair', label: 'Commercial Shutter Repair' },
    { href: '/services/roller-shutters', label: 'Commercial Roller Shutters' },
  ],
};

export const installationCopy: GarageCopy = {
  path: '/garage-door-installation',
  h1: 'Garage Door Installation',
  metaTitle: 'Garage Door Installation & Replacement',
  metaDescription: 'New and replacement {types} garage doors, made to measure, manual or electric, surveyed and quoted in writing.',
  intro:
    'Supply and installation of {types} garage doors, manual or electric, single or double, made to measure. Replacements follow the same route: we survey the opening, specify the door, remove the old one and install the new. Every job is surveyed first and quoted in writing.',
  typeHeading: 'Choosing a Door Type',
  types: {
    roller: {
      headline: 'Space-saving, almost always electric',
      detail: 'The curtain coils into a box above the opening, so it uses no driveway or ceiling space. Insulated aluminium laths are available. A powered roller needs a supply near the head of the opening.',
    },
    sectional: {
      headline: 'Vertical lift, insulated panels',
      detail: 'Panels lift vertically and run back on ceiling tracks, so the door never swings onto the drive. Panels are typically insulated. It needs adequate headroom above the opening and clear ceiling depth for the tracks.',
    },
    'up-and-over': {
      headline: 'Simple and manual-friendly',
      detail: 'A single leaf tilts out and up into the roof space. Few moving parts, easy to operate by hand. The leaf projects onto the drive while opening and reduces the clear height slightly.',
    },
    'side-hinged': {
      headline: 'Pedestrian access without full opening',
      detail: 'Two leaves open outwards. Either leaf can be used alone, which suits garages used as workshops or storage. Needs clear swing space in front.',
    },
  },
  blocks: [
    {
      heading: 'What We Measure at Survey',
      paragraphs: ['Garage door specification starts from the structural opening, not the old door. At survey we record:'],
      points: [
        'Opening width and height, checked for square',
        'Headroom between the top of the opening and the ceiling',
        'Side room either side, for tracks or guides',
        'Ceiling depth back into the garage',
        'Condition of the lintel, reveals and any timber sub-frame',
        'Power supply position, for electric doors',
      ],
    },
    {
      heading: 'Manual or Electric',
      paragraphs: [
        'Electric operation adds remote control and an automatic safety reverse, and it suits daily use. Manual doors are cheaper to buy and have fewer components to maintain. A manual sectional or up-and-over door can usually be motorised later if it is specified with that in mind.',
      ],
    },
    {
      id: 'automation',
      heading: 'Motorising an Existing Door',
      paragraphs: [
        'Many sectional and up-and-over doors accept a ceiling-mounted operator. The door must first be correctly balanced and running freely, otherwise the operator is overloaded and fails early. We check balance before quoting.',
      ],
    },
    {
      heading: 'Insulation',
      paragraphs: [
        'An insulated door is worth specifying for an integral garage, a garage with a room above, or one used as a workshop or gym. For a detached garage used for parking or storage, a single-skin door is usually adequate.',
      ],
    },
    {
      heading: 'Permissions and Regulations',
      paragraphs: [
        'Replacing one garage door with another on a house rarely needs planning permission. Listed buildings need listed building consent, and some estates and conservation areas restrict changes through planning conditions or Article 4 directions. Widening an opening is structural work and needs Building Regulations approval for the new lintel.',
      ],
    },
    {
      heading: 'Garage Doors and Commercial Shutters',
      paragraphs: [
        'A domestic garage door and a commercial roller shutter look similar but are specified differently. Shutters for shopfronts and units are chosen for security rating and duty cycle; garage doors for comfort, insulation and appearance as well as security. For business premises see our commercial roller shutters.',
      ],
    },
  ],
  process: [
    { title: 'Photos and sizes', detail: 'Send photos of the opening and rough dimensions.' },
    { title: 'Survey', detail: 'We measure the opening and check the structure and power.' },
    { title: 'Written quotation', detail: 'Door type, size, finish, operator and removal are itemised.' },
    { title: 'Manufacture and install', detail: 'The door is made to size, installed, tested and handed over with the manufacturer’s instructions.' },
  ],
  costDrivers: [
    'Door type and size',
    'Insulated or single-skin',
    'Manual or electric, and the number of handsets',
    'Colour, finish and any glazed panels',
    'Remedial work to the opening before installation',
    'Access and distance to site',
  ],
  outOfScope: [
    'Forming a new opening or widening an existing one (a builder’s job, with Building Regulations approval)',
    'Door types not listed above',
  ],
  faqs: [
    {
      question: 'How Is a New Garage Door Priced?',
      answer: 'On type, size, insulation, operator and finish. We have not yet published typical garage door prices. Send photos and rough sizes for a guide figure before survey.',
    },
    {
      question: 'How long does a garage door installation take?',
      answer: 'Most of the lead time is manufacture to size. Installation is usually completed in a day. We confirm the installation date when the order is placed.',
    },
    {
      question: 'Can the new door go into my existing frame?',
      answer: 'Sometimes, for an up-and-over door into a sound timber frame. Roller and sectional doors fix to the structure and normally need the old frame removed.',
    },
    {
      question: 'Do you install garage doors on commercial units?',
      answer: 'For lock-ups and small units, often. Larger loading openings are better served by a commercial roller shutter.',
    },
  ],
  related: [
    { href: '/garage-door-repairs', label: 'Garage Door Repairs' },
    { href: '/services/roller-shutters', label: 'Commercial Roller Shutters' },
    { href: '/services/security-doors', label: 'Security Doors' },
  ],
};
