import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { CreateProductForm } from "@/components/dashboard/create-product-form";

export default function Create() {
  return (
    <div className="grid gap-6">
      <MaxWidthWrapper className="flex items-start justify-center py-20">
        <CreateProductForm />
      </MaxWidthWrapper>
    </div>
  );
}
