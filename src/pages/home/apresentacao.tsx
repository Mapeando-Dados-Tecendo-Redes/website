import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Apresentacao() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Mapeando dados, tecendo redes
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Reunindo informações sobre violência contra as mulheres no Vale do
              Jequitinhonha e mapeando a rede de atendimento.
            </p>
          </div>
          <div className="space-x-4">
            <Button className="bg-primary text-white">
              <Link to="/explorar-dados">Explorar Dados</Link>
            </Button>
            <Button variant="outline">
              <Link to="/sobre">Saiba Mais</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
