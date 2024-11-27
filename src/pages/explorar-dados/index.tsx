import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cityData, ServiceData } from "@/constants/dados";
import Layout from "@/components/layouts";
import { BadgeIcon as Police, Building2, Hospital, Search } from "lucide-react";

export default function ExplorarDados() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = cityData.filter((item) =>
    item.cidade.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const renderServiceData = (data: ServiceData | ServiceData[] | null) => {
    if (!data) return <p>Não disponível</p>;
    if (Array.isArray(data)) {
      return data.map((item, index) => (
        <div key={index} className="mb-2">
          {item.endereco && (
            <p>
              <strong>Endereço:</strong> {item.endereco}
            </p>
          )}
          {item.telefone && (
            <p>
              <strong>Telefone:</strong> {item.telefone}
            </p>
          )}
          {item.email && (
            <p>
              <strong>Email:</strong> {item.email}
            </p>
          )}
        </div>
      ));
    }
    return (
      <>
        {data.endereco && (
          <p>
            <strong>Endereço:</strong> {data.endereco}
          </p>
        )}
        {data.telefone && (
          <p>
            <strong>Telefone:</strong> {data.telefone}
          </p>
        )}
        {data.email && (
          <p>
            <strong>Email:</strong> {data.email}
          </p>
        )}
      </>
    );
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-6 text-3xl font-bold text-primary">Explorar dados</h1>

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

        <div className="relative mb-6">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
          <Input
            type="text"
            placeholder="Pesquisar por cidade"
            value={searchTerm}
            onChange={handleSearch}
            className="pl-8"
          />
        </div>

        <div className="grid grid-cols-1 gap-6">
          {filteredData.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{item.cidade}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div>
                    <h3 className="mb-2 flex items-center font-bold">
                      <Police className="mr-2 h-5 w-5" />
                      Polícia Militar
                    </h3>
                    {renderServiceData(item.policia_militar)}
                  </div>
                  <div>
                    <h3 className="mb-2 flex items-center font-bold">
                      <Police className="mr-2 h-5 w-5" />
                      Polícia Civil
                    </h3>
                    {renderServiceData(item.policia_civil)}
                  </div>
                  <div>
                    <h3 className="mb-2 flex items-center font-bold">
                      <Building2 className="mr-2 h-5 w-5" />
                      CRAS
                    </h3>
                    {renderServiceData(item.cras)}
                  </div>
                  <div>
                    <h3 className="mb-2 flex items-center font-bold">
                      <Building2 className="mr-2 h-5 w-5" />
                      CREAS
                    </h3>
                    {renderServiceData(item.creas)}
                  </div>
                  <div>
                    <h3 className="mb-2 flex items-center font-bold">
                      <Hospital className="mr-2 h-5 w-5" />
                      Hospital/UPA
                    </h3>
                    {renderServiceData(item.hospitais_upa)}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
