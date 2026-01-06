export function pathPart() {
  return import.meta.env.VITE_PATH_PART_LOCAL
    ? import.meta.env.VITE_PATH_PART_LOCAL
    : import.meta.env.VITE_PATH_PART
}
