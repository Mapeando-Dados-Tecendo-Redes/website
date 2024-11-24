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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci consequatur nam qui natus ipsum laudantium molestiae
                ducimus vel itaque eaque omnis, repellat impedit ullam iure
                pariatur illo consectetur cupiditate veniam.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis cupiditate dolores pariatur ipsam et sint id
                exercitationem qui dolore odio, facere maiores reprehenderit
                deleniti expedita, placeat sapiente! Vel, adipisci neque!
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                earum quod placeat corporis ea voluptatem. Maxime assumenda
                officiis delectus accusantium dolore molestias iure, quia
                cupiditate earum labore natus magnam repellendus!
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
                distinctio dolore ea ratione. Molestiae repellendus ducimus ex
                at! Harum tempore nemo laudantium veniam asperiores! Deserunt
                repellendus labore quod nostrum necessitatibus.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi molestias pariatur dolorum facilis odit dignissimos
                eius aperiam obcaecati. Facere dolorum saepe, ipsa libero
                tempora expedita consectetur itaque earum repudiandae alias.
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
