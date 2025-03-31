import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Articles" },
    { name: "Articles description", content: "Welcome to Articles page!" },
  ];
}
export default function Articles() {
  return (
    <div>
      <h1>Articles</h1>
      <ul>
        <li>Article 1</li>
        <li>Article 2</li>
        <li>Article 3</li>
        <li>Article 4</li>
        <li>Article 5</li>
        <li>Article 6</li>
        <li>Article 7</li>
        <li>Article 8</li>
        <li>Article 9</li>
        <li>Article 10</li>
        <li>Article 11</li>
      </ul>
    </div>
  );
}
