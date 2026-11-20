// Company details in one place. Anything left empty is simply not shown on the site.
// TO CONFIRM: company number.

/** The live domain (used for canonical links, the sitemap and structured data). */
export const SITE_URL = 'https://www.britsconstructionprojects.co.uk';

export const company = {
  name: 'Brits Construction Projects Ltd',
  shortName: 'Brits Construction Projects',
  tagline: 'Strong structures. Careful management. Confidence at every stage.',
  /** Shown in the header and footer when set, e.g. '020 0000 0000'. */
  phone: '07477 024376',
  /** The same number in international form, for tel: links. */
  phoneHref: '+447477024376',
  /** Enquiries and drawings go here, e.g. 'projects@britsconstructionprojects.co.uk'. */
  email: 'info@britsconstructionprojects.co.uk',
  /** One line, e.g. '66 Yeading Avenue, Harrow HA2 9RN'. */
  address: '66 Yeading Avenue, Harrow HA2 9RN',
  /** Companies House number, shown in the footer when set. */
  companyNumber: '',
  /** Sister company: linked in the footer and on the About page. */
  sister: { name: 'Brits Construction Services', url: 'https://www.britsconstructionservices.co.uk' },
};

/**
 * Where the enquiry form sends (FormSubmit: free, no account; emails each enquiry to company.email).
 * Empty: the form opens the visitor's email app instead, addressed to company.email.
 */
export const FORM_ENDPOINT = `https://formsubmit.co/ajax/${company.email}`;
