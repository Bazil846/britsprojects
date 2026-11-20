// Site copy from the BCPL web brief ("BCPL Web Matter"), kept word for word where the brief gives it.

export const structuralCore = [
  {
    id: 'extensions', photo: '/photos/build-progress-14.webp', alt: 'Extension under construction with new brick and blockwork walls and scaffolding',
    icon: 'extension',
    title: 'Extensions',
    text: 'Structural construction for single and double-storey extensions, including demolition, groundworks, foundations, drainage, walls, floors, steelwork and roofing.',
  },
  {
    id: 'loft-conversions', photo: '/photos/loft-construction-4.webp', alt: 'Loft conversion structure with new steel beams and timber framing',
    icon: 'loft',
    title: 'Loft Conversions',
    text: 'Structural alterations, floor strengthening, steel installation, dormer construction and roof modifications to create the framework for your new living space.',
  },
  {
    id: 'internal-alterations', photo: '/photos/build-progress-4.webp', alt: 'Steel beam installed over a new opening in blockwork',
    icon: 'wall',
    title: 'Internal Structural Alterations',
    text: 'Load-bearing wall removal, new structural openings, temporary support and installation of specified beams, columns and frames.',
  },
  {
    id: 'new-builds', photo: '/photos/scaffolded-build-2.webp', alt: 'Multi-storey residential build under scaffolding',
    icon: 'newbuild',
    title: 'New Build Structures',
    text: 'Coordinated structural packages covering groundworks, foundations, drainage, structural walls, floors, steelwork and roof construction.',
  },
] as const;

/** The trades in a structural package, in build order. */
export const structuralTrades = [
  {
    id: 'demolition', photo: '/photos/groundworks-4.webp', alt: 'Excavated ground being prepared beside a house before building work',
    icon: 'demolition',
    title: 'Demolition & Site Preparation',
    text: 'Demolition, strip-out, site clearance and excavation to prepare your property for the planned works.',
  },
  {
    id: 'foundations', photo: '/photos/groundworks-1.webp', alt: 'Foundation trench with steel reinforcement and formwork',
    icon: 'foundation',
    title: 'Foundations & Piling',
    text: 'Excavation and concrete foundation construction, with specialist piling arrangements where required by the structural design.',
  },
  {
    id: 'drainage', photo: '/photos/drainage-1.webp', alt: 'Underground drainage pipe being laid beside new extension footings and blockwork', position: '100% 70%',
    icon: 'drainage',
    title: 'Drainage Works',
    text: 'Underground drainage installation and alterations, including pipework, inspection chambers, diversions and connections to suit your project.',
  },
  {
    id: 'masonry', photo: '/photos/build-progress-9.webp', alt: 'New brickwork and blockwork walls rising on an extension',
    icon: 'brick',
    title: 'Brickwork & Blockwork',
    text: 'Construction of external walls, internal load-bearing walls and supporting masonry for extensions, alterations and new homes.',
  },
  {
    id: 'steelwork', photo: '/photos/loft-construction-2.webp', alt: 'Red-painted structural steel frame inside a roof under construction',
    icon: 'steel',
    title: 'Structural Steelwork',
    text: 'Installation of specified steel beams, columns and frames to support new openings, additional floors and changes to your home’s layout.',
  },
  {
    id: 'concrete-floors', photo: '/photos/concrete-1.webp', alt: 'Concrete being poured over insulation for a ground floor slab',
    icon: 'slab',
    title: 'Solid Concrete Ground Floors',
    text: 'Ground floor construction, including sub-base preparation, compacted hardcore, damp-proof membranes, insulation and concrete slabs to the specified floor build-up.',
  },
  {
    id: 'beam-block', photo: '/photos/beam-block-floor.jpg', alt: 'Precast concrete floor beams laid across new masonry walls for a beam and block floor', credit: { text: 'Photo: Oast House Archive, CC BY-SA 2.0', url: 'https://www.geograph.org.uk/photo/4523943' },
    icon: 'beamblock',
    title: 'Beam & Block Floors',
    text: 'Installation of suspended beam and block flooring, including supporting masonry, concrete beams, infill blocks, ventilation provisions and insulation.',
  },
  {
    id: 'screeding', photo: '/photos/ufh-3.webp', alt: 'Floor screed being laid over underfloor heating pipes',
    icon: 'screed',
    title: 'Floor Screeding',
    text: 'Screeding to provide a level surface ready for floor finishes, including installation over underfloor heating systems where specified.',
  },
  {
    id: 'roofing', photo: '/photos/large-loft-3.webp', alt: 'Timber roof structure being framed',
    icon: 'roof',
    title: 'Roofing Structures',
    text: 'Roof construction and structural roof alterations for extensions, loft conversions and new residential buildings.',
  },
] as const;

