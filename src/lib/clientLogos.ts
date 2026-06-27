/** Logo URL sources for trusted client cells — tried in order until one loads */
export function getClientLogoSources(domain: string): string[] {
  const site = `https://${domain}`;
  const sources: string[] = [];

  const logoDevToken = process.env.NEXT_PUBLIC_LOGO_DEV_TOKEN;
  if (logoDevToken) {
    sources.push(
      `https://img.logo.dev/${encodeURIComponent(domain)}?token=${logoDevToken}&size=160&format=png&retina=true`,
    );
  }

  sources.push(
    `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${encodeURIComponent(site)}&size=256`,
    `https://unavatar.io/${encodeURIComponent(domain)}`,
    `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`,
  );

  return sources;
}

/** Skip tiny favicon placeholders and try the next source */
export const MIN_LOGO_PX = 56;
