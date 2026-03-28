export interface Room {
  _id: string;
  title: string;
  description?: string;
  price: number;
  capacity: number;
  totalBed: number;
  amenities?: string[];
  gallery: string[];
  ratings?: number;
  createdAt?: string;
  updatedAt?: string;
}
