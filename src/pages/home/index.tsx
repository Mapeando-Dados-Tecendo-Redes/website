import Layout from "@/components/layouts";
import TiposViolencia from "./tipos-violencia";
import Dados from "./dados";
import { Separator } from "@/components/ui/separator";
import Contato from "./contato";
import Apresentacao from "./apresentacao";
import { ImageGallery } from "./galery";

function Home() {
  return (
    <>
      <Layout>
        <main>
          <Apresentacao />
          <Separator />
          <ImageGallery />
          <Separator />
          <Dados />
          <Separator />
          <TiposViolencia />
          <Separator />
          <Contato />
        </main>
      </Layout>
    </>
  );
}

export default Home;
