// Site copy from the BCPL web brief ("BCPL Web Matter"), kept word for word where the brief gives it.

export const structuralCore = [
  {
    id: 'extensions', photo: '/photos/build-progress-14.webp', alt: 'Extension under construction with new brick and blockwork walls and scaffolding',
    icon: 'extension',
    title: 'Extensions',
    text: 'Structural construction for single and double storey extensions, including demolition, groundworks, foundations, drainage, walls, floors, steelwork and roofing.',
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
    id: 'drainage', photo: '/photos/drainage-1.jpg', alt: 'Underground drainage pipe being laid beside new extension footings',
    icon: 'drainage',
    title: 'Drainage Works',
    text: 'Underground drainage installation and alterations, including pipework, inspection chambers, diversions and connections to suit your project.',
  },
  {
    id: 'masonry', photo: '/photos/build-progress-9.webp', alt: 'New brickwork and blockwork walls rising on an extension',
    icon: 'brick',
    title: 'Brickwork & Blockwork',
    text: 'Construction of external walls, internal load bearing walls and supporting masonry for extensions, alterations and new homes.',
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
      'Receive clear updates on progress, upcoming decisions, costs and concerns, so you can feel more confident about how your home is being built.',
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

/** Detail for each structural project type page (/structural-works/<id>). */
export const projectTypes = [
  {
    id: 'extensions',
    nav: 'Extensions',
    title: 'Structural Work for Extensions',
    pill: 'Single and double storey extensions',
    lead: 'Rear, side and wraparound extensions built from the ground up to a watertight shell, to your architect’s drawings and your engineer’s design.',
    hero: '/photos/ext-construction-3.webp',
    heroAlt: 'Rear extension shell with new blockwork walls, a steel beam and timber roof joists',
    heroPosition: '50% 55%',
    caption: 'Extension shell with steel and roof joists',
    intro:
      'An extension is only as good as the structure beneath it. We take your project from breaking ground to a watertight shell: foundations, drainage, floors, walls, steelwork and the roof structure, ready for your finishing trades or your main contractor.',
    includes: ['demolition', 'foundations', 'drainage', 'masonry', 'steelwork', 'concrete-floors', 'beam-block', 'roofing'],
    stages: [
      { title: 'Site set up and demolition', text: 'Protection for the house and neighbours, then any existing structure taken down and the ground cleared.' },
      { title: 'Excavation and foundations', text: 'Trenches dug to the engineer’s depth, inspected by Building Control, then concreted.' },
      { title: 'Drainage', text: 'Existing drains diverted around the footprint and new runs laid for the new layout.' },
      { title: 'Ground floor', text: 'A solid concrete slab or a beam and block floor, to the specified build up.' },
      { title: 'Walls', text: 'Brick and block walls built up from the damp proof course, with openings formed.' },
      { title: 'Steelwork', text: 'Steel beams and columns installed to the engineer’s design, ready for inspection.' },
      { title: 'Roof structure', text: 'Roof joists or rafters in and the shell made watertight.' },
    ],
    notes: [
      'Building Control inspects the foundations, drainage and steelwork before they are covered.',
      'Building on or near the boundary may need a party wall notice and agreement.',
      'Public sewers under the footprint can need a build over agreement from the water company.',
      'Steel beams need your structural engineer’s calculations before they can be ordered.',
    ],
    gallery: [
      { src: '/photos/groundworks-3.webp', alt: 'Foundation trenches with reinforcement cages and formwork', caption: 'Foundations' },
      { src: '/photos/build-progress-1.webp', alt: 'New concrete floor slab on a damp proof membrane inside new brickwork', caption: 'Floor slab' },
      { src: '/photos/build-progress-9.webp', alt: 'New brickwork and blockwork walls rising on an extension', caption: 'Walls' },
      { src: '/photos/build-progress-17.webp', alt: 'Steel beams and new timber joists spanning brickwork walls', caption: 'Steels and roof' },
    ],
    faqs: [
      {
        q: 'Do you build the whole extension or only the structure?',
        a: 'Our focus is the structural package: everything from the foundations to a watertight shell. If you would like one team to finish the extension too, our sister company Brits Construction Services builds complete projects.',
      },
      {
        q: 'What do you need from me to quote?',
        a: 'The architectural drawings, the structural engineer’s design and calculations, and the specification if you have one. From these we prepare a clear scope and quotation for the structural package.',
      },
      {
        q: 'Who arranges the Building Control inspections?',
        a: 'We plan the work around the inspections and coordinate with the inspector, so the foundations, drainage and steel are ready to be seen before anything is covered up.',
      },
    ],
  },
  {
    id: 'loft-conversions',
    nav: 'Loft conversions',
    title: 'Structural Work for Loft Conversions',
    pill: 'Dormer, hip to gable and mansard lofts',
    lead: 'Floor strengthening, steel installation, dormer construction and roof alterations: the framework your new loft room is built on.',
    hero: '/photos/loft-construction-4.webp',
    heroAlt: 'Loft conversion structure with new steel beams and timber framing',
    heroPosition: '50% 45%',
    caption: 'Loft structure with new steels and framing',
    intro:
      'Converting a loft changes how your roof carries its load. New floor joists, steel beams, dormer framing and altered roof timbers all have to follow the engineer’s design exactly. We build that structure, ready for insulation, boarding and finishes.',
    includes: ['steelwork', 'roofing', 'masonry', 'demolition'],
    stages: [
      { title: 'Scaffold and roof opened', text: 'Scaffold and protection up, then the roof opened where the dormer or new structure goes.' },
      { title: 'New floor', text: 'New floor joists installed alongside or above the existing ceiling joists, to carry the new room.' },
      { title: 'Steel beams', text: 'Steels lifted in and seated on padstones or new supports, to the engineer’s design.' },
      { title: 'Dormer framing', text: 'Dormer walls, cheeks and roof framed in timber.' },
      { title: 'Masonry', text: 'Gable or party walls built up where the design calls for it.' },
      { title: 'Roof closed in', text: 'Roof structure completed and the loft made watertight.' },
    ],
    notes: [
      'Steel bearing into a party wall usually needs a party wall agreement with your neighbour.',
      'Building Control checks the new floor, steelwork and roof structure as the work goes on.',
      'Most lofts need a structural engineer’s design for the floor, steels and any altered rafters.',
      'Headroom and the stair position should be settled in the drawings before work starts.',
    ],
    gallery: [
      { src: '/photos/large-loft-1.webp', alt: 'Loft conversion structure with new steel beams, rafters and floor joists', caption: 'Steels and rafters' },
      { src: '/photos/loft-construction-2.webp', alt: 'Red painted structural steel frame inside a roof under construction', caption: 'Steel frame' },
      { src: '/photos/large-loft-3.webp', alt: 'Timber roof structure being framed', caption: 'Roof structure' },
      { src: '/photos/build-progress-11.webp', alt: 'New roof trusses and timber joists over a structure under scaffolding', caption: 'Roof timbers' },
    ],
    faqs: [
      {
        q: 'Can my existing ceiling joists carry a loft room?',
        a: 'Usually not. Ceiling joists are sized for a ceiling, not a floor. Your engineer will specify new floor joists and any steel beams, and we install them to that design.',
      },
      {
        q: 'Will you need to go into my neighbour’s side?',
        a: 'Steels often bear into the party wall. Where that is the case a party wall agreement or award is normally needed before work starts, and we work to its requirements.',
      },
      {
        q: 'Do you fit the stairs, insulation and finishes?',
        a: 'Our package covers the structure. Finishing trades can follow on, or our sister company Brits Construction Services can complete the whole loft conversion.',
      },
    ],
  },
  {
    id: 'internal-alterations',
    nav: 'Internal alterations',
    title: 'Internal Structural Alterations',
    pill: 'Wall removal and new openings',
    lead: 'Load bearing walls removed, new openings formed and steel beams installed safely, with temporary support at every step.',
    hero: '/photos/build-progress-4.webp',
    heroAlt: 'Steel beam installed over a new opening in blockwork',
    heroPosition: '50% 50%',
    caption: 'New steel over a structural opening',
    intro:
      'Opening up a kitchen, forming a wide opening to a garden room or removing a chimney breast all change the load paths through your home. We carry out the work in a controlled sequence, with the house supported throughout, and install the beams, columns and frames your engineer specifies.',
    includes: ['demolition', 'steelwork', 'masonry'],
    stages: [
      { title: 'Design checked', text: 'We review the engineer’s design and plan the sequence and temporary support.' },
      { title: 'Temporary support', text: 'Props and needles installed so the walls and floors above are carried safely.' },
      { title: 'Wall removed', text: 'The wall or chimney breast taken out in controlled stages.' },
      { title: 'Padstones and beam', text: 'Bearings built, then the specified steel or beam lifted into place.' },
      { title: 'Packed and checked', text: 'The beam packed tight to the structure above and the props removed only when it is carrying the load.' },
      { title: 'Inspection', text: 'Building Control inspects the steel before it is boxed in and made good.' },
    ],
    notes: [
      'Never remove a load bearing wall without a structural engineer’s design.',
      'A beam bearing onto a party wall may need a party wall notice.',
      'Steel in some locations needs fire protection, set out in the design.',
      'Building Control needs to see the beam and its bearings before they are covered.',
    ],
    gallery: [
      { src: '/photos/build-progress-8.webp', alt: 'View through a wide new opening into an extension shell with timber roof joists', caption: 'Opening formed' },
      { src: '/photos/build-progress-17.webp', alt: 'Steel beams and new timber joists spanning brickwork walls', caption: 'Steels in place' },
      { src: '/photos/build-progress-9.webp', alt: 'New brickwork and blockwork walls with openings formed', caption: 'Supporting masonry' },
    ],
    faqs: [
      {
        q: 'How do I know if a wall is load bearing?',
        a: 'You cannot tell reliably by looking. A structural engineer should inspect it and, if it is load bearing, design the beam and supports. Our professional team includes structural engineers if you need one.',
      },
      {
        q: 'Is the house safe while the wall is out?',
        a: 'Yes. The structure above is carried on temporary props and needles before anything is removed, and they stay until the new beam is installed and carrying the load.',
      },
      {
        q: 'Do I need Building Control approval?',
        a: 'Yes, removing a load bearing wall is building work under the Building Regulations. Building Control will want the engineer’s calculations and will inspect the steel.',
      },
    ],
  },
  {
    id: 'new-builds',
    nav: 'New build structures',
    title: 'New Build Structures',
    pill: 'Houses and residential buildings',
    lead: 'Coordinated structural packages for new homes: groundworks, foundations, drainage, walls, floors, steelwork and the roof structure.',
    hero: '/photos/scaffolded-build-1.webp',
    heroAlt: 'Residential new build wrapped in scaffolding and sheeting',
    heroPosition: '50% 50%',
    caption: 'Residential new build under scaffold',
    intro:
      'A new home brings every structural trade together, often with piling or specialist foundations. We coordinate the full structural package in the right order, working to the engineer’s design and any warranty provider’s inspections, so the building is sound before the finishing work begins.',
    includes: ['demolition', 'foundations', 'drainage', 'masonry', 'steelwork', 'concrete-floors', 'beam-block', 'screeding', 'roofing'],
    stages: [
      { title: 'Groundworks', text: 'Site cleared, levels set and services located before excavation.' },
      { title: 'Foundations', text: 'Strip, trench fill or piled foundations to the engineer’s design, inspected before concrete.' },
      { title: 'Drainage', text: 'Foul and surface water drainage laid and connected.' },
      { title: 'Ground floor', text: 'Slab or beam and block floor to the specified build up.' },
      { title: 'Superstructure', text: 'External and internal load bearing walls built up, floor by floor.' },
      { title: 'Steel and upper floors', text: 'Steel frames, beams and upper floor structures installed.' },
      { title: 'Roof', text: 'Roof structure completed and the building made watertight.' },
    ],
    notes: [
      'Piling or special foundations may be needed, depending on the ground and the engineer’s design.',
      'Building Control, and any structural warranty provider, inspect at key stages.',
      'Drainage connections to the public sewer need approval from the water company.',
      'A clear programme and sequence keeps each trade ready for the next.',
    ],
    gallery: [
      { src: '/photos/groundworks-1.webp', alt: 'Foundation trench with steel reinforcement and formwork', caption: 'Foundations' },
      { src: '/photos/concrete-3.webp', alt: 'Concrete pump lorry delivering concrete on a residential site', caption: 'Concrete pour' },
      { src: '/photos/build-progress-14.webp', alt: 'Building under construction with new brick and blockwork walls and scaffolding', caption: 'Superstructure' },
      { src: '/photos/large-loft-3.webp', alt: 'Timber roof structure being framed', caption: 'Roof structure' },
    ],
    faqs: [
      {
        q: 'Can you take on the whole structural package?',
        a: 'Yes. We coordinate groundworks, foundations, drainage, walls, floors, steel and the roof as one package, so each stage is ready for the next.',
      },
      {
        q: 'Do you work with warranty providers?',
        a: 'Where your new home has a structural warranty, we plan the work around the provider’s inspections alongside Building Control.',
      },
      {
        q: 'Who finishes the house?',
        a: 'Finishing trades or your main contractor follow on once the structure is complete. Our sister company Brits Construction Services can also complete the build.',
      },
    ],
  },
] as const;
