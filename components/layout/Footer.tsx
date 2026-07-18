import { Container } from "@/components/common/Container";
import { siteConfig } from "@/constants/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50">
      <Container className="flex h-14 items-center">
        <p className="text-sm text-muted-foreground">
          © {year} {siteConfig.name}
        </p>
      </Container>
    </footer>
  );
}
