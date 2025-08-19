import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Scale } from "lucide-react"

export default function FAQPage() {
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-primary" />
              Perguntas Frequentes
            </CardTitle>
            <CardDescription>Informações importantes sobre a Lei Maria da Penha e como buscar ajuda</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  Toda violência doméstica contra a mulher é crime?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <p>
                      <strong>Sim</strong>, a violência contra as mulheres foi considerada crime, a partir da criação da
                      Lei Maria da Penha, em 07 de Agosto de 2006.
                    </p>
                    <div>
                      <p className="font-semibold mb-2">São estabelecidos 5 tipos de violência:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Violência física</li>
                        <li>Violência moral</li>
                        <li>Violência sexual</li>
                        <li>Violência psicológica</li>
                        <li>Violência patrimonial</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">O que a Lei Maria da Penha prevê?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    A principal determinação da Lei é a <strong>Medida Protetiva</strong>, que prevê o afastamento do
                    agressor do convívio com mulher, proibindo ele de aproximar da vítima.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  Se estou passando por situações de violência, onde posso procurar ajuda?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-800 mb-2">Se a violência estiver acontecendo AGORA:</h4>
                      <p className="text-red-700">
                        <strong>Ligue 190</strong> para a Polícia Militar. Funciona 24 horas e possui serviço
                        específico: Patrulha de Prevenção à Violência Doméstica (PPVD).
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2">
                        Se não há violência física no momento, mas ainda há outras violências:
                      </h4>
                      <ul className="text-blue-700 space-y-1">
                        <li>• Batalhão da Polícia Militar</li>
                        <li>• Delegacia de Polícia Civil</li>
                        <li>• Centro de Referência Especializado de Assistência Social (CREAS)</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  Se conheço alguém que está sofrendo violência doméstica, o que posso fazer?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-2">Como ajudar:</h4>
                      <ul className="text-green-700 space-y-1">
                        <li>• Motivá-la a romper o silêncio</li>
                        <li>• Incentivá-la a buscar ajuda e denunciar</li>
                        <li>
                          • <strong>Não julgar, mas acolher!</strong>
                        </li>
                        <li>
                          • <strong>A culpa nunca é da vítima!</strong>
                        </li>
                      </ul>
                    </div>
                    <p>
                      Se mesmo assim ela não quiser, você pode fazer uma <strong>denúncia anônima</strong>.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">Como funciona a denúncia anônima?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Você tem o direito de fazer uma denúncia <strong>sem se identificar</strong>! Basta informar o nome
                    e endereço da vítima, ligando para a Polícia Militar ou para o CREAS.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  Onde posso encontrar apoio psicossocial para buscar forças para enfrentar à violência?
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    No <strong>Centro de Referência Especializado de Assistência Social (CREAS)</strong>.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left">
                  Onde posso encontrar auxílio jurídico gratuito?
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    <li>
                      • <strong>Centro de Referência Especializado de Assistência Social (CREAS)</strong>
                    </li>
                    <li>
                      • <strong>Defensoria Pública</strong> - funcionando no Fórum de Justiça
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left">
                  A Lei Maria da Penha se enquadra somente na violência entre um casal, homem e mulher?
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    <strong>Não</strong>, ela abrange também casos de:
                  </p>
                  <ul className="mt-2 space-y-1">
                    <li>• Violência entre mãe e filho</li>
                    <li>• Violência entre um tio e uma sobrinha</li>
                    <li>• Violência entre um casal lésbico</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
