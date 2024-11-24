import Layout from "@/components/layouts";
import cover from "@/assets/cover.png";

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
      </main>
    </Layout>
  );
}
