export const SITE_URL = "https://opchaves.com";

export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = new URL(path, SITE_URL).href;
  return [
    { title },
    { name: "description", content: description },
    { tagName: "link", rel: "canonical", href: url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
}
