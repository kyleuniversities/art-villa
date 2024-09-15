import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav className="max-w-7xl mx-auto py-4 flex gap-x-4 border-b-2">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/">Home 2</Link>
      <Link href="/about">About 2</Link>
    </nav>
  );
}
