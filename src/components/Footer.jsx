import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-gray-200 pt-8 pb-4 text-center text-sm text-gray-500">
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://github.com/mhserrao"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-onyx transition"
        >
          <FaGithub size={18} />
        </a>
      </div>

      <p>
        © {new Date().getFullYear()} mhserrao. Built by me, with credit to{" "}
        <a
          href="https://github.com/shaqdeff/Portfolio-Template"
          className="underline hover:text-onyx"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shaq
        </a>{" "}
        for the original template.
      </p>
    </footer>
  );
};

export default Footer;
