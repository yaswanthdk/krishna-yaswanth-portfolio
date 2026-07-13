import { siteConfig } from "@/constants/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex h-14 max-w-5xl items-center px-6">
        <p className="text-sm text-muted-foreground">
          © {year} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
