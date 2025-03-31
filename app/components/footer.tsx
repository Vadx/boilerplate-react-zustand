import { NavLink } from "react-router";
import Logo from "./logo";

interface FooterProps {}

const footerNavLinks = [
  { name: "First Link", path: "/privacy" },
  { name: "Second Link", path: "/terms" },
  { name: "Third Link", path: "/contact" },
  { name: "Fourth Link", path: "/about" },
  { name: "Fifth Link", path: "/help" },
];
const socialLinks = [
  { name: "Twitter", url: "https://twitter.com" },
  { name: "GitHub", url: "https://github.com" },
  { name: "LinkedIn", url: "https://linkedin.com" },
];

interface FooterNavProps {
  name: string;
  path: string;
  title?: string;
}

const FooterNav = ({
  links,
  title,
}: {
  links: FooterNavProps[];
  title?: string;
}) => {
  return (
    <>
      {title && (
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          {title}
        </h2>
      )}

      <nav className="grid grid-cols-1 gap-1 sm:mb-5">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold"
                : "text-gray-500 hover:text-blue-500"
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </>
  );
};

interface FooterProps {
  name: string;
  url: string;
}

const SocialLinks = ({ links }: { links: FooterProps[] }) => {
  return (
    <div className="flex space-x-4 text-sm">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-500"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font w-full flex flex-col mt-auto shadow-md">
      <div className="container px-5 py-10 space-y-5 md:space-y-0 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="max-w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left flex-1">
          <Logo className="md:justify-start" />
          <p className="mt-2 text-sm text-gray-500">
            Boilerplate is a simple and powerful boilerplate for building
          </p>
        </div>
        <div className="flex space-x-0 md:space-x-7 space-y-5 md:space-y-0 flex-auto justify-center items-center text-center md:items-start md:text-left md:justify-end md:flex-row flex-col">
          <div>
            <FooterNav links={footerNavLinks} title="Category First" />
          </div>
          <div>
            <FooterNav links={footerNavLinks} title="Category Second" />
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2025 Boilerplate. All rights reserved.
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <SocialLinks links={socialLinks} />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
