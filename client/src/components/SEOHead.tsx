import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export function SEOHead({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  canonicalUrl
}: SEOHeadProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Set meta description
    setMetaTag("description", description);

    // Set meta keywords if provided
    if (keywords) {
      setMetaTag("keywords", keywords);
    }

    // Set Open Graph tags
    setMetaTag("og:title", ogTitle || title, "property");
    setMetaTag("og:description", ogDescription || description, "property");
    setMetaTag("og:type", "website", "property");
    setMetaTag("og:site_name", "Global Logistics Solutions", "property");
    
    if (ogImage) {
      setMetaTag("og:image", ogImage, "property");
    }

    // Set Twitter Card tags
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", ogTitle || title);
    setMetaTag("twitter:description", ogDescription || description);
    
    if (ogImage) {
      setMetaTag("twitter:image", ogImage);
    }

    // Set canonical URL if provided
    if (canonicalUrl) {
      setLinkTag("canonical", canonicalUrl);
    }

    // Set viewport and other important meta tags
    setMetaTag("viewport", "width=device-width, initial-scale=1.0");
    setMetaTag("robots", "index, follow");
    setMetaTag("author", "Global Logistics Solutions");
    
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, canonicalUrl]);

  return null;
}

function setMetaTag(name: string, content: string, attribute: string = "name") {
  let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
  
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  
  element.setAttribute("content", content);
}

function setLinkTag(rel: string, href: string) {
  let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
  
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  
  element.setAttribute("href", href);
}