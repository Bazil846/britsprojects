// Company details in one place. Anything left empty is simply not shown on the site.
// Registered details from Companies House (company 08836144).

/** The live domain (used for canonical links, the sitemap and structured data). */
export const SITE_URL = 'https://www.britsconstructionprojects.co.uk';

export const company = {
  name: 'Brits Construction Projects Ltd',
  /** Registered name exactly as at Companies House. */
  legalName: 'Brits Construction Projects Limited',
  shortName: 'Brits Construction Projects',
  tagline: 'Strong structures. Careful management. Confidence at every stage.',
  /** Shown in the header and footer when set, e.g. '020 0000 0000'. */
  phone: '07477 024376',
  /** The same number in international form, for tel: links. */
  phoneHref: '+447477024376',
  /** Enquiries and drawings go here, e.g. 'projects@britsconstructionprojects.co.uk'. */
  email: 'info@britsconstructionprojects.co.uk',
  /** Registered office, one line. */
  address: 'Pentax House, South Hill Avenue, Harrow HA2 0DU',
  /** The same address in parts, for structured data. */
  addressParts: { street: 'Pentax House, South Hill Avenue', locality: 'Harrow', postcode: 'HA2 0DU' },
  /** Companies House number, shown in the footer when set. */
  companyNumber: '08836144',
  /** Date of incorporation (Companies House). */
  founded: '2014-01-08',
  /** Sister company: linked in the footer and on the About page. */
  sister: { name: 'Brits Construction Services', url: 'https://www.britsconstructionservices.co.uk' },
};

/**
 * Where the enquiry form sends (FormSubmit: free, no account; emails each enquiry to company.email).
 * Empty: the form opens the visitor's email app instead, addressed to company.email.
 */
export const FORM_ENDPOINT = `https://formsubmit.co/ajax/${company.email}`;
