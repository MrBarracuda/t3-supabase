import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center md:block md:h-screen">
      <Image
        priority
        fill
        quality={100}
        className="pointer-events-none select-none"
        src="/hero-jordan.png"
        alt="hero jordan shoes image"
        style={{ objectFit: "cover", objectPosition: "75%" }}
      />

      <div className="md:pt max-w-7x1 relative z-10 mx-auto pt-32 md:top-1/4 md:pt-0 lg:top-1/3">
        {/*add bg-white/30*/}
        <div className="md:mad- md:max-xl: md:max-xl flex max-w-2xl flex-col gap-8 rounded px-4">
          <h1 className="-m-1 text-5xl font-semibold md:text-7xl">
            Discover limited sneakers without limitation
          </h1>
          {/*add text-grey-700*/}
          <p className="max-w-xl text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            doloremque magni molestias nesciunt non sequi?
          </p>
          <div className="mt-4 flex gap-8 font-semibold">
            <Button>Best sellers</Button>
            <Button variant="secondary">Request a pair</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
