import Link from "next/link";

export default function NavLink({ item, onClick, className }) {
  return item.link.includes("http") ? (
    <a
      className={`${className} w-full text-left leading-[2rem]`}
      href={item.link}
      onClick={onClick}
      rel="noreferrer"
      target="_blank"
    >
      {item.text}
    </a>
  ) : (
    <Link
      scroll={false}
      className={`${className} w-full text-left leading-[2rem]`}
      href={item.link}
      onClick={onClick}
    >
      {item.text}
    </Link>
  );
}
