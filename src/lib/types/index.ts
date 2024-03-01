import { Icons } from "@/components/icons";

export const PRODUCT_CATEGORIES = [
  { path: "/accessories", title: "accessories" },
  { path: "/men", title: "men" },
  { path: "/women", title: "women" },
  { path: "/kids", title: "kids" },
  { path: "/sale", title: "sale" },
] as const;

// export const PRODUCT_GENDER = ["men", "women", "kids", "unisex"] as const;

export const FEATURES = [
  {
    name: "Instant Delivery",
    Icon: Icons.arrowDownToLine,
    description: "Get your product delivered to your door in 3 days ",
  },
  {
    name: "Only Originals",
    Icon: Icons.checkCircle,
    description: "Say no to fakes and replicas *more text *more text",
  },
  {
    name: "Support Army",
    Icon: Icons.leaf,
    description: "We donate 10% of our income to Ukrainian Army",
  },
];

export const PROTECTED_PATH = ["/dashboard", "/profile"];

export const SIZES = [
  "4",
  "4.5",
  "5",
  "5.5",
  "6",
  "6.5",
  "7",
  "7.5",
  "8",
  "8.5",
  "9",
  "9.5",
  "10",
  "10.5",
  "11",
  "11.5",
  "12",
  "12.5",
  "13",
] as const;

export const CATEGORIES = [
  "accessories",
  "men",
  "women",
  "kids",
  "sale",
] as const;
