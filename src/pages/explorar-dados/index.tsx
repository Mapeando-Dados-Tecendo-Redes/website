import Layout from "@/components/layouts";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { dados } from "@/constants/dados";

function ExplorarDados() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState(dados);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filteredData = dados.filter(
      (item) =>
        item.name.toLowerCase().includes(term) ||
        item.location.toLowerCase().includes(term),
    );
    setData(filteredData);
  };
  return (
    <>
      <Layout>
        <main className="container mx-auto px-4 py-8">
          <h1 className="mb-6 text-3xl font-bold">Explorar dados</h1>

          <p className="mb-6 text-muted-foreground">
            Você pode encontrar dados sobre sua região usando o mapa abaixo ou
            pesquisando na lista de serviços disponíveis.
          </p>

          <div className="mb-8">
            <iframe
              src="https://qgiscloud.com/joaojacintho/efas/?l=Escola%20Fam%C3%ADlia%20Agr%C3%ADcola%2CMinas%20Gerais&bl=Aerial&t=efas&e=-5612597%2C-3321934%2C-4412240%2C-1083100"
              width="100%"
              height="600"
              className="rounded border"
            ></iframe>
          </div>

          <Input
            type="text"
            placeholder="Pesquisar por nome ou localização"
            value={searchTerm}
            onChange={handleSearch}
            className="mb-6"
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    <strong>Telefone:</strong> {item.phone}
                  </p>
                  <p>
                    <strong>Localização:</strong> {item.location}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </Layout>
    </>
  );
}

export default ExplorarDados;
