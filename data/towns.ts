/**
 * Urban's local coverage: towns within ~40 miles of Birmingham, plus Wales.
 *
 * DELIBERATELY DIFFERENT FROM THE SIBLING SITE'S TOWN PAGES.
 *
 * Another site in this portfolio covers many of the same Midlands towns from a
 * shutter-repair angle. These pages lead with commercial fit-out, office
 * partitioning and shopfront installation — Urban's actual specialism, and one
 * neither sibling offers. Same towns, different buyer, different search.
 *
 * If you are editing this file: do not reach for the other site's wording. The
 * contamination test will catch branding, but it will not catch a paraphrase,
 * and a paraphrase is what put 574 pages out of the index in August.
 *
 * Every council name and location fact here is verifiable. Nothing invented.
 */

export interface Town {
  slug: string;
  name: string;
  council: string;
  region: string;
  /** Approximate road miles from Birmingham. Null for Welsh coverage areas. */
  miles: number | null;
  /** Commercial districts, business parks and retail areas. */
  districts: string[];
  /** What Urban is typically asked for here. Specific, no filler. */
  focus: string;
  near: string[];
}

export const towns: Town[] = [
  // ── Black Country & West Midlands ──────────────────────────────────────────
  { slug: 'dudley', name: 'Dudley', council: 'Dudley Metropolitan Borough Council', region: 'West Midlands', miles: 10,
    districts: ['Dudley town centre', 'Castle Gate', 'Waterfront Business Park'],
    focus: 'Most of our Dudley work is at Castle Gate and the Waterfront — office suites being subdivided for smaller tenants, which means glazed partitioning, doorsets and acoustic separation rather than retail frontage. The Waterfront in particular has a lot of 1990s open-plan floorplate that landlords are now splitting to let.',
    near: ['brierley-hill', 'halesowen', 'stourbridge'] },
  { slug: 'walsall', name: 'Walsall', council: 'Walsall Council', region: 'West Midlands', miles: 10,
    districts: ['Walsall town centre', 'Darlaston', 'Walsall Enterprise Park'],
    focus: 'Walsall splits cleanly between town-centre retail frontage and the enterprise parks out towards Darlaston, where the work is trade-counter frontages and office fit-out inside industrial shells. Those shell fit-outs are a particular strength — partitioning a warehouse mezzanine into offices is a different job from fitting out a conventional floorplate.',
    near: ['west-bromwich', 'wednesbury', 'cannock'] },
  { slug: 'west-bromwich', name: 'West Bromwich', council: 'Sandwell Metropolitan Borough Council', region: 'West Midlands', miles: 7,
    districts: ['High Street', 'New Square', 'Oldbury Road corridor'],
    focus: 'The High Street has a long run of independent retail where a new frontage usually follows a change of tenant. Off it, the Oldbury Road corridor carries a lot of light industrial and trade units where we fit aluminium entrance screens and internal office partitioning in the same visit.',
    near: ['smethwick', 'wednesbury', 'oldbury'] },
  { slug: 'wolverhampton', name: 'Wolverhampton', council: 'City of Wolverhampton Council', region: 'West Midlands', miles: 15,
    districts: ['Dudley Street', 'Mander Centre', 'i54 South Staffordshire'],
    focus: 'Wolverhampton gives us two very different jobs. The city centre is conservation-constrained retail frontage. i54 is modern commercial development where we are fitting glazed office partitioning, meeting-room enclosures and acoustic doorsets to a specification written by the occupier rather than the council.',
    near: ['bilston', 'cannock', 'telford'] },
  { slug: 'solihull', name: 'Solihull', council: 'Solihull Metropolitan Borough Council', region: 'West Midlands', miles: 10,
    districts: ['Solihull town centre', 'Blythe Valley Park', 'Birmingham Business Park'],
    focus: 'Blythe Valley and Birmingham Business Park are the two biggest sources of partitioning work in the region. These are Grade A office floorplates where tenants reconfigure on three-to-five-year cycles, so demountable aluminium systems that can be struck and reinstated matter more than a permanent build.',
    near: ['sutton-coldfield', 'coventry', 'redditch'] },
  { slug: 'sutton-coldfield', name: 'Sutton Coldfield', council: 'Birmingham City Council', region: 'West Midlands', miles: 8,
    districts: ['The Parade', 'Mere Green', 'Boldmere', 'Langley'],
    focus: 'Mere Green and Boldmere are affluent independent parades where the frontage is a marketing decision — frameless glass, slim sightlines, considered signage. We also do a steady amount of clinic and consulting-room partitioning here, where acoustic performance is a confidentiality requirement rather than a comfort one.',
    near: ['solihull', 'tamworth', 'lichfield'] },
  { slug: 'halesowen', name: 'Halesowen', council: 'Dudley Metropolitan Borough Council', region: 'West Midlands', miles: 9,
    districts: ['Queensway Mall', 'Great Cornbow', 'Mucklow Hill'],
    focus: 'Mucklow Hill Trading Estate is where most of our Halesowen work sits — office fit-out inside industrial units, trade counter frontages, and partitioning that has to work around existing racking and services rather than an empty shell.',
    near: ['stourbridge', 'oldbury', 'dudley'] },
  { slug: 'stourbridge', name: 'Stourbridge', council: 'Dudley Metropolitan Borough Council', region: 'West Midlands', miles: 13,
    districts: ['High Street', 'Ryemarket', 'Stourbridge Industrial Estate'],
    focus: 'Stourbridge has a better-preserved high street than most of the Black Country and the council protects it, so retail frontages here need a sympathetic specification rather than a standard aluminium system. The industrial estate is ordinary commercial work with none of those constraints.',
    near: ['halesowen', 'kidderminster', 'brierley-hill'] },
  { slug: 'smethwick', name: 'Smethwick', council: 'Sandwell Metropolitan Borough Council', region: 'West Midlands', miles: 4,
    districts: ['Bearwood Road', 'Cape Hill', 'Middlemore Industrial Estate'],
    focus: 'Our nearest town. Bearwood Road is a dense independent parade with frequent tenant turnover, and Middlemore is light industrial. Being four miles out means we can survey in the morning and come back with a quote the same week rather than batching the trip.',
    near: ['oldbury', 'west-bromwich', 'birmingham-business-park'] },
  { slug: 'oldbury', name: 'Oldbury', council: 'Sandwell Metropolitan Borough Council', region: 'West Midlands', miles: 6,
    districts: ['Halesowen Street', 'Oldbury town centre', 'Tat Bank Road'],
    focus: 'Heavily industrial, and the commercial frontage work reflects that — aluminium entrance screens on trade units, personnel doorsets, and office partitioning inside warehouse shells where the ceiling is high and the services are exposed.',
    near: ['smethwick', 'west-bromwich', 'halesowen'] },
  { slug: 'brierley-hill', name: 'Brierley Hill', council: 'Dudley Metropolitan Borough Council', region: 'West Midlands', miles: 12,
    districts: ['Merry Hill', 'Waterfront Business Park', 'High Street'],
    focus: 'Waterfront Business Park is the draw here — a large office campus where suites get subdivided and reconfigured regularly. Glazed partitioning, acoustic meeting rooms and demountable systems that survive a churn are the bulk of it. Merry Hill retail runs to centre management rules and night working.',
    near: ['dudley', 'stourbridge', 'halesowen'] },
  { slug: 'wednesbury', name: 'Wednesbury', council: 'Sandwell Metropolitan Borough Council', region: 'West Midlands', miles: 8,
    districts: ['Union Street', 'Black Country New Road', 'Axletree Way'],
    focus: 'Mostly trade and distribution units along the Black Country New Road corridor. The work is entrance screens, personnel doors and internal office partitioning within larger sheds — specified for durability and compliance rather than appearance.',
    near: ['west-bromwich', 'walsall', 'tipton'] },
  { slug: 'tipton', name: 'Tipton', council: 'Sandwell Metropolitan Borough Council', region: 'West Midlands', miles: 8,
    districts: ['Owen Street', 'Great Bridge', 'Tipton Trading Estate'],
    focus: 'Great Bridge has the busier retail parade; the trading estates carry the commercial work. Office partitioning inside industrial units is common here — a mezzanine or a corner of a warehouse turned into offices, which means working around existing structure rather than to a clean grid.',
    near: ['oldbury', 'wednesbury', 'dudley'] },

  // ── Staffordshire, Warwickshire, Worcestershire ────────────────────────────
  { slug: 'coventry', name: 'Coventry', council: 'Coventry City Council', region: 'West Midlands', miles: 20,
    districts: ['Broadgate', 'Coventry Business Park', 'Ansty Park', 'Friargate'],
    focus: 'Friargate and Coventry Business Park are the partitioning work — new-build and refurbished office floorplates being fitted out for occupation. Ansty Park brings technical occupiers whose requirements run to acoustic ratings and fire compartmentation rather than appearance alone.',
    near: ['nuneaton', 'rugby', 'solihull'] },
  { slug: 'cannock', name: 'Cannock', council: 'Cannock Chase District Council', region: 'Staffordshire', miles: 20,
    districts: ['Cannock town centre', 'Kingswood Lakeside', 'Hawks Green'],
    focus: 'Kingswood Lakeside is a large distribution park and most of what we do there is office fit-out inside warehouse units — reception screens, meeting rooms, acoustic separation from the operational floor. The town centre is conventional retail frontage.',
    near: ['walsall', 'lichfield', 'wolverhampton'] },
  { slug: 'lichfield', name: 'Lichfield', council: 'Lichfield District Council', region: 'Staffordshire', miles: 20,
    districts: ['Lichfield city centre', 'Fradley Park', 'Three Spires'],
    focus: 'The city centre is heavily listed and shopfront work there needs listed building consent and a sympathetic specification. Fradley Park is the opposite — modern distribution and office units where partitioning and entrance screens are specified to an occupier brief with no heritage constraint at all.',
    near: ['tamworth', 'cannock', 'sutton-coldfield'] },
  { slug: 'tamworth', name: 'Tamworth', council: 'Tamworth Borough Council', region: 'Staffordshire', miles: 16,
    districts: ['Ankerside', 'George Street', 'Tamworth Business Park'],
    focus: 'Tamworth Business Park and the Relay Park corridor carry the commercial work — office suites, trade counters and the partitioning that goes with them. The town centre splits between Ankerside, which is landlord-governed, and George Street, which is ordinary planning.',
    near: ['lichfield', 'sutton-coldfield', 'nuneaton'] },
  { slug: 'nuneaton', name: 'Nuneaton', council: 'Nuneaton and Bedworth Borough Council', region: 'Warwickshire', miles: 22,
    districts: ['Abbey Street', 'Bermuda Park', 'Attleborough Fields'],
    focus: 'Bermuda Park and Attleborough Fields are the active areas — distribution and light industrial where we fit entrance screens and office partitioning inside the units. The town centre has high churn and a lot of unit refits following a change of tenant.',
    near: ['coventry', 'tamworth', 'rugby'] },
  { slug: 'redditch', name: 'Redditch', council: 'Redditch Borough Council', region: 'Worcestershire', miles: 15,
    districts: ['Kingfisher Centre', 'Washford', 'Moons Moat'],
    focus: 'Washford and Moons Moat industrial estates generate steady office fit-out work — partitioning, entrance screens and doorsets inside manufacturing and distribution units. Kingfisher retail runs to centre fit-out rules and night access.',
    near: ['bromsgrove', 'solihull', 'worcester'] },
  { slug: 'bromsgrove', name: 'Bromsgrove', council: 'Bromsgrove District Council', region: 'Worcestershire', miles: 14,
    districts: ['Bromsgrove High Street', 'Buntsford Park', 'Harris Business Park'],
    focus: 'Buntsford and Harris Business Park carry most of the commercial work — small-to-mid office suites where glazed partitioning and acoustic meeting rooms are the typical brief. The High Street is a conservation area with small, tightly-packed units.',
    near: ['redditch', 'kidderminster', 'worcester'] },
  { slug: 'kidderminster', name: 'Kidderminster', council: 'Wyre Forest District Council', region: 'Worcestershire', miles: 18,
    districts: ['Vicar Street', 'Weavers Wharf', 'Hoo Farm Industrial Estate'],
    focus: 'The carpet-industry building stock leaves unusually wide ground-floor openings in the older units, which suits a glazed frontage and complicates a standard shutter. Hoo Farm and the surrounding estates bring conventional commercial fit-out.',
    near: ['stourbridge', 'bromsgrove', 'worcester'] },
  { slug: 'worcester', name: 'Worcester', council: 'Worcester City Council', region: 'Worcestershire', miles: 28,
    districts: ['Friar Street', 'CrownGate', 'Blackpole', 'Shrub Hill'],
    focus: 'Friar Street is medieval timber-framed and listed — specialist work with listed building consent. Blackpole and the Shrub Hill regeneration area are ordinary commercial: office fit-out, partitioning, aluminium entrance screens.',
    near: ['kidderminster', 'bromsgrove', 'redditch'] },

  // ── Wales ─────────────────────────────────────────────────────────────────
  { slug: 'bridgend', name: 'Bridgend', council: 'Bridgend County Borough Council', region: 'Wales', miles: null,
    districts: ['Bridgend town centre', 'Brackla', 'Bridgend Industrial Estate'],
    focus: 'Bridgend Industrial Estate is one of the larger employment sites in South Wales and most of what we are asked for there is office fit-out inside industrial shells plus aluminium entrance screens. Welsh building regulations are devolved and we work to those rather than the English approved documents.',
    near: ['cardiff-area', 'port-talbot', 'barry'] },
  { slug: 'barry', name: 'Barry', council: 'Vale of Glamorgan Council', region: 'Wales', miles: null,
    districts: ['Holton Road', 'Barry Waterfront', 'Atlantic Trading Estate'],
    focus: 'The Waterfront regeneration has brought new commercial units alongside the older Holton Road retail. Atlantic Trading Estate is conventional industrial. Coastal exposure matters here — weather performance to BS 6375 is worth specifying properly rather than assuming.',
    near: ['cardiff-area', 'bridgend'] },
  { slug: 'merthyr-tydfil', name: 'Merthyr Tydfil', council: 'Merthyr Tydfil County Borough Council', region: 'Wales', miles: null,
    districts: ['High Street', 'Cyfarthfa Retail Park', 'Pentrebach'],
    focus: 'Pentrebach and the Hoover Strip carry the commercial and industrial work. The town centre has significant heritage building stock from the ironworks era, and shopfront alterations there are assessed with that in mind.',
    near: ['pontypridd', 'caerphilly'] },
  { slug: 'pontypridd', name: 'Pontypridd', council: 'Rhondda Cynon Taf County Borough Council', region: 'Wales', miles: null,
    districts: ['Taff Street', 'Treforest Industrial Estate'],
    focus: 'Treforest Industrial Estate is among the oldest in Wales and still heavily occupied — office fit-out inside industrial units is the steady work. Taff Street is a conservation area with a traditional retail frontage character the council expects respected.',
    near: ['merthyr-tydfil', 'caerphilly'] },
  { slug: 'caerphilly', name: 'Caerphilly', council: 'Caerphilly County Borough Council', region: 'Wales', miles: null,
    districts: ['Caerphilly town centre', 'Castle Court', 'Oakdale Business Park'],
    focus: 'Oakdale Business Park and the surrounding estates bring office and light industrial fit-out. The town centre sits in the shadow of the castle and heritage considerations apply to frontages facing it.',
    near: ['pontypridd', 'cwmbran', 'merthyr-tydfil'] },
  { slug: 'cwmbran', name: 'Cwmbran', council: 'Torfaen County Borough Council', region: 'Wales', miles: null,
    districts: ['Cwmbran Centre', 'Llantarnam Industrial Park', 'Springvale'],
    focus: 'Cwmbran is a new town built around a covered centre, so retail work runs to centre management rules and night access. Llantarnam Industrial Park is where the partitioning and entrance screen work sits.',
    near: ['caerphilly', 'newport-area'] },
  { slug: 'llanelli', name: 'Llanelli', council: 'Carmarthenshire County Council', region: 'Wales', miles: null,
    districts: ['Stepney Street', 'Trostre Retail Park', 'Dafen Industrial Estate'],
    focus: 'Trostre and Dafen carry the commercial work — retail park frontages and industrial office fit-out. Stepney Street is a traditional town-centre parade. Carmarthenshire County Council determines consent and Welsh building regulations apply.',
    near: ['swansea-area', 'neath'] },
  { slug: 'neath', name: 'Neath', council: 'Neath Port Talbot Council', region: 'Wales', miles: null,
    districts: ['Neath town centre', 'Baglan Industrial Park', 'Milland Road'],
    focus: 'Baglan Industrial Park is the main commercial draw, with office fit-out inside larger industrial units. The town centre is a conventional Welsh market town frontage with conservation designation in parts.',
    near: ['port-talbot', 'swansea-area', 'llanelli'] },
  { slug: 'port-talbot', name: 'Port Talbot', council: 'Neath Port Talbot Council', region: 'Wales', miles: null,
    districts: ['Station Road', 'Baglan Bay', 'Port Talbot Docks'],
    focus: 'Heavily industrial, and the specification reflects it — entrance screens and doorsets on units in a corrosive coastal and industrial atmosphere, where powder coat specification and fixing choice matter more than they do inland.',
    near: ['neath', 'bridgend'] },
  { slug: 'wrexham-town', name: 'Wrexham', council: 'Wrexham County Borough Council', region: 'Wales', miles: null,
    districts: ['Hope Street', 'Eagles Meadow', 'Wrexham Industrial Estate'],
    focus: 'Wrexham Industrial Estate is one of the largest in Europe and a substantial share of North Wales commercial fit-out passes through it — office suites inside industrial shells, entrance screens, acoustic partitioning away from the production floor.',
    near: ['rhyl', 'colwyn-bay'] },
  { slug: 'rhyl', name: 'Rhyl', council: 'Denbighshire County Council', region: 'Wales', miles: null,
    districts: ['High Street', 'Rhyl Waterfront', 'Marsh Road'],
    focus: 'Coastal retail with the exposure that implies — weather performance and corrosion resistance are genuine specification decisions here rather than boilerplate. The waterfront regeneration has brought newer commercial units alongside the older High Street stock.',
    near: ['colwyn-bay', 'wrexham-town'] },
  { slug: 'colwyn-bay', name: 'Colwyn Bay', council: 'Conwy County Borough Council', region: 'Wales', miles: null,
    districts: ['Station Road', 'Colwyn Bay seafront', 'Mochdre Business Park'],
    focus: 'Mochdre Business Park carries the commercial and office fit-out work for the North Wales coast. The seafront and Station Road retail is conservation-sensitive in parts and exposed to salt air throughout.',
    near: ['rhyl', 'wrexham-town'] },
];

export const townBySlug: Record<string, Town> = Object.fromEntries(
  towns.map((t) => [t.slug, t]),
);
