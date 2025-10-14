"use client";

import { useRouter } from "next/navigation";

export function useClientRouter() {
  const router = useRouter();

  const goHome = () => router.push("/");
  const goBack = () => router.back();
  const goTo = (path: string) => router.push(path);

  return { goHome, goBack, goTo };
}
