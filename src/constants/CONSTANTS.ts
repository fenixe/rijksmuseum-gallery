export const ITEMS_PER_PAGE_ARRAY: Array<number> = [10, 50, 100];
export const PAGE_NEIGHBOURS = 3;
export const MAX_RESULT_ITEMS = 10000;
export const SORT_LIST: Array<{ title: string; key: string }> = [
  {
    key: "relevance",
    title: "Relevance"
  },
  {
    key: "objecttype",
    title: "Type"
  },
  {
    key: "chronologic",
    title: "Chronology (oldest first)"
  },
  {
    key: "achronologic",
    title: "Chronology (newest first)"
  },
  {
    key: "artist",
    title: "Artist (a-z)"
  },
  {
    key: "artistdesc",
    title: "Artist (z-a)"
  }
];
export const API_KEY: string = "rsT1Tgmc";
export const API_URL: string = "https://www.rijksmuseum.nl/api/en/collection";
