"use client";

import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { api } from "@/trpc/react";

export default function Profile() {
  const { data: user } = api.user.getCurrentUser.useQuery();
  console.log(user);

  if (!user) {
    return <></>;
  }

  return (
    <>
      <MaxWidthWrapper className="py-20">
        <h1 className="text-3xl">{user.displayName} profile</h1>
      </MaxWidthWrapper>
    </>
  );
}
