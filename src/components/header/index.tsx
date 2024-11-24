import { useState, useEffect, memo } from "react";
import { Menu, ShieldAlert } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function Header() {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <TooltipProvider>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex min-h-14 max-w-screen-2xl items-center justify-between px-4">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0">
                <MobileNav />
              </SheetContent>
            </Sheet>
            <Link to="/" className="mr-6 flex items-center space-x-2">
              <img src={logo} className="w-32" />
            </Link>
          </div>
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            <NavLink
              to="/explorar-dados"
              className={({ isActive }) =>
                isActive ? "opacity-80" : "opacity-100 hover:opacity-80"
              }
            >
              Explorar dados
            </NavLink>
            <NavLink
              to="/fale-conosco"
              className={({ isActive }) =>
                isActive ? "opacity-80" : "opacity-100 hover:opacity-80"
              }
            >
              Fale conosco
            </NavLink>
            <NavLink
              to="/sobre"
              className={({ isActive }) =>
                isActive ? "opacity-80" : "opacity-100 hover:opacity-80"
              }
            >
              Sobre
            </NavLink>
          </nav>
          <div>
            <Tooltip open={showTooltip}>
              <TooltipTrigger asChild>
                <a href="http://google.com">
                  <Button
                    variant="destructive"
                    className="inline-flex items-center"
                  >
                    <ShieldAlert className="mr-1 h-4 w-4" />
                    <span>Sair</span>
                  </Button>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Clique para sair rapidamente do site</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </header>
    </TooltipProvider>
  );
}

function MobileNav() {
  return (
    <div className="flex flex-col space-y-3">
      <Link to="/" className="text-sm font-bold">
        Mapeando Dados, Tecendo Redes
      </Link>
      <nav className="flex flex-col space-y-3">
        <NavLink
          to="/buscar-ajuda"
          className={({ isActive }) =>
            isActive ? "opacity-80" : "opacity-100 hover:opacity-80"
          }
        >
          Locais de ajuda
        </NavLink>
        <NavLink
          to="/fale-conosco"
          className={({ isActive }) =>
            isActive ? "opacity-80" : "opacity-100 hover:opacity-80"
          }
        >
          Fale conosco
        </NavLink>
        <NavLink
          to="/sobre"
          className={({ isActive }) =>
            isActive ? "opacity-80" : "opacity-100 hover:opacity-80"
          }
        >
          Sobre
        </NavLink>
      </nav>
    </div>
  );
}

export default memo(Header);
