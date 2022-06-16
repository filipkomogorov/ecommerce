export interface Category {
  id: number;
  directory: string;
  path: string;
}

export interface NavDirectory {
  id: number;
  title: string;
  directories: Category[];
}

export const navigation: NavDirectory[] = [
  {
    id: 1,
    title: "Men",
    directories: [
      {
        id: 10,
        directory: "View All",
        path: "/men",
      },
      {
        id: 11,
        directory: "T-shirts",
        path: "/men/tshirts",
      },
      {
        id: 12,
        directory: "Hoodies and Tops",
        path: "/men/hoodiesandtops",
      },
      {
        id: 13,
        directory: "Trouzers",
        path: "/men/trouzers",
      },
      {
        id: 14,
        directory: "Shoes",
        path: "/men/shoes",
      },
    ],
  },
  {
    id: 2,
    title: "Women",
    directories: [
      {
        id: 15,
        directory: "View All",
        path: "/women",
      },
      {
        id: 16,
        directory: "Dresses",
        path: "/women/dresses",
      },
      {
        id: 17,
        directory: "Tops",
        path: "/women/tops",
      },
      {
        id: 18,
        directory: "Trouzers",
        path: "/women/trouzers",
      },
      {
        id: 19,
        directory: "Shoes",
        path: "/women/shoes",
      },
    ],
  },
  {
    id: 3,
    title: "New",
    directories: [
      {
        id: 20,
        directory: "View All",
        path: "/new",
      },
      {
        id: 21,
        directory: "Men",
        path: "/new/men",
      },
      {
        id: 22,
        directory: "Women",
        path: "/new/women",
      },
    ],
  },
  {
    id: 4,
    title: "Outlet",
    directories: [
      {
        id: 23,
        directory: "View All",
        path: "/outlet",
      },
      {
        id: 24,
        directory: "Dresses",
        path: "/outlet/dresses",
      },
      {
        id: 25,
        directory: "T-shirts",
        path: "/outlet/tshirts",
      },
      {
        id: 26,
        directory: "Trouzers",
        path: "/outlet/trouzers",
      },
      {
        id: 27,
        directory: "Hoodies and Tops",
        path: "/outlet/hoodiesandtops",
      },
      {
        id: 28,
        directory: "Shoes",
        path: "/outlet/shoes",
      },
    ],
  },
  {
    id: 5,
    title: "Sale",
    directories: [
      {
        id: 29,
        directory: "View All",
        path: "/sale",
      },
      {
        id: 30,
        directory: "Men",
        path: "/sale/men",
      },
      {
        id: 31,
        directory: "Women",
        path: "/sale/women",
      },
      {
        id: 32,
        directory: "Accessories",
        path: "/sale/accessories",
      },
    ],
  },
];
