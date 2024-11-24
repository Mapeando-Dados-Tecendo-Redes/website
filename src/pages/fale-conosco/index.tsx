import Layout from "@/components/layouts";

function Contato() {
  return (
    <>
      <Layout>
        <main className="container mx-auto px-4 py-12">
          <section className="max-w-2xl leading-relaxed">
            <h2 className="mb-4 text-2xl font-bold">Fale Conosco</h2>
            <p className="mb-4">
              Este espaço é destinado para entrar em contato com a equipe por
              trás deste site, do projeto e das pesquisas realizadas. Por favor,
              tenha em mente que{" "}
              <strong>
                não realizamos atendimentos diretos, nem recebemos denúncias ou
                relatos de violência.
              </strong>
            </p>
            <p className="mb-4">
              Se você é vítima de violência ou deseja reportar alguma situação,
              recomendamos buscar diretamente os canais oficiais de denúncia ou
              os equipamentos que compõem a rede de atendimento às mulheres em
              sua região, que estão disponibilizados no site.
            </p>
            <p>
              Para entrar em contato conosco sobre questões relacionadas ao site
              ou ao projeto, envie um e-mail para:{" "}
              <a
                href="mailto:contato@exemplo.com"
                className="text-primary underline"
              >
                contato@exemplo.com
              </a>
            </p>
          </section>
        </main>
      </Layout>
    </>
  );
}

export default Contato;
