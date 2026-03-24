export interface BranchOffer {
  branch: "Tajpur" | "Joypur" | "Purulia";
  price: number;
  bannerImage: string;
  details: string;
  validity: {
    from: string;
    to: string;
  };
}

export interface Offer {
  _id: string;
  title: string;
  popupImage: string;
  branchOffers: BranchOffer[];
}