export const oversight = [
  {
    id: 'drawings',
    icon: 'drawingsCheck',
    title: 'We Check the Work Against the Drawings',
    text: [
      'We review accessible work at agreed stages against the architectural drawings, structural engineer’s design and specifications. We look for visible defects, unauthorised changes and potential shortcuts, particularly in critical structural work.',
    ],
  },
  {
    id: 'planning',
    icon: 'planning',
    title: 'We Monitor Planning Conditions',
    text: [
      'We review relevant planning permission conditions and coordinate with your builder and design team to help keep construction aligned with the approved scheme.',
    ],
  },
  {
    id: 'party-wall',
    icon: 'partywall',
    title: 'We Monitor Party Wall Requirements',
    text: [
      'Where a party wall agreement or award applies, we monitor the works against its relevant requirements and coordinate with the appointed party wall surveyor when needed.',
      'We also encourage clear communication with neighbours, helping address concerns and minimise avoidable disruption throughout the project.',
    ],
  },
  {
    id: 'payments',
    icon: 'payment',
    title: 'We Review Progress Before You Pay',
    text: [
      'Before recommending stage payments, we assess the work completed against the agreed payment schedule, review visible workmanship and check relevant Building Control inspection records where applicable.',
      'Our aim is to help you pay for work that has been properly completed, with required inspections addressed and outstanding issues clearly identified.',
    ],
  },
  {
    id: 'team',
    icon: 'team',
    title: 'We Coordinate the Professional Team',
    text: [
      'Our team includes architects, structural engineers and party wall surveyors, bringing design, structural and construction expertise together when your project needs it.',
      'We coordinate with your builder, professional advisers and Building Control to resolve queries and keep decisions moving.',
    ],
  },
  {
    id: 'programme',
    icon: 'programme',
    title: 'We Manage Programme, Budget & Quality',
    text: [
      'We monitor progress against the agreed programme, review costs and proposed variations, and flag issues that could affect completion.',
      'Our goal is to help your project finish on time, within the agreed budget and to a high standard of workmanship.',
    ],
  },
  {
    id: 'updates',
    icon: 'updates',
    title: 'We Keep You Informed',
    text: [
      'Receive clear updates on progress, upcoming decisions, costs and concerns—so you can feel more confident about how your home is being built.',
    ],
  },
] as const;

export const oversightNote =
  'Site visits and reviews are agreed to suit your project. Our oversight supports the responsibilities of your builder, designers, appointed surveyors and Building Control; it does not replace their inspections or approvals.';

export const whyChoose = [
  { icon: 'shield', title: 'Structural construction expertise', text: 'Focused attention on the elements that give your home its strength.' },
  { icon: 'scope', title: 'Two ways to support your build', text: 'Appoint us for structural works or to manage a separate builder on your behalf.' },
  { icon: 'team', title: 'A coordinated professional team', text: 'Architects, structural engineers and party wall surveyors working alongside construction expertise.' },
  { icon: 'updates', title: 'Clear scope and communication', text: 'Understand what is included, how work is progressing and which decisions need your attention.' },
  { icon: 'cost', title: 'Careful cost oversight', text: 'Review progress, payments and variations with experienced support.' },
  { icon: 'home', title: 'A focus on your family’s future', text: 'Quality construction and thoughtful management for the home you are investing in.' },
] as const;

/** The four promises from the brief's introduction. */
export const focus = ['Sound construction', 'Controlled costs', 'Reliable progress', 'Quality workmanship'];

