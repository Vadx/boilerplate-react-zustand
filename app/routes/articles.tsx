import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Articles" },
    { name: "Articles description", content: "Welcome to Articles page!" },
  ];
}
export default function Articles() {
  return <>Articles</>;
}
