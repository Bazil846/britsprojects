// Site copy from the BCPL web brief ("BCPL Web Matter"), kept word for word where the brief gives it.

export const structuralCore = [
  {
    id: 'extensions',
    icon: 'extension',
    title: 'Extensions',
    text: 'Structural construction for single and double-storey extensions, including demolition, groundworks, foundations, drainage, walls, floors, steelwork and roofing.',
  },
  {
    id: 'loft-conversions',
    icon: 'loft',
    title: 'Loft Conversions',
    text: 'Structural alterations, floor strengthening, steel installation, dormer construction and roof modifications to create the framework for your new living space.',
  },
  {
    id: 'internal-alterations',
    icon: 'wall',
    title: 'Internal Structural Alterations',
    text: 'Load-bearing wall removal, new structural openings, temporary support and installation of specified beams, columns and frames.',
  },
  {
    id: 'new-builds',
    icon: 'newbuild',
    title: 'New Build Structures',
    text: 'Coordinated structural packages covering groundworks, foundations, drainage, structural walls, floors, steelwork and roof construction.',
  },
] as const;

/** The trades in a structural package, in build order. */
export const structuralTrades = [
  {
    id: 'demolition',
    icon: 'demolition',
    title: 'Demolition & Site Preparation',
    text: 'Demolition, strip-out, site clearance and excavation to prepare your property for the planned works.',
  },
  {
    id: 'foundations',
    icon: 'foundation',
    title: 'Foundations & Piling',
    text: 'Excavation and concrete foundation construction, with specialist piling arrangements where required by the structural design.',
  },
  {
    id: 'drainage',
    icon: 'drainage',
    title: 'Drainage Works',
    text: 'Underground drainage installation and alterations, including pipework, inspection chambers, diversions and connections to suit your project.',
  },
  {
    id: 'masonry',
    icon: 'brick',
    title: 'Brickwork & Blockwork',
    text: 'Construction of external walls, internal load-bearing walls and supporting masonry for extensions, alterations and new homes.',
  },
  {
    id: 'steelwork',
    icon: 'steel',
    title: 'Structural Steelwork',
    text: 'Installation of specified steel beams, columns and frames to support new openings, additional floors and changes to your home’s layout.',
  },
  {
    id: 'concrete-floors',
    icon: 'slab',
    title: 'Solid Concrete Ground Floors',
    text: 'Ground floor construction, including sub-base preparation, compacted hardcore, damp-proof membranes, insulation and concrete slabs to the specified floor build-up.',
  },
  {
    id: 'beam-block',
    icon: 'beamblock',
    title: 'Beam & Block Floors',
    text: 'Installation of suspended beam and block flooring, including supporting masonry, concrete beams, infill blocks, ventilation provisions and insulation.',
  },
  {
    id: 'screeding',
    icon: 'screed',
    title: 'Floor Screeding',
    text: 'Screeding to provide a level surface ready for floor finishes, including installation over underfloor heating systems where specified.',
  },
  {
    id: 'roofing',
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
