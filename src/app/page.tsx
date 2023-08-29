import Button from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <Link href="/books">
        <Button variant="normal" className="text-white bg-primaryColor">
          Explore Books
        </Button>
      </Link>
    </main>
  );
}
