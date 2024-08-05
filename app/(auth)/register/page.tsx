import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="flex items-center justify-between px-6 py-4 ">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <img
            src="https://cdn.worldvectorlogo.com/logos/jira-3.svg"
            alt="Software Project Management"
            width={25}
            height={25}
          ></img>
          <span className="text-lg font-semibold">
            Software Project Management
          </span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium underline-offset-4 hover:underline"
            prefetch={false}
          >
            Login
          </Link>
          <Link
            href="/register"
            className="text-sm font-medium underline-offset-4 hover:underline"
            prefetch={false}
          >
            Register
          </Link>
        </nav>
      </header>
      <main className="flex flex-1 items-center justify-center py-12">
        <div className="w-full max-w-lg">
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">Register</h2>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" placeholder="John Doe" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <Button
                type="submit"
                className="w-full items-center justify-center bg-primary text-primary-foreground hover:bg-slate-100"
              >
                Register
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
