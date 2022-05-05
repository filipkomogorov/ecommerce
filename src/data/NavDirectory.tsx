export interface Category {
  id: number;
  directory: string;
  path: string;
}

export interface NavDirectory {
  id: number;
  title: string;
  path: string;
  directories: Category[];
}

export const navigation: NavDirectory[] = [
  {
    id: 1,
    title: "Men",
    path: "/men",
    directories: [
      {
        id: 10,
        directory: "View All",
        path: "/men/viewall",
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
    path: "/women",
    directories: [
      {
        id: 15,
        directory: "View All",
        path: "/women/viewall",
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
    path: "/new",
    directories: [
      {
        id: 20,
        directory: "View All",
        path: "/new/viewall",
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
    path: "/outlet",
    directories: [
      {
        id: 23,
        directory: "View All",
        path: "/outlet/viewall",
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
    path: "/sale",
    directories: [
      {
        id: 29,
        directory: "Men",
        path: "/sale/men",
      },
      {
        id: 30,
        directory: "Women",
        path: "/sale/women",
      },
      {
        id: 31,
        directory: "Accessories",
        path: "/sale/accessories",
      },
    ],
  },
];
