export interface Offer {
  _id: string;
  title: string;
  image: string;
  offerDetails: string;
  discountValue: number;
  validityFrom: Date;
  validityTo:Date;
}
