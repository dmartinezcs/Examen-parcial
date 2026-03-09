"use client";

import { useRouter } from "next/navigation";

export default function backButton() {
  const router = useRouter();

  const handleClick = async () => {
    router.back();
  };

  return (
    <button onClick={handleClick}>
      De vuelta a la principal
    </button>
  );
}