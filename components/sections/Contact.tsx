import { Container } from "@/components/common/Container";
import { SocialLinks } from "@/components/common/SocialLinks";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/constants/site";

const emailAddress = siteConfig.links.email.replace("mailto:", "");

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 sm:py-28"
    >
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-start gap-8">
          <header className="space-y-4">
            <p className="text-sm font-medium text-muted-foreground">Contact</p>
            <h2
              id="contact-heading"
              className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Open to frontend engineering roles at product-focused companies.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              If you are hiring for React or Next.js roles, I would be glad to
              connect. Reach out via email or LinkedIn, or download my resume
              for a detailed overview of my experience.
            </p>
          </header>

          <div className="flex flex-col gap-6">
            <a
              href={siteConfig.links.email}
              className="text-lg font-medium text-foreground underline-offset-4 hover:underline"
            >
              {emailAddress}
            </a>

            <SocialLinks />

            <Button asChild size="lg">
              <a href={siteConfig.resume}>Download Resume</a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
