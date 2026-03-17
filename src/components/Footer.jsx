const Footer = () => {
  return (
    <footer className="border-t border-slate-800 px-6 py-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 text-sm text-slate-400 md:flex-row">
        <p>© {new Date().getFullYear()} Meghana Pasupuleti</p>
        <p>Built with React, Vite, TailwindCSS, and Framer Motion</p>
      </div>
    </footer>
  );
};

export default Footer;
