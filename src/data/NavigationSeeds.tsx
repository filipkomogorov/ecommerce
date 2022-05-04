export interface NavigationSeeds {
  Men: string[];
  Women: string[];
  New: string[];
  Outlet: string[];
  Sale: string[];
}

export const navigation: NavigationSeeds = {
  Men: ["View All", "T-shirts", "Hoodies and Tops", "Trouzers", "Shoes"],
  Women: ["View All", "Dresses", "Tops", "Trouzers", "Shoes"],
  New: ["View All", "Men", "Women"],
  Outlet: [
    "View All",
    "Dresses",
    "T-shirts",
    "Hoodies and Tops",
    "Trouzers",
    "Shoes",
  ],
  Sale: ["Men", "Women", "Accessories"],
};
