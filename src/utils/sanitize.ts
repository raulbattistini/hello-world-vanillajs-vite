import DOMPurify from "dompurify";

const safeHTML = (html: string): string => DOMPurify.sanitize(html);

export { safeHTML }
