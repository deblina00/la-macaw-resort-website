export interface Banquet {
  _id: string;
  slug: string;
  title: string;
  images: string[];
  description: string;
  totalArea: number;

  seatingCapacity?: {
    theatre?: number;
    dining?: number;
    floating?: number;
    cluster?: number;
    min?: number;
    max?: number;
  };
  type?: "Hall" | "Lawn";
  features?: string[];
  openingTime?: string;
  closingTime?: string;
}
