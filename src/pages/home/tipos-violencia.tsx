import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Hammer, MessageCircle, UserX, Wallet } from "lucide-react";

export default function TiposViolencia() {
  return (
    <section id="tipos-violencia" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Tipos de Violência
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Hammer className="mr-2 h-6 w-6 text-primary" />
                Violência Física
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
              Esse tipo de violência é entendido como qualquer conduta que ofenda a integridade ou saúde corporal da mulher através de uso de força física como espancamento, atirar objetos, sacudir ou apertar os braços, estrangulamento ou sufocamento, lesões com objetos cortantes, ferimentos por queimaduras ou armas de fogo, tortura.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Brain className="mr-2 h-6 w-6 text-primary" />
                Violência Psicológica
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
              É considerada qualquer conduta que cause dano emocional e diminuição da autoestima; prejudique e perturbe o pleno desenvolvimento da mulher; ou vise degradar ou controlar suas ações, comportamentos, crenças e decisões. A violência psicológica é praticada por meio de ameaças, constrangimento, manipulação, proibição de ver familiares e amigos, chantagem, insultos, etc.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageCircle className="mr-2 h-6 w-6 text-primary" />
                Violência Moral
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
              É um tipo de violência psicológica que ataca a moral da mulher. Qualquer conduta que configure calúnia, difamação ou injúria é uma violência moral. Entre os tipos mais comuns, temos: acusar a mulher de traição, emitir juízos morais sobre a conduta dela, expor a vida íntima, rebaixar a mulher com xingamentos que incidem sobre sua índole, desvalorização da pessoa por sua forma de se vestir.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <UserX className="mr-2 h-6 w-6 text-primary" />
                Violência Sexual
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
              A violência sexual trata-se de qualquer conduta que constranja a mulher a presenciar, manter ou participar de relação sexual não desejada mediante intimidação, ameaça, coação ou uso da força. Esse tipo de violência pode ser identificada em estupro, impedimento da mulher em usar métodos contraceptivos, forçar gravidez, impedir ou anular o exercício dos direitos sexuais da mulher.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Wallet className="mr-2 h-6 w-6 text-primary" />
                Violência Patrimonial
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
              Ela é entendida como qualquer conduta que configure retenção, subtração, destruição parcial ou total de seus objetos, instrumentos de trabalho, documentos pessoais, bens, valores e direitos ou recursos econômicos, incluindo os destinados a satisfazer suas necessidades.
              </p>
            </CardContent>
          </Card>
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Fonte: Portal Geledés
        </p>
      </div>
    </section>
  );
}
