import {
  brand,
  contact,
  course,
  faq,
  links,
  modules,
  person,
  pillars,
  sameAs,
  seo,
  SITE_URL,
} from '#/content/site';
import { imageUrl } from '#/lib/images';

const abs = (path: string) => `${SITE_URL}${path}`;

const ids = {
  organization: `${SITE_URL}/#organization`,
  person: `${SITE_URL}/#person`,
  website: `${SITE_URL}/#website`,
  webpage: `${SITE_URL}/#webpage`,
  course: `${SITE_URL}/#course`,
  faq: `${SITE_URL}/#faq`,
};

/** Remove campos vazios ou com TODO para nunca publicar placeholder. */
function clean<T extends Record<string, unknown>>(obj: T): Partial<T> {
  return Object.fromEntries(
    Object.entries(obj).filter(([, value]) => {
      if (value === undefined || value === null || value === '') return false;
      if (Array.isArray(value) && value.length === 0) return false;
      if (typeof value === 'string' && value.startsWith('TODO')) return false;
      return true;
    }),
  ) as Partial<T>;
}

/** Meta tags e links de SEO da página inicial. */
export function pageHead() {
  const url = `${SITE_URL}/`;
  const image = abs(seo.ogImage.src);

  return {
    meta: [
      { title: seo.title },
      { name: 'description', content: seo.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: brand.name },
      { property: 'og:locale', content: seo.locale },
      { property: 'og:url', content: url },
      { property: 'og:title', content: seo.title },
      { property: 'og:description', content: seo.description },
      { property: 'og:image', content: image },
      { property: 'og:image:type', content: 'image/jpeg' },
      { property: 'og:image:width', content: String(seo.ogImage.width) },
      { property: 'og:image:height', content: String(seo.ogImage.height) },
      { property: 'og:image:alt', content: seo.ogImage.alt },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: seo.title },
      { name: 'twitter:description', content: seo.description },
      { name: 'twitter:image', content: image },
      { name: 'twitter:image:alt', content: seo.ogImage.alt },
    ],
    links: [{ rel: 'canonical', href: url }],
  };
}

/** JSON-LD (@graph) da página inicial. */
export function pageJsonLd() {
  const organization = clean({
    '@type': 'Organization',
    '@id': ids.organization,
    name: brand.name,
    legalName: brand.legalName,
    taxID: brand.taxId,
    description: brand.description,
    url: `${SITE_URL}/`,
    logo: {
      '@type': 'ImageObject',
      url: abs(brand.logo),
      width: 512,
      height: 512,
    },
    email: contact.email,
    telephone: `+${contact.phone}`,
    foundingDate: brand.foundingDate,
    founder: { '@id': ids.person },
    address: {
      '@type': 'PostalAddress',
      addressLocality: brand.address.locality,
      addressRegion: brand.address.region,
      addressCountry: brand.address.country,
    },
    areaServed: { '@type': 'Country', name: 'Brasil' },
    knowsLanguage: seo.language,
    sameAs,
  });

  const personNode = clean({
    '@type': 'Person',
    '@id': ids.person,
    name: person.name,
    jobTitle: person.jobTitle,
    worksFor: { '@id': ids.organization },
    image: abs(imageUrl(person.image, 960, 'webp')),
    knowsAbout: person.knowsAbout,
  });

  const website = {
    '@type': 'WebSite',
    '@id': ids.website,
    url: `${SITE_URL}/`,
    name: brand.name,
    inLanguage: seo.language,
    publisher: { '@id': ids.organization },
  };

  const webpage = {
    '@type': 'WebPage',
    '@id': ids.webpage,
    url: `${SITE_URL}/`,
    name: seo.title,
    description: seo.description,
    inLanguage: seo.language,
    isPartOf: { '@id': ids.website },
    about: { '@id': ids.course },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: abs(seo.ogImage.src),
      width: seo.ogImage.width,
      height: seo.ogImage.height,
    },
    mainEntity: { '@id': ids.course },
  };

  const courseNode = {
    '@type': 'Course',
    '@id': ids.course,
    name: course.name,
    description: course.description,
    url: `${SITE_URL}/`,
    inLanguage: seo.language,
    provider: { '@id': ids.organization },
    creator: { '@id': ids.person },
    instructor: { '@id': ids.person },
    teaches: pillars.map((pillar) => pillar.title),
    syllabusSections: modules.map((module) => ({
      '@type': 'Syllabus',
      name: `Módulo ${module.number}: ${module.title}`,
      description: module.lessons.map((lesson) => lesson.title).join('; '),
    })),
    image: abs(seo.ogImage.src),
    isAccessibleForFree: false,
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'Online',
      instructor: { '@id': ids.person },
    },
    offers: {
      '@type': 'Offer',
      url: links.checkout,
      price: course.price,
      priceCurrency: course.priceCurrency,
      category: 'Paid',
      availability: 'https://schema.org/InStock',
      seller: { '@id': ids.organization },
    },
  };

  const faqPage = {
    '@type': 'FAQPage',
    '@id': ids.faq,
    isPartOf: { '@id': ids.webpage },
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [organization, personNode, website, webpage, courseNode, faqPage],
  };
}
