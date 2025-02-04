"use client";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BlurSection } from "@/components/ui/blur-section";

export default function Apresentacao() {
  return (
    <BlurSection topBlur>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="dark: text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Mapeando dados, tecendo redes
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Reunindo informações sobre violência contra as mulheres no Vale do
            Jequitinhonha e mapeando a rede de atendimento.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link to="/explorar-dados">Explorar Dados</Link>
            </Button>
            <Button asChild variant="outline">
              <Link
                to="/sobre"
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              >
                Saiba Mais <span aria-hidden="true">→</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </BlurSection>
  );
}
