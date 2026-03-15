export type Amenity = {
  title: string;
  icon: string;
  desc?: string;
  image?: string;
};

export type FAQ = {
  q: string;
  a: string;
};

export type Location = {
  address: string;
  map: string;
};

export type About = {
  title: string;
  text1: string;
  text2: string;
  images: string[];
};

export type Branch = {
  name: string;
  heroImage: string;
  description: string;
  branchId: string;

  amenities: Amenity[];
  about: About;
  faq: FAQ[];
  location: Location;
};
