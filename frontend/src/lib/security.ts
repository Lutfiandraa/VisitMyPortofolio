const allowedDomains = [
  "github.com",
  "linkedin.com",
  "instagram.com",
  "vercel.app",
  "portal-berita-px6z.vercel.app",
  "gerobar-umkm.vercel.app",
  "keyin-pariwisata.vercel.app",
  "royalmerchant.vercel.app",
  "sistem-kesehatan-dan-kesalamatan-ke.vercel.app",
  "karta-jati.vercel.app",
  "cakranegara-equipment.vercel.app",
  "mail.google.com"
];

export function sanitizeUrl(url: string): string {
  if (!url) return '/404';
  try {
    const parsed = new URL(url);
    if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
      const isAllowed = allowedDomains.some(
        domain => parsed.hostname === domain || parsed.hostname.endsWith('.' + domain)
      );
      if (isAllowed) {
        return url;
      }
    }
    return '/404';
  } catch {
    if (url.startsWith('/') || url.startsWith('#')) {
      return url;
    }
    return '/404';
  }
}

export function obfuscateString(text: string): string {
  if (typeof window === 'undefined') {
    return Buffer.from(text).toString('base64');
  }
  return btoa(text);
}

export function deobfuscateString(encoded: string): string {
  if (typeof window === 'undefined') {
    return Buffer.from(encoded, 'base64').toString('utf8');
  }
  return atob(encoded);
}

export function getDirectEmailLink(): string {
  const localPart = "lutfiandrapohann";
  const domainPart = "gmail.com";
  return `mailto:${localPart}@${domainPart}`;
}
