export const normalizeSearch = (value: string) =>
  value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[đĐ]/g, 'd').toLowerCase().trim();

export function matchesDevice(group: string, text: string, selected: string, query: string) {
  return (selected === 'all' || group === selected) &&
    normalizeSearch(text).includes(normalizeSearch(query));
}
