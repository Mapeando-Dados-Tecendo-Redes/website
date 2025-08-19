"use client"

import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { BlurSection } from "@/components/ui/blur-section"
import img from "../../assets/mulheres-politica.png"

export default function Apresentacao() {
  return (
    <BlurSection topBlur>
      <div
        className="relative w-full py-32 sm:py-48 lg:py-56 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${img})`,
        }}
      >
        <div className="mx-auto max-w-2xl text-center relative z-10">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Mapeando dados, tecendo redes</h1>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            Reunindo informações sobre violência contra as mulheres no Vale do Jequitinhonha e mapeando a rede de
            atendimento.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/explorar-dados">Explorar Dados</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              <Link to="/sobre" className="text-sm font-semibold leading-6">
                Saiba Mais <span aria-hidden="true">→</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </BlurSection>
  )
}
