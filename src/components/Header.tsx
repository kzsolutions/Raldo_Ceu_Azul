import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { navItems } from "../data/nav";
import { contacts } from "../data/contacts";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-white/95 shadow-soft backdrop-blur"
          : "bg-white/80 backdrop-blur"
      }`}
    >
      <div className="container-site flex h-16 items-center justify-between gap-4 sm:h-20">
        <Logo />

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.to} className="relative group">
                {item.children ? (
                  <>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                          isActive ? "text-brand-blue" : "text-ink hover:text-brand-blue"
                        }`
                      }
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" aria-hidden="true" />
                    </NavLink>
                    <div className="invisible absolute left-0 top-full w-64 translate-y-2 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      <ul className="overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-lift">
                        {item.children.map((child) => (
                          <li key={child.to}>
                            <Link
                              to={child.to}
                              className="block rounded-xl px-4 py-2.5 text-sm text-ink transition-colors hover:bg-surface hover:text-brand-blue"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                        isActive ? "text-brand-blue" : "text-ink hover:text-brand-blue"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button to="/contactos" variant="primary" size="md">
            Fale connosco
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line text-brand-navy transition-colors hover:bg-surface lg:hidden"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
          aria-controls="menu-movel"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>

      <div
        id="menu-movel"
        className={`lg:hidden ${mobileOpen ? "block" : "hidden"}`}
      >
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-line bg-white px-5 pb-8 pt-4">
          <nav aria-label="Navegação móvel">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.to}>
                  {item.children ? (
                    <div>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-medium text-ink transition-colors hover:bg-surface"
                        aria-expanded={openGroup === item.label}
                        onClick={() =>
                          setOpenGroup((current) => (current === item.label ? null : item.label))
                        }
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-5 w-5 transition-transform duration-300 ${
                            openGroup === item.label ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                      {openGroup === item.label && (
                        <ul className="mb-1 ml-2 flex flex-col gap-1 border-l border-line pl-3">
                          {item.children.map((child) => (
                            <li key={child.to}>
                              <Link
                                to={child.to}
                                className="block rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-surface hover:text-brand-blue"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                          isActive ? "bg-brand-blue-soft text-brand-blue" : "text-ink hover:bg-surface"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-6 flex flex-col gap-3">
            <Button to="/contactos" variant="primary" size="lg" className="w-full">
              Fale connosco
            </Button>
            <a
              href={contacts.phonePrimary.href}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-semibold text-brand-navy transition-colors hover:bg-surface"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {contacts.phonePrimary.label}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
