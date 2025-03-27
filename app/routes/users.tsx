import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Users" },
    { name: "Users description", content: "Welcome to Users page!" },
  ];
}
export default function Users() {
  return <>Users</>;
}
