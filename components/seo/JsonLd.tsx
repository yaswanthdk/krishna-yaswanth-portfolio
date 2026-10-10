import { siteConfig } from "@/constants/site";

const emailAddress = siteConfig.links.email.replace("mailto:", "");

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: siteConfig.name,
        jobTitle: siteConfig.jobTitle,
        url: siteConfig.url,
        email: emailAddress,
        sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
      },
      {
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
