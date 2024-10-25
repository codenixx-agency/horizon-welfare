"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { loginFormSchema } from "@/schemas/loginFromSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function Login() {
  const [isShown, setIsShown] = React.useState<boolean>(false);
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginFormSchema>) => {
    console.log(values);
  };
  return (
    <main className="relative">
      <Image
        src="/images/banner.png"
        alt="banner"
        height={1090}
        width={1725}
        className="h-[calc(100vh-110px)] w-full"
      />

      <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/30" />

      <div className="absolute left-0 top-0 z-20 flex h-full w-full items-center justify-center">
        <div className="grid w-full max-w-[1280px] grid-cols-12">
          <div className="col-span-4 bg-base-0 px-8 py-12">
            <h3 className="text-2xl font-medium leading-9 text-base-400">
              Sign in
            </h3>
            <div className="mb-2 mt-4 flex w-full justify-end">
              <Link
                className="text-xs text-base-400 underline underline-offset-2"
                href="/forgot-password"
              >
                Reset Password
              </Link>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-y-4"
              >
                {/* email address  */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel className="text-base-300">
                        Email address
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="rounded-xl shadow-none"
                          type="email"
                          placeholder="test@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* password  */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center justify-between text-base-300">
                        <span>Password</span>
                        <button
                          type="button"
                          className="flex items-center gap-x-1"
                          onClick={() => setIsShown(!isShown)}
                        >
                          {!isShown ? (
                            <>
                              <IconEye size={16} />
                              <span>Show</span>
                            </>
                          ) : (
                            <>
                              <IconEyeOff size={16} />
                              <span>Hide</span>
                            </>
                          )}
                        </button>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type={isShown ? "text" : "password"}
                          className="rounded-xl shadow-none"
                          placeholder="******"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="mt-2 w-full rounded-full">
                  Sign in
                </Button>
              </form>
            </Form>

            <div className="my-4 flex items-center gap-x-4">
              <Separator className="shrink" />
              <span>OR</span>
              <Separator className="shrink" />
            </div>

            <Button
              variant="light"
              type="submit"
              className="mt-2 w-full rounded-full border shadow-none"
            >
              <span>Continue with Google</span>
            </Button>

            <div className="mt-4">
              <span>By continuing, you agree to the</span>{" "}
              <Link href="/login" className="underline underline-offset-2">
                Terms of use and Privacy Policy.
              </Link>
            </div>
          </div>

          {/* logo section  */}
          <div className="col-span-8 flex flex-col items-center justify-center">
            <Image
              src="/images/logo2.png"
              alt="logo"
              height={378}
              width={686}
              className="h-[378px] w-[686px]"
            />
            <h1 className="ml-20 max-w-[686px] text-[80px] leading-[85px] text-primary-light">
              Horizon Welfare Orgainasation
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
}