import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Contato() {
  return (
    <section
      id="contato"
      className="w-full bg-background py-12 md:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Entre em Contato
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg">
              Tem dúvidas ou sugestões? Entre em contato conosco para mais
              informações sobre o projeto ou para contribuir com nossa
              iniciativa.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <Button asChild className="w-full">
              <Link to="/fale-conosco">Fale conosco</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
