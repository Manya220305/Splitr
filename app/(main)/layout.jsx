"use client";

import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";
import React from "react";
import { BarLoader } from "react-spinners";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const MainLayout = ({ children }) => {
  return (
    <>
      <AuthLoading>
        <div className="flex items-center justify-center min-h-screen">
          <BarLoader color="#36d7b7" width={200} />
        </div>
      </AuthLoading>

      <Authenticated>
        <div className="container mx-auto mt-24 mb-20 px-4">{children}</div>
      </Authenticated>

      <Unauthenticated>
        <div className="flex flex-col items-center justify-center min-h-screen gap-4 text-center px-4">
          <h1 className="text-3xl font-bold">Connecting to Database...</h1>
          <p className="text-muted-foreground max-w-md">
            If this takes more than a few seconds, please ensure you are signed in and have configured your Clerk JWT template correctly.
          </p>
          <Button asChild className="mt-2">
            <Link href="/">Go to Home</Link>
          </Button>
        </div>
      </Unauthenticated>
    </>
  );
};

export default MainLayout;
