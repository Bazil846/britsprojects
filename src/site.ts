// Company details in one place. Anything left empty is simply not shown on the site.
// TO CONFIRM before launch: domain, phone, email, address, company number, form key.

/** The live domain (used for canonical links, the sitemap and structured data). */
export const SITE_URL = 'https://www.britsconstructionprojects.co.uk';

export const company = {
  name: 'Brits Construction Projects Ltd',
  shortName: 'Brits Construction Projects',
  tagline: 'Strong structures. Careful management. Confidence at every stage.',
  /** Shown in the header and footer when set, e.g. '020 0000 0000'. */
  phone: '',
  /** Enquiries and drawings go here, e.g. 'projects@britsconstructionprojects.co.uk'. */
  email: '',
  /** One line, e.g. '66 Yeading Avenue, Harrow HA2 9RN'. */
  address: '',
  /** Companies House number, shown in the footer when set. */
  companyNumber: '',
  /** Sister company: linked in the footer and on the About page. */
  sister: { name: 'Brits Construction Services', url: 'https://www.britsconstructionservices.co.uk' },
};

/**
 * Web3Forms access key (free, from web3forms.com, tied to the inbox that should receive enquiries).
 * Empty: the form opens the visitor's email app instead, addressed to company.email.
 */
export const FORM_ACCESS_KEY = '';
