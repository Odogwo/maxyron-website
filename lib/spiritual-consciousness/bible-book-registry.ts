/** Bible book coordinates transcribed from the governed BKA Scripture Discovery Registry (main, reviewed 2026-11-19).
 * Coordinate identity is not evidence of a developed physical BOOK or VERSE note.
 * Public-safe book metadata only; no private note content or Bible translation text.
 */
export type BibleBook = { readonly id: string; readonly name: string; readonly testament: 'Old Testament' | 'New Testament' };
export const bibleBooks: readonly BibleBook[] = [
  {
    "id": "101",
    "name": "Genesis",
    "testament": "Old Testament"
  },
  {
    "id": "102",
    "name": "Exodus",
    "testament": "Old Testament"
  },
  {
    "id": "103",
    "name": "Leviticus",
    "testament": "Old Testament"
  },
  {
    "id": "104",
    "name": "Numbers",
    "testament": "Old Testament"
  },
  {
    "id": "105",
    "name": "Deuteronomy",
    "testament": "Old Testament"
  },
  {
    "id": "106",
    "name": "Joshua",
    "testament": "Old Testament"
  },
  {
    "id": "107",
    "name": "Judges",
    "testament": "Old Testament"
  },
  {
    "id": "108",
    "name": "Ruth",
    "testament": "Old Testament"
  },
  {
    "id": "109",
    "name": "1 Samuel",
    "testament": "Old Testament"
  },
  {
    "id": "110",
    "name": "2 Samuel",
    "testament": "Old Testament"
  },
  {
    "id": "111",
    "name": "1 Kings",
    "testament": "Old Testament"
  },
  {
    "id": "112",
    "name": "2 Kings",
    "testament": "Old Testament"
  },
  {
    "id": "113",
    "name": "1 Chronicles",
    "testament": "Old Testament"
  },
  {
    "id": "114",
    "name": "2 Chronicles",
    "testament": "Old Testament"
  },
  {
    "id": "115",
    "name": "Ezra",
    "testament": "Old Testament"
  },
  {
    "id": "116",
    "name": "Nehemiah",
    "testament": "Old Testament"
  },
  {
    "id": "117",
    "name": "Esther",
    "testament": "Old Testament"
  },
  {
    "id": "118",
    "name": "Job",
    "testament": "Old Testament"
  },
  {
    "id": "119",
    "name": "Psalms",
    "testament": "Old Testament"
  },
  {
    "id": "120",
    "name": "Proverbs",
    "testament": "Old Testament"
  },
  {
    "id": "121",
    "name": "Ecclesiastes",
    "testament": "Old Testament"
  },
  {
    "id": "122",
    "name": "Song of Solomon",
    "testament": "Old Testament"
  },
  {
    "id": "123",
    "name": "Isaiah",
    "testament": "Old Testament"
  },
  {
    "id": "124",
    "name": "Jeremiah",
    "testament": "Old Testament"
  },
  {
    "id": "125",
    "name": "Lamentations",
    "testament": "Old Testament"
  },
  {
    "id": "126",
    "name": "Ezekiel",
    "testament": "Old Testament"
  },
  {
    "id": "127",
    "name": "Daniel",
    "testament": "Old Testament"
  },
  {
    "id": "128",
    "name": "Hosea",
    "testament": "Old Testament"
  },
  {
    "id": "129",
    "name": "Joel",
    "testament": "Old Testament"
  },
  {
    "id": "130",
    "name": "Amos",
    "testament": "Old Testament"
  },
  {
    "id": "131",
    "name": "Obadiah",
    "testament": "Old Testament"
  },
  {
    "id": "132",
    "name": "Jonah",
    "testament": "Old Testament"
  },
  {
    "id": "133",
    "name": "Micah",
    "testament": "Old Testament"
  },
  {
    "id": "134",
    "name": "Nahum",
    "testament": "Old Testament"
  },
  {
    "id": "135",
    "name": "Habakkuk",
    "testament": "Old Testament"
  },
  {
    "id": "136",
    "name": "Zephaniah",
    "testament": "Old Testament"
  },
  {
    "id": "137",
    "name": "Haggai",
    "testament": "Old Testament"
  },
  {
    "id": "138",
    "name": "Zechariah",
    "testament": "Old Testament"
  },
  {
    "id": "139",
    "name": "Malachi",
    "testament": "Old Testament"
  },
  {
    "id": "201",
    "name": "Matthew",
    "testament": "New Testament"
  },
  {
    "id": "202",
    "name": "Mark",
    "testament": "New Testament"
  },
  {
    "id": "203",
    "name": "Luke",
    "testament": "New Testament"
  },
  {
    "id": "204",
    "name": "John",
    "testament": "New Testament"
  },
  {
    "id": "205",
    "name": "Acts",
    "testament": "New Testament"
  },
  {
    "id": "206",
    "name": "Romans",
    "testament": "New Testament"
  },
  {
    "id": "207",
    "name": "1 Corinthians",
    "testament": "New Testament"
  },
  {
    "id": "208",
    "name": "2 Corinthians",
    "testament": "New Testament"
  },
  {
    "id": "209",
    "name": "Galatians",
    "testament": "New Testament"
  },
  {
    "id": "210",
    "name": "Ephesians",
    "testament": "New Testament"
  },
  {
    "id": "211",
    "name": "Philippians",
    "testament": "New Testament"
  },
  {
    "id": "212",
    "name": "Colossians",
    "testament": "New Testament"
  },
  {
    "id": "213",
    "name": "1 Thessalonians",
    "testament": "New Testament"
  },
  {
    "id": "214",
    "name": "2 Thessalonians",
    "testament": "New Testament"
  },
  {
    "id": "215",
    "name": "1 Timothy",
    "testament": "New Testament"
  },
  {
    "id": "216",
    "name": "2 Timothy",
    "testament": "New Testament"
  },
  {
    "id": "217",
    "name": "Titus",
    "testament": "New Testament"
  },
  {
    "id": "218",
    "name": "Philemon",
    "testament": "New Testament"
  },
  {
    "id": "219",
    "name": "Hebrews",
    "testament": "New Testament"
  },
  {
    "id": "220",
    "name": "James",
    "testament": "New Testament"
  },
  {
    "id": "221",
    "name": "1 Peter",
    "testament": "New Testament"
  },
  {
    "id": "222",
    "name": "2 Peter",
    "testament": "New Testament"
  },
  {
    "id": "223",
    "name": "1 John",
    "testament": "New Testament"
  },
  {
    "id": "224",
    "name": "2 John",
    "testament": "New Testament"
  },
  {
    "id": "225",
    "name": "3 John",
    "testament": "New Testament"
  },
  {
    "id": "226",
    "name": "Jude",
    "testament": "New Testament"
  },
  {
    "id": "227",
    "name": "Revelation",
    "testament": "New Testament"
  }
] as const;
