import { ToggleTheme } from "@/components/toggle-theme/toggle-theme";
import { Separator } from "@/components/ui/separator";
import { Instagram } from "lucide-react";
import { memo } from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-background pb-8 text-foreground">
      <Separator className="mb-5" />
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="space-y-4">
            <h2 className="text-lg font-bold">Mapeando Dados Tecendo Redes</h2>
            <p className="text-muted-foreground">
              Trabalhando para combater a violência contra a mulher através da
              informação e apoio.
            </p>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-foreground hover:text-primary"
              aria-label="Siga-nos no Instagram"
            >
              <Instagram size={20} />
              <span>Siga-nos no Instagram</span>
            </a>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Navegação</h3>
            <nav className="space-y-2">
              <div>
                <NavLink to="/">Página Inicial</NavLink>
              </div>

              <div>
                <NavLink to="/buscar-ajuda">Locais de Ajuda</NavLink>
              </div>
              <div>
                <NavLink to="/fale-conosco">Fale Conosco</NavLink>
              </div>
              <div>
                <NavLink to="/sobre">Sobre</NavLink>
              </div>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Preferências</h3>
            <div className="flex items-center space-x-2">
              <span className="text-muted-foreground">Tema:</span>
              <ToggleTheme />
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4">
          <Separator className="mb-4" />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mapeando Dados Tecendo Redes. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
