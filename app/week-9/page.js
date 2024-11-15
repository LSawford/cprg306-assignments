"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold">Welcome to the Shopping List App</h1>
      {!user ? (
        <button
          onClick={gitHubSignIn}
          className="bg-blue-500 text-white p-2 rounded mt-4"
        >
          Login with GitHub
        </button>
      ) : (
        <div>
          <p className="mt-4">
            Welcome, {user.displayName} ({user.email})
          </p>
          <button
            onClick={firebaseSignOut}
            className="bg-red-500 text-white p-2 rounded mt-4"
          >
            Logout
          </button>
          <Link href="/week-9/shopping-list" className="block mt-4 text-blue-500 underline">
  Go to Shopping List
</Link>

        </div>
      )}
    </main>
  );
};

export default LandingPage;
