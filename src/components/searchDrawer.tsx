import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { LogoWithLink } from "@/components/logo-with-link";

const POPULAR_ITEMS = [
  {
    name: "Air Force 1",
    path: "air-force-1",
  },
  {
    name: "Jordan",
    path: "jordan",
  },
  {
    name: "Air Max",
    path: "air-max",
  },
  {
    name: "Blazer",
    path: "blazer",
  },
];

// TODO: change the icon to input, open drawer on input change
// TODO: expand drawer to full screen and display items on the left on mobile

export function SearchDrawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Icons.search />
        </Button>
      </SheetTrigger>

      <SheetContent side="top">
        {/*TODO: Replace with <LogoWithLink/> */}
        <Icons.logo className="absolute" size={36} />
        <div className="flex items-center justify-center">
          <div className="flex w-1/3 flex-col space-y-3">
            <div className="relative mb-6">
              <Input
                id="search"
                placeholder="Search"
                className="-ml-2 w-full px-9"
              />
              <div className="absolute left-1 top-3">
                <Icons.search className=" h-4 w-4" />
              </div>
            </div>

            <h3 className="font-semibold text-muted-foreground">
              Popular Search Terms
            </h3>

            <ul className="flex flex-col items-start space-y-1">
              {POPULAR_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "p-0 hover:text-muted-foreground hover:no-underline",
                  )}
                >
                  <li className="text-lg font-semibold">{item.name}</li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