export const structuralFaqs = [
  {
    q: 'Can you work from my architect’s drawings and engineer’s design?',
    a: 'Yes. We build to the architectural drawings, the structural engineer’s design and the agreed specification. If something on site does not match the design, we raise it with your designers before the work goes further.',
  },
  {
    q: 'Do I need a structural engineer?',
    a: 'Most structural work, such as removing a load-bearing wall, forming a new opening, installing steel beams, building extension foundations or strengthening a loft floor, needs an engineer’s design and calculations, and Building Control will ask to see them. If you do not have an engineer yet, our professional team includes structural engineers.',
  },
  {
    q: 'What is included in a structural package?',
    a: 'It depends on the project. A package can include demolition, excavation, foundations, drainage, brickwork and blockwork, steelwork, floors, screeding and the roof structure. Your quotation lists exactly what is included, so you know where our work ends and the finishing trades begin.',
  },
  {
    q: 'How do Building Control inspections fit in?',
    a: 'Building Control inspects key stages such as foundations, drainage and steelwork. We plan the work around those inspections and coordinate with the inspector so each stage is ready to be seen before it is covered up.',
  },
  {
    q: 'Can the same team finish the rest of my project?',
    a: 'Our focus is the structure. If you would like one team to take on the whole build, from structure through to finishes, our sister company Brits Construction Services builds complete projects.',
  },
];

export const oversightFaqs = [
  {
    q: 'What does independent oversight involve?',
    a: 'We act on your side during the build. We check accessible work against the drawings and the engineer’s design at agreed stages, monitor planning conditions and party wall requirements, review progress before you make stage payments, coordinate the professional team and keep you updated on progress, costs and decisions.',
  },
  {
    q: 'Does your oversight replace Building Control or my builder’s responsibilities?',
    a: 'No. Your builder stays responsible for the work, and Building Control, your designers and any appointed surveyors keep their own inspections and approvals. Our oversight supports them and helps you make informed decisions.',
  },
  {
    q: 'My build has already started. Can you still help?',
    a: 'Yes. We can review the work that is accessible when we start, check it against the drawings and set up stage reviews from that point. Work that has already been covered cannot always be seen, so the earlier we are involved, the more we can check.',
  },
  {
    q: 'How often do you visit the site?',
    a: 'Site visits and reviews are agreed to suit your project, usually around the key structural stages and before each stage payment.',
  },
  {
    q: 'How is project management priced?',
    a: 'It depends on the size of the project and how many stage reviews you need. We give you a written quotation once we have seen the drawings, the programme and the payment schedule.',
  },
  {
    q: 'Will you deal with my builder directly?',
    a: 'Yes. We ask the technical questions, raise concerns with your builder and coordinate with your professional team, while the decisions stay with you.',
  },
];

/** What to send us, for the About and contact pages. */
export const documents = [
  'Architectural drawings',
  'Structural engineer’s design and calculations',
  'Specification',
  'Planning permission and its conditions',
  'Party wall agreement or award, if there is one',
  'Your builder’s programme and payment schedule (for project management)',
];

/** Real site photos for the homepage strip (from Brits group sites). */
export const sitePhotos = [
  { src: '/photos/groundworks-3.webp', alt: 'Foundation trenches with reinforcement cages and formwork on a residential site', caption: 'Foundations' },
  { src: '/photos/loft-construction-2.webp', alt: 'Red-painted structural steel frame inside a roof under construction', caption: 'Structural steelwork' },
  { src: '/photos/concrete-1.webp', alt: 'Concrete being poured over insulation for a ground floor slab', caption: 'Concrete ground floor' },
  { src: '/photos/large-loft-3.webp', alt: 'Timber roof structure being framed', caption: 'Roof structure' },
];

/** Accreditations and memberships shown on the site (logos in public/logos). */
export const accreditations = [
  { name: 'CHAS', src: '/logos/chas-logo.svg' },
  { name: 'LABC', src: '/logos/labc-logo.jpg' },
  { name: 'NABC', src: '/logos/nabc-logo.jpg' },
  { name: 'CIOB', src: '/logos/ciob-logo.svg' },
  { name: 'CIAT', src: '/logos/ciat-logo.png' },
  { name: 'NIG insurance', src: '/logos/nig-logo.png' },
];
