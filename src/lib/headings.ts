// Headings (H1/H2) never state "NZ" or "New Zealand": every page on the site is
// about New Zealand, so saying it in a heading adds nothing. Page titles and
// meta descriptions keep it for search. Apply to any data-driven heading.
export function noNZ(text: string): string {
  const out = text
    .replace(/\s+in\s+(NZ|New Zealand)\b/g, '')
    .replace(/\b(NZ|New Zealand)['’]s\s+/g, '')
    .replace(/\b(NZ|New Zealand)\s+/g, '')
    .replace(/\s+(NZ|New Zealand)\b/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
  return out.charAt(0).toUpperCase() + out.slice(1);
}
