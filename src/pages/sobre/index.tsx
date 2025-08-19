import Layout from "@/components/layouts";
import cover from "@/assets/cover.png";
import { User } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Sobre() {
  return (
    <Layout>
      <main className="container mx-auto px-4">
        <section id="sobre" className="w-full py-12 md:py-24 lg:py-32">
          <div className="flex flex-col items-center gap-4 lg:flex-row">
            <div className="flex-shrink-0">
              <img
                src={cover}
                alt="Logo do projeto"
                className="w-full max-w-lg rounded-lg"
              />
            </div>
            <div className="mx-auto">
              <h2 className="mb-4 text-2xl font-bold">Sobre o Projeto</h2>
              <div className="max-w-2xl leading-relaxed">
                <p className="mb-4">
                  Somos a equipe do Projeto de Extensão "Mapeando dados, tecendo
                  redes" do Campus Araçuaí do Instituto Federal do Norte de
                  Minas Gerais (IFNMG). Nosso objetivo é reunir informações
                  acerca dos dados de violência contra as mulheres no Vale do
                  Jequitinhonha.
                </p>
                <p className="mb-4">
                  A base dos dados coletados é o Diagnóstico Semestral de
                  Violência Doméstica contra as Mulheres em Minas Gerais, da
                  Secretaria de Segurança Pública. Para além desses dados, serão
                  apresentadas informações de quais equipamentos que compõem a
                  rede de atendimento às mulheres nessas situações, bem como os
                  tipos de violência a que as mulheres estão sujeitas.
                </p>
                <p>
                  Queremos democratizar o acesso à informação, garantindo que
                  mulheres, pesquisadores e pesquisadoras, estudantes e pessoas
                  interessadas no assunto encontrem num só lugar, informações
                  sistematizadas e atuais sobre essa problemática no Vale.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Separator />
        <section id="equipe" className="w-full py-6 md:py-8">
          <h2 className="mb-6 text-2xl font-bold text-center">Nossa Equipe</h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              <div className="space-y-3">
                <div className="flex items-start gap-3 py-2 hover:opacity-80 transition-opacity">
                  <User className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-base font-semibold text-foreground">Maria Cristina Silva dos Santos</h3>
                    <p className="text-sm text-muted-foreground">Psicóloga</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 py-2 hover:opacity-80 transition-opacity">
                  <User className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-base font-semibold text-foreground">Marli Pinheiro de Aguilar</h3>
                    <p className="text-sm text-muted-foreground">TAE - Assistente em Administração</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 py-2 hover:opacity-80 transition-opacity">
                  <User className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-base font-semibold text-foreground">João Luiz Jacintho</h3>
                    <p className="text-sm text-muted-foreground">Professor EBTT</p>
                    <p className="text-xs text-muted-foreground">
                      Engenheiro Agrimensor Me. Engenharia Agrícola e Ambiental
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 py-2 hover:opacity-80 transition-opacity">
                  <User className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-base font-semibold text-foreground">Ana Carolina Rodrigues</h3>
                    <p className="text-sm text-muted-foreground">Professora EBTT Informática</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 py-2 hover:opacity-80 transition-opacity">
                  <User className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-base font-semibold text-foreground">Afranio Caires</h3>
                    <p className="text-sm text-muted-foreground">Estudante e desenvolvedor de software</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 py-2 hover:opacity-80 transition-opacity">
                  <User className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-base font-semibold text-foreground">Lizian Maria Silva Martins</h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      Colaboradora Externa - Assistente Social, Mestre em Estudos Rurais
                    </p>
                    <div className="space-y-0.5 text-xs text-muted-foreground">
                      <p>• Assessora Temática de Mulheres do Mandato Dep. Estadual Jean Freire</p>
                      <p>• Presidente do Conselho Municipal dos Direitos das Mulheres de Araçuaí</p>
                      <p>• Coordenadora do Fórum Regional de Enfrentamento à Violência contra as Mulheres</p>
                      <p>• Presidente da AMOVAJE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
