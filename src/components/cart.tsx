"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator";

export function Cart() {
  const itemCount = 4;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          {/*TODO: fix issue with inner button icon position without using -ml-2*/}
          <Icons.cart className="-ml-2 h-6 w-6" />
          <span className="-ml-4 mt-2 text-xs font-bold">{itemCount}</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Cart ({itemCount})</SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? (
          <>
            <div className="flex w-full flex-col pr-6">
              {/*TODO: Cart logic*/}
              cart items
            </div>
            <div className="space-y-4 pr-6">
              <Separator />
              <div className="space-y-1.5 text-sm">
                <div className="flex">
                  <span className="flex-1">Shipping</span>
                  <span>$5</span>
                </div>

                <div className="flex">
                  <span className="flex-1">Tax</span>
                  <span>$1</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div></div>
        )}
      </SheetContent>
    </Sheet>
  );
}
