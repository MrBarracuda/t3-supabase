import { Icons } from "@/components/icons";

export const PRODUCT_CATEGORIES = [
  { path: "/accessories", title: "accessories" as const },
  { path: "/men", title: "men" as const },
  { path: "/women", title: "women" as const },
  { path: "/kids", title: "kids" as const },
  { path: "/sale", title: "sale" as const },
];

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
