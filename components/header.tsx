import { NavLink } from "@/components/NavLink";


export default function Header() {
  const navLinks = [
    { link: "/jobs", text: "Jobs" },
    { link: "/liked", text: "Favorites" },
    { link: "/create-profile", text: "Register" },
  ];
  return (
    <header className="container mx-auto bg-slate-800 flex justify-between px-3">
      <nav className="flex">
        {" "}
        {navLinks.map((link) => {
          return <NavLink {...link} key={link.link} />;
        })}
      </nav>
    </header>
  );
}
