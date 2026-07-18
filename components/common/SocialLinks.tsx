import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/icons/social";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/constants/site";

const socialLinks = [
  {
    href: siteConfig.links.github,
    label: "GitHub",
    icon: GitHubIcon,
  },
  {
    href: siteConfig.links.linkedin,
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
  {
    href: siteConfig.links.email,
    label: "Email",
    icon: MailIcon,
  },
] as const;

export function SocialLinks() {
  return (
    <ul className="flex items-center gap-2">
      {socialLinks.map(({ href, label, icon: Icon }) => (
        <li key={label}>
          <Button variant="ghost" size="icon" asChild>
            <a
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              aria-label={label}
            >
              <Icon className="size-4" />
            </a>
          </Button>
        </li>
      ))}
    </ul>
  );
}
