import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

export function Subscribe() {
  return (
    // TODO: improve styling
    <MaxWidthWrapper className="py-20">
      <div className="mb-10 flex w-full flex-col text-center">
        <h3 className=" mb-4 text-xl font-medium sm:text-2xl">
          Subscribe to stay up to date with promotions and special offers
        </h3>
      </div>
      <div className="mx-auto flex w-full flex-col items-end space-y-4 px-8 sm:flex-row sm:space-x-4 sm:space-y-0 sm:px-0 lg:w-2/3">
        <div className="relative w-full flex-grow">
          <Input
            type="text"
            placeholder="Your Name"
            name="name"
            className="hover:bg-primary-foreground"
          />
        </div>
        <div className="relative w-full flex-grow">
          <Input
            type="email"
            placeholder="Your Email"
            name="email"
            className="hover:bg-primary-foreground"
          />
        </div>
        <Button>Subscribe</Button>
      </div>
    </MaxWidthWrapper>
  );
}
