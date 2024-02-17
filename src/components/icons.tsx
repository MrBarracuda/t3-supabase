import {
  ChevronLeft,
  ChevronRight,
  Command,
  Loader2,
  X,
  Search,
  ArrowDownToLine,
  CheckCircle,
  Leaf,
  User,
  ShoppingBag,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  logo: Command,
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  search: Search,
  arrowDownToLine: ArrowDownToLine,
  checkCircle: CheckCircle,
  leaf: Leaf,
  profile: User,
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  ),
  google: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      {...props}
    >
      <path
        fill="currentColor"
        d="M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z"
      ></path>
    </svg>
  ),
  cart: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="cart"
      role="img"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        d="M28 8.75h-4.75v-0.621c0.003-0.079 0.005-0.173 0.005-0.267 0-3.93-3.186-7.117-7.116-7.117-0.076 0-0.151 0.001-0.226 0.003l0.011-0c-0.039-0.001-0.084-0.001-0.13-0.001-3.895 0-7.052 3.157-7.052 7.052 0 0.119 0.003 0.238 0.009 0.355l-0.001-0.017v0.611h-4.75c-1.794 0.002-3.248 1.456-3.25 3.25v14c0.004 2.898 2.352 5.246 5.25 5.25h20c2.898-0.004 5.246-2.352 5.25-5.25v-14c-0.002-1.794-1.456-3.248-3.25-3.25h-0zM11.25 8.13c-0.009-0.104-0.013-0.226-0.013-0.348 0-2.505 2.031-4.536 4.536-4.536 0.060 0 0.119 0.001 0.179 0.003l-0.009-0c0.068-0.004 0.148-0.006 0.228-0.006 2.535 0 4.59 2.055 4.59 4.59 0 0.107-0.004 0.214-0.011 0.32l0.001-0.014v0.611h-9.5zM28.75 26c-0.002 1.518-1.232 2.748-2.75 2.75h-20c-1.518-0.002-2.748-1.232-2.75-2.75v-14c0.001-0.414 0.336-0.749 0.75-0.75h4.75v5.75c0 0.69 0.56 1.25 1.25 1.25s1.25-0.56 1.25-1.25v0-5.75h9.5v5.75c0 0.69 0.56 1.25 1.25 1.25s1.25-0.56 1.25-1.25v0-5.75h4.75c0.414 0 0.75 0.336 0.75 0.75v0z"
      ></path>
    </svg>
  ),
};
