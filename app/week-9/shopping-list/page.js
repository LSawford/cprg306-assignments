"use client";

import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";

const ShoppingListPage = () => {
  const { user } = useUserAuth();
  const router = useRouter();

  if (!user) {
    router.push("/week-9");
    return null;
  }

  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold">Your Shopping List</h1>
    </main>
  );
};

export default ShoppingListPage;
