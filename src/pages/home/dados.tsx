import { FileText, Network } from "lucide-react";

export default function Dados() {
  return (
    <section id="dados" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Nossos Dados
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col items-center text-center">
            <FileText className="mb-4 h-12 w-12 text-primary" />
            <h3 className="mb-2 text-xl font-bold">Diagnóstico Semestral</h3>
            <p className="text-muted-foreground">
              Baseado no Diagnóstico Semestral de Violência Doméstica contra as
              Mulheres em Minas Gerais, da Secretaria de Segurança Pública.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Network className="mb-4 h-12 w-12 text-primary" />
            <h3 className="mb-2 text-xl font-bold">Rede de Atendimento</h3>
            <p className="text-muted-foreground">
              Informações sobre os equipamentos que compõem a rede de
              atendimento às mulheres em situação de violência.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
