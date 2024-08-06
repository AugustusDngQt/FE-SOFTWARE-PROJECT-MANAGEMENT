/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { type FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "@/components/toast";
import { type IErrorResponse } from "@/utils/interface/error-response.interface";
import { authRoutes } from "@/utils/api/auth";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const responseData = await authRoutes.login({ username, password });

      const { user, accessToken, refreshToken } = responseData;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("user", JSON.stringify(user));

      toast.success({
        message: `Login successful, welcome ${user.name}`,
        description: "Login successful",
      });

      router.push("/project/backlog");
    } catch (err: any) {
      const errorInfo: IErrorResponse = err.response?.data as IErrorResponse;

      toast.error({
        message: "Login failed",
        description: `${errorInfo.message}`,
      });
    }
  };

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
            <h2 className="mb-4 text-2xl font-bold">Login</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="userName">Username</Label>
                <Input
                  id="userName"
                  type="text"
                  placeholder="Email or phone number"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button
                type="submit"
                className="w-full items-center justify-center bg-primary text-primary-foreground hover:bg-blue-500"
              >
                Login
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
