import type { BlogPost } from './blogs'

const author = {
  id: '01',
  name: 'Ananya Rao',
  title: 'Content Writer',
  image: '/images/authors/01.jpg',
}
const reviewedBy = {
  id: '07',
  name: 'Lakshmi Nair',
  title: 'Quality Reviewer',
  image: '/images/authors/07.jpg',
}
const verifiedBy = {
  id: '11',
  name: 'Pooja Desai',
  title: 'Service Guide Author',
  image: '/images/authors/11.jpg',
}

function note(
  partial: Omit<BlogPost, 'author' | 'reviewedBy' | 'verifiedBy' | 'readTime'> & { readTime?: string },
): BlogPost {
  return {
    author,
    reviewedBy,
    verifiedBy,
    readTime: partial.readTime ?? '11 min read',
    ...partial,
  }
}

const NAP =
  '1/91, 27th Main Rd, 2nd Sector, Sector 2, HSR Layout, Bengaluru, Karnataka 560102'
const PHONE = '+91 99010 21555'

/** Bangalore field notes. Last-merge wins over platform/CMS rows, including the Austin copy. */
export const BANGALORE_NOTES: BlogPost[] = [
  note({
    slug: 'water-purifier-maintenance-tips-for-longevity',
    title: 'Water purifier maintenance in Bangalore: TDS before a sticker',
    excerpt:
      'Filter life follows inlet TDS and tank grit, not a brochure month. Service Booking reads the kitchen inlet in Bengaluru before swapping stages.',
    category: 'Water Purifier',
    coverImage: '/images/water-purifier.jpg',
    coverImageAlt: 'RO service visit in Bangalore',
    publishedAt: '2026-11-18',
    updatedAt: '2026-11-18',
    keywords: ['water purifier maintenance Bangalore', 'RO filter change', 'Kent Aquaguard service'],
    relatedServiceSlug: 'water-purifier',
    content: [
      {
        type: 'paragraph',
        text: `Service Booking maintains RO and UV units from the published HSR Layout office: ${NAP}. Call ${PHONE}. Independent doorstep service — not an OEM authorised centre.`,
      },
      { type: 'heading', text: 'Why a calendar month is the wrong clock' },
      {
        type: 'paragraph',
        text:
          'Bangalore supply mixes Cauvery, borewell and tanker water. Sediment loads faster on tanker days. Carbon saturates when chlorine taste returns. The membrane lasts longer if those two stages are actually working. A 90-day sticker is not a diagnosis.',
      },
      { type: 'heading', text: 'What we check on the visit' },
      {
        type: 'list',
        items: [
          'Inlet TDS and product TDS on the same ticket',
          'Colour of the sediment cartridge',
          'Reject flow',
          'Tray leaks and a booster that has been running dry',
        ],
      },
      {
        type: 'paragraph',
        text:
          'Book [water purifier service](/services/water-purifier). Coverage includes [HSR Layout](/areas/hsr-layout), [Koramangala](/areas/koramangala), [Whitefield](/areas/whitefield) and the rest of the [areas](/areas) list. Related: [Kent RO filter change](/blogs/kent-ro-service-in-bangalore-filter-change-same-day-repair) and [RO no water from the tap](/blogs/ro-no-water-from-the-tap-bangalore).',
      },
      { type: 'heading', text: 'Questions' },
      {
        type: 'paragraph',
        text:
          'Do we change every filter because a box said so? No. Is Austin in this article? No — this desk is Bengaluru only. [Contact](/contact) with the brand and the last TDS you have.',
      },
    ],
  }),
  note({
    slug: 'kent-ro-service-in-bangalore-filter-change-same-day-repair',
    title: 'Kent RO service in Bangalore: filter change and same-day repair',
    excerpt:
      'Kent housings we open in Bengaluru get a TDS reading before a cartridge swap. Same-day slots follow the published areas list.',
    category: 'Water Purifier',
    coverImage: '/images/water-purifier.jpg',
    coverImageAlt: 'Kent RO filter change in Bangalore',
    publishedAt: '2026-11-18',
    updatedAt: '2026-11-18',
    keywords: ['Kent RO service Bangalore', 'Kent filter change', 'same-day RO repair'],
    relatedServiceSlug: 'water-purifier',
    content: [
      {
        type: 'paragraph',
        text: `Kent RO service from Service Booking is doorstep in Bangalore. Office ${NAP}. ${PHONE}. We do not claim Kent company authorisation.`,
      },
      { type: 'heading', text: 'Filter change is a reading, not a kit' },
      {
        type: 'paragraph',
        text:
          'Sediment and carbon come off first if they are packed. The membrane stays if product TDS still holds. A “complete kit” that leaves product TDS near inlet TDS did not finish the job — see [water purifier maintenance](/blogs/water-purifier-maintenance-tips-for-longevity).',
      },
      { type: 'heading', text: 'Where the van goes' },
      {
        type: 'paragraph',
        text:
          '[Koramangala](/areas/koramangala), [HSR Layout](/areas/hsr-layout), [Whitefield](/areas/whitefield), [Marathahalli](/areas/marathahalli) and the published [areas](/areas). Same-day when a slot is open. Book [water purifier](/services/water-purifier) or [contact](/contact).',
      },
      { type: 'heading', text: 'If the tap is dry or the pump screams' },
      {
        type: 'paragraph',
        text:
          'Start with [RO no water from the tap](/blogs/ro-no-water-from-the-tap-bangalore). Close the inlet if the tray is wet. Do not keep a dry booster running overnight.',
      },
    ],
  }),
  note({
    slug: 'faber-chimney-repair-bangalore-oil-drip-suction',
    title: 'Faber chimney repair in Bangalore: oil drip and weak suction',
    excerpt:
      'Oil on the hob and smoke that hangs are packed grease or a kinked duct. Service Booking diagnoses before a motor SKU.',
    category: 'Chimney',
    coverImage: '/images/chimney.jpg',
    coverImageAlt: 'Faber chimney repair in a Bangalore kitchen',
    publishedAt: '2026-11-18',
    updatedAt: '2026-11-18',
    keywords: ['Faber chimney repair Bangalore', 'chimney oil drip', 'weak chimney suction'],
    relatedServiceSlug: 'chimney',
    content: [
      {
        type: 'paragraph',
        text: `Chimney work is booked from [chimney service](/services/chimney). Independent. ${NAP}. ${PHONE}. Not an OEM authorised Faber centre.`,
      },
      { type: 'heading', text: 'Seven faults a mesh wipe will not fix' },
      {
        type: 'list',
        items: [
          'Packed squirrel-cage fan',
          'Full oil cup',
          'Greasy high-rise riser',
          'Crushed flexible pipe',
          'Motor that hums with no pull',
          'Switch dead with a live socket',
          'Rattle after someone bent the outlet',
        ],
      },
      {
        type: 'paragraph',
        text:
          'Local pages include [HSR Layout chimney](/areas/hsr-layout/chimney) and [Koramangala chimney](/areas/koramangala/chimney). Hob on the same counter: [hob not igniting](/blogs/hob-not-igniting-bangalore) and [hob service](/services/hob).',
      },
      { type: 'heading', text: 'Questions' },
      {
        type: 'paragraph',
        text:
          'Does auto-clean replace a booked clean? No. Is a yearly sticker enough for daily tadka? Rarely. Related [noisy chimney](/blogs/noisy-chimney-after-duct-work-bangalore).',
      },
    ],
  }),
  note({
    slug: 'hob-not-igniting-bangalore',
    title: 'Hob not igniting in Bangalore: click, spark and one dead burner',
    excerpt:
      'A failed spark is often a wet igniter. Spark with no flame is often a blocked cap. Neither starts with a new hob from a listing.',
    category: 'Hob',
    coverImage: '/images/hob.jpg',
    coverImageAlt: 'Gas hob ignition check in Bangalore',
    publishedAt: '2026-11-18',
    updatedAt: '2026-11-18',
    keywords: ['hob not igniting Bangalore', 'gas hob no spark', 'Faber Elica hob repair'],
    relatedServiceSlug: 'hob',
    content: [
      {
        type: 'paragraph',
        text: `Book [hob service](/services/hob). Gas smell: close the tap and call ${PHONE}. Office ${NAP}.`,
      },
      { type: 'heading', text: 'Click with no spark versus spark with no flame' },
      {
        type: 'paragraph',
        text:
          'No spark: dry the electrode after mopping, confirm ignition power. Spark but no flame: cap seating or blocked ports. One burner dark and the rest fine is local — not a full cooktop. Whole hob dead is supply or ignition box.',
      },
      { type: 'heading', text: 'Same kitchen, oily hood' },
      {
        type: 'paragraph',
        text:
          'Add [chimney service](/services/chimney) on the same booking. Notes: [Faber chimney oil drip](/blogs/faber-chimney-repair-bangalore-oil-drip-suction). Areas: [Jayanagar](/areas/jayanagar), [Indiranagar](/areas/indiranagar), [HSR Layout](/areas/hsr-layout).',
      },
    ],
  }),
  note({
    slug: 'ac-not-cooling-bangalore',
    title: 'AC not cooling in Bangalore: filters, gas and a blocked drain',
    excerpt:
      'Warm air from a split AC is often a packed filter or a drain line before a compressor story. Service Booking checks those on the visit.',
    category: 'AC',
    coverImage: '/images/ac.jpg',
    coverImageAlt: 'Split AC service in Bangalore',
    publishedAt: '2026-11-18',
    updatedAt: '2026-11-18',
    keywords: ['AC not cooling Bangalore', 'split AC service', 'AC gas filling'],
    relatedServiceSlug: 'ac',
    content: [
      {
        type: 'paragraph',
        text: `[AC service](/services/ac) from HSR Layout. ${PHONE}. Independent — not an OEM shopfront.`,
      },
      { type: 'heading', text: 'What we open first' },
      {
        type: 'list',
        items: [
          'Indoor filter and coil',
          'Drain pipe that is pushing water back',
          'Outdoor coil packed with dust',
          'Gas only after those paths are honest',
        ],
      },
      {
        type: 'paragraph',
        text:
          'Towers in [Whitefield](/areas/whitefield) and [Marathahalli](/areas/marathahalli) load outdoor coils faster. Book from [areas](/areas). Related appliance on the same call: [refrigerator not cooling](/blogs/refrigerator-not-cooling-bangalore).',
      },
    ],
  }),
  note({
    slug: 'washing-machine-not-draining-bangalore',
    title: 'Washing machine not draining in Bangalore',
    excerpt:
      'A drum that stays full is often a lint trap or a kinked drain hose, not an automatic main-board swap.',
    category: 'Washing Machine',
    coverImage: '/images/washing-machine.jpg',
    coverImageAlt: 'Washing machine drain service in Bangalore',
    publishedAt: '2026-11-18',
    updatedAt: '2026-11-18',
    keywords: ['washing machine not draining Bangalore', 'washer repair'],
    relatedServiceSlug: 'washing-machine',
    content: [
      {
        type: 'paragraph',
        text: `Book [washing machine service](/services/washing-machine). ${NAP}. ${PHONE}.`,
      },
      { type: 'heading', text: 'Checks before a spare' },
      {
        type: 'paragraph',
        text:
          'Filter trap, drain hose height, pump impeller packed with coins or lint. Error codes help; they do not replace opening the trap. Independent repair on the published menu.',
      },
      { type: 'heading', text: 'Related' },
      {
        type: 'paragraph',
        text:
          '[Dishwasher not draining](/blogs/dishwasher-not-draining-bangalore) is a different pump. Areas include [HSR Layout](/areas/hsr-layout) and [JP Nagar](/areas/jp-nagar).',
      },
    ],
  }),
  note({
    slug: 'refrigerator-not-cooling-bangalore',
    title: 'Refrigerator not cooling in Bangalore',
    excerpt:
      'A warm fridge is often a dirty condenser or a door gasket before a sealed-system story. We diagnose on site.',
    category: 'Refrigerator',
    coverImage: '/images/refrigerator.jpg',
    coverImageAlt: 'Refrigerator cooling check in Bangalore',
    publishedAt: '2026-11-18',
    updatedAt: '2026-11-18',
    keywords: ['refrigerator not cooling Bangalore', 'fridge repair'],
    relatedServiceSlug: 'refrigerator',
    content: [
      {
        type: 'paragraph',
        text: `[Refrigerator service](/services/refrigerator). Office ${NAP}. ${PHONE}.`,
      },
      { type: 'heading', text: 'What you can check safely' },
      {
        type: 'paragraph',
        text:
          'Door close, thermostat not at off, vents inside not blocked with boxes. Do not pierce the sealed system. We check condenser dust and fans on the visit.',
      },
      {
        type: 'paragraph',
        text:
          'Coverage: [areas](/areas). Same home, warm room AC: [AC not cooling](/blogs/ac-not-cooling-bangalore).',
      },
    ],
  }),
  note({
    slug: 'dishwasher-not-draining-bangalore',
    title: 'Dishwasher not draining in Bangalore',
    excerpt:
      'Standing water after a cycle is often a filter mat or a high-loop drain, not a new machine from a listing.',
    category: 'Dishwasher',
    coverImage: '/images/dishwasher.jpg',
    coverImageAlt: 'Dishwasher drain service in Bangalore',
    publishedAt: '2026-11-18',
    updatedAt: '2026-11-18',
    keywords: ['dishwasher not draining Bangalore', 'dishwasher repair'],
    relatedServiceSlug: 'dishwasher',
    content: [
      {
        type: 'paragraph',
        text: `[Dishwasher service](/services/dishwasher). ${PHONE}. Independent desk in HSR Layout.`,
      },
      { type: 'heading', text: 'Filter, loop, then pump' },
      {
        type: 'paragraph',
        text:
          'Clean the filter mat. Confirm the drain hose is not crushed behind the unit. Pump last. Related washer note: [washing machine not draining](/blogs/washing-machine-not-draining-bangalore).',
      },
    ],
  }),
  note({
    slug: 'ro-no-water-from-the-tap-bangalore',
    title: 'RO no water from the tap in Bangalore',
    excerpt:
      'A dry RO tap is often a closed inlet, packed sediment, or a booster that ran dry — not an automatic new purifier.',
    category: 'Water Purifier',
    coverImage: '/images/water-purifier.jpg',
    coverImageAlt: 'Dry RO tap diagnosis in Bangalore',
    publishedAt: '2026-11-18',
    updatedAt: '2026-11-18',
    keywords: ['RO no water', 'water purifier not working Bangalore'],
    relatedServiceSlug: 'water-purifier',
    content: [
      {
        type: 'paragraph',
        text: `Close the inlet if the tray is wet. Book [water purifier repair](/services/water-purifier). ${NAP}.`,
      },
      { type: 'heading', text: 'Order of checks' },
      {
        type: 'list',
        items: [
          'Inlet tap and tank level',
          'Sediment colour',
          'Low-pressure switch',
          'Booster that already ran dry',
          'Membrane so packed that product and reject stall',
        ],
      },
      {
        type: 'paragraph',
        text:
          'Longer maintenance note: [water purifier maintenance](/blogs/water-purifier-maintenance-tips-for-longevity). Kent-specific: [Kent RO service](/blogs/kent-ro-service-in-bangalore-filter-change-same-day-repair).',
      },
    ],
  }),
  note({
    slug: 'noisy-chimney-after-duct-work-bangalore',
    title: 'Noisy chimney after duct work in Bangalore',
    excerpt:
      'A howl that started the week a pipe was pushed is often a kink or a rattle, not a generic motor from chat.',
    category: 'Chimney',
    coverImage: '/images/chimney.jpg',
    coverImageAlt: 'Noisy chimney after duct work in Bangalore',
    publishedAt: '2026-11-18',
    updatedAt: '2026-11-18',
    keywords: ['noisy chimney Bangalore', 'chimney vibration after installation'],
    relatedServiceSlug: 'chimney',
    content: [
      {
        type: 'paragraph',
        text: `[Chimney service](/services/chimney) from Service Booking. ${PHONE}. ${NAP}.`,
      },
      { type: 'heading', text: 'Name the sound' },
      {
        type: 'paragraph',
        text:
          'Rattle: filter, lamp, glass. Grind: bearings. Howl after a bent outlet: turbulence. Packed fan: clean before a spare. See [Faber chimney oil drip and suction](/blogs/faber-chimney-repair-bangalore-oil-drip-suction).',
      },
      {
        type: 'paragraph',
        text: 'Local: [HSR Layout](/areas/hsr-layout/chimney), [Koramangala](/areas/koramangala/chimney). [Contact](/contact).',
      },
    ],
  }),
]
