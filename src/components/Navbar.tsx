interface NavbarProps {
  onLinkClick: (id: string) => void;
}

export default function Navbar({ onLinkClick }: NavbarProps) {
  const links = [
    { label: 'About', target: 'about' },
    { label: 'Price', target: 'pricing' },
    { label: 'Projects', target: 'projects' },
    { label: 'Contact', target: 'contact' },
  ];

  return (
    <nav className="flex justify-between items-center w-full px-6 md:px-10 pt-6 md:pt-8">
      {links.map((link) => (
        <button
          key={link.label}
          onClick={() => onLinkClick(link.target)}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70 text-sm md:text-lg lg:text-[1.4rem] focus:outline-none"
        >
          {link.label}
        </button>
      ))}
    </nav>
  );
}
