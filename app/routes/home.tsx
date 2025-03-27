import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home" },
    { name: "Home description", content: "Welcome to Home page!" },
  ];
}

export default function Home() {
  return (
      <div>Home!!</div>
  );
}
