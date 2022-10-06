export type Project = {
  title: string;
  description: string;
  imageLink: string;
  location: string;
};

export const projects: Project[] = [
  {
    title: "Apartments in Wien",
    description: "Zwei Stadtvillen mit jeweils zwei Wohneinheiten",
    imageLink: "/pexels-expect-best-323780.webp",
    location: "Ulmenstraße (Siedlung Koron), 1040 Wien",
  },
  {
    title: "Wohnblock in Straßburg",
    description: "Hochwertige Wohnungen in guter Lage mit Ausblick auf den Rhein",
    imageLink: "/pexels-dom-j-303059.webp",
    location: "Rue du Rhin Napoléon, 67000 Strasbourg, Frankreich",
  },
];
