import { BlurSection } from "@/components/ui/blur-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Hammer, MessageCircle, UserX, Wallet } from "lucide-react"

export default function TiposViolencia() {
  return (
    <BlurSection bottomBlur>
      <section id="tipos-violencia" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
            Tipos de Violência
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="mr-3 rounded-full bg-red-500 p-2">
                    <Hammer className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-red-700 dark:text-red-300">Violência Física</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Esse tipo de violência é entendido como qualquer conduta que ofenda a integridade ou saúde corporal da
                  mulher através de uso de força física como espancamento, atirar objetos, sacudir ou apertar os braços,
                  estrangulamento ou sufocamento, lesões com objetos cortantes, ferimentos por queimaduras ou armas de
                  fogo, tortura.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="mr-3 rounded-full bg-purple-500 p-2">
                    <Brain className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-purple-700 dark:text-purple-300">Violência Psicológica</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  É considerada qualquer conduta que cause dano emocional e diminuição da autoestima; prejudique e
                  perturbe o pleno desenvolvimento da mulher; ou vise degradar ou controlar suas ações, comportamentos,
                  crenças e decisões. A violência psicológica é praticada por meio de ameaças, constrangimento,
                  manipulação, proibição de ver familiares e amigos, chantagem, insultos, etc.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="mr-3 rounded-full bg-orange-500 p-2">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-orange-700 dark:text-orange-300">Violência Moral</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  É um tipo de violência psicológica que ataca a moral da mulher. Qualquer conduta que configure
                  calúnia, difamação ou injúria é uma violência moral. Entre os tipos mais comuns, temos: acusar a
                  mulher de traição, emitir juízos morais sobre a conduta dela, expor a vida íntima, rebaixar a mulher
                  com xingamentos que incidem sobre sua índole, desvalorização da pessoa por sua forma de se vestir.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950/20 dark:to-pink-900/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="mr-3 rounded-full bg-pink-500 p-2">
                    <UserX className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-pink-700 dark:text-pink-300">Violência Sexual</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  A violência sexual trata-se de qualquer conduta que constranja a mulher a presenciar, manter ou
                  participar de relação sexual não desejada mediante intimidação, ameaça, coação ou uso da força. Esse
                  tipo de violência pode ser identificada em estupro, impedimento da mulher em usar métodos
                  contraceptivos, forçar gravidez, impedir ou anular o exercício dos direitos sexuais da mulher.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/20 dark:to-emerald-900/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="mr-3 rounded-full bg-emerald-500 p-2">
                    <Wallet className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-emerald-700 dark:text-emerald-300">Violência Patrimonial</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Ela é entendida como qualquer conduta que configure retenção, subtração, destruição parcial ou total
                  de seus objetos, instrumentos de trabalho, documentos pessoais, bens, valores e direitos ou recursos
                  econômicos, incluindo os destinados a satisfazer suas necessidades.
                </p>
              </CardContent>
            </Card>
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">Fonte: Portal Geledés</p>
        </div>
      </section>
    </BlurSection>
  )
}
