import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalizeFirstLetter(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export const removeFilePathExtension = (filePath: string) => {
  const lastIndex = filePath.lastIndexOf('.');
  return filePath.slice(0, lastIndex);
};

export const decodeMdxFilePathData = (
  filePath: string,
  lang: string
): { id: string; urlPath: string } => {
  const cleanPath = removeFilePathExtension(filePath);
  const id = cleanPath.split('-')[0];

  return {
    id: id,
    urlPath: `/${lang}/blog/${cleanPath}`,
  };
};
/**
 * Given any object, returns the prop subchild using dot notation as string "desc"
 * Example:
 * var r = { a:1, b: {b1:11, b2: 99}};
 * console.log(getDescendantProp(r, "b.b2"));
 * -> 99
 */
export function getDescendantProp(obj: object, desc: string): unknown {
  const arr = desc.split('.');
  while (arr.length && obj) {
    const element = arr.shift();
    if (element) {
      obj = obj[element as keyof object];
    }
  }
  return obj;
}
