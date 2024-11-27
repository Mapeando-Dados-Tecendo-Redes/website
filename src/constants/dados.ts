export interface ServiceData {
  endereco?: string;
  telefone?: string;
  email?: string;
}

export interface CityData {
  cidade: string;
  policia_militar: ServiceData;
  policia_civil: ServiceData | null;
  cras: ServiceData | ServiceData[];
  creas: ServiceData | null;
  hospitais_upa: ServiceData | null;
}

export const cityData: CityData[] = [
  {
    cidade: "Araçuaí",
    policia_militar: {
      endereco: "R. Juíz de Paz Pedro de Carvalho, 177",
      telefone: "190",
    },
    policia_civil: {
      endereco: "Praça Rui Barbosa, 26 - Centro",
      telefone: "197",
    },
    cras: [
      {
        endereco: "R. Vitória, 47 - Nova Terra",
        telefone: "33 3731-2511",
      },
      {
        endereco: "Av. Dr. Nuno Melo, 78 - Centro",
      },
    ],
    creas: {
      endereco: "R. São Geraldo, 726 - Planalto",
      email: "ad.sagi@mds.gov.br",
    },
    hospitais_upa: {
      endereco: "R. Amazonas, 255 - Nova Terra",
      telefone: "33 3731-1333",
    },
  },
  {
    cidade: "Berilo",
    policia_militar: {
      endereco: "Av. Juscelino Kubitschek, 648",
      telefone: "190",
    },
    policia_civil: {
      endereco: "Av. JK, 107 - Planaltino",
      telefone: "197",
    },
    cras: {
      endereco: "R. Vereador Teodoro Vieira de Souza, 1 - Dom Silvestre",
      email: "crasberilomg@hotmail.com",
    },
    creas: null,
    hospitais_upa: {
      endereco: "R. Padre Pedro Heredes, S/N - São Francisco",
      telefone: "33 3737-1175",
    },
  },
  {
    cidade: "Coronel Murta",
    policia_militar: {
      endereco: "Av. Celso Murta, 115",
      telefone: "190",
    },
    policia_civil: {
      endereco: "R. Rita Murta, 117 - Centro",
      telefone: "33 3751-1296",
    },
    cras: {
      endereco: "R. Severo Leão, 63 - Itaporé Velho",
      email: "coronelmurta.mg.gov.br",
    },
    creas: null,
    hospitais_upa: {
      endereco: "R. Lufa - Acari",
      telefone: "33 3735-1284",
    },
  },
  {
    cidade: "Francisco Badaró",
    policia_militar: {
      endereco: "R. Nova",
      telefone: "33 3738-1190",
    },
    policia_civil: {
      endereco: "R. Direita, S/Nº - Centro",
      telefone: "33 3764-1170",
    },
    cras: {
      endereco: "R. Costa Melo, 10 - Centro",
      email: "cras@franciscobadaro.mg.gov.br",
    },
    creas: null,
    hospitais_upa: {
      endereco: "Av. Santa Cruz, 488",
      telefone: "33 3733-1589",
    },
  },
  {
    cidade: "Itinga",
    policia_militar: {
      endereco: "R. João Menezes, 301",
      telefone: "190",
    },
    policia_civil: {
      endereco: "Av. Marechal Rondon, 191 - Centro",
      telefone: "197",
    },
    cras: {
      endereco: "Av. Brasil, 5 - Centro",
      email: "cras@itinga.mg.gov.br",
    },
    creas: null,
    hospitais_upa: {
      endereco: "Av. Santa Cruz, 488 - Planalto",
      telefone: "33 3733-1589",
    },
  },
  {
    cidade: "Jenipapo de Minas",
    policia_militar: {
      endereco: "R. Setúbal, 352",
      telefone: "190",
    },
    policia_civil: null,
    cras: {
      endereco: "R. Pouso, 277 - Lagoinha",
      email: "crasjenipa@yahoo.com.br",
      telefone: "98 8267-89698",
    },
    creas: null,
    hospitais_upa: {
      endereco: "R. Costa, 1020 - Lagoinha",
      telefone: "33 3738-9237",
    },
  },
  {
    cidade: "José Gonçalves de Minas",
    policia_militar: {
      endereco: "R. Ana Santos Carvalho, 34",
      telefone: "190",
    },
    policia_civil: null,
    cras: {
      endereco: "R. Erestal de Fátima Sales, 26 - Centro",
      email: "crasjgm2017@gmail.com",
    },
    creas: null,
    hospitais_upa: null,
  },
  {
    cidade: "Virgem da Lapa",
    policia_militar: {
      endereco: "Av. Brasil, 370",
      telefone: "190",
    },
    policia_civil: {
      endereco: "Av. Brasil, 397 - Centro",
      telefone: "33 3736-1227",
    },
    cras: {
      endereco: "R. Pará, 41 - Novo Horizonte",
      email: "assistenciasocial@virgemdalapa.mg.gov.br",
    },
    creas: null,
    hospitais_upa: {
      endereco: "Praça Minas Gerais, 85 - Belo Horizonte",
      telefone: "33 99824-6930",
    },
  },
  {
    cidade: "Itaobim",
    policia_militar: {
      endereco: "Av. Santo Antonio, 55",
      telefone: "190",
    },
    policia_civil: {
      endereco:
        "R. Sen. Lucio Bittencourt, Av. Santo Antônio, 350 - Bairro Santo Antonio",
      telefone: "197",
    },
    cras: [
      {
        endereco: "17 de Julho, 247 - Vila Nova",
        email: "social@itaobim.mg.gov.br",
      },
      {
        endereco: "R. Max Machado, S/N - Centro",
        email: "social@itaobim.mg.gov.br",
      },
    ],
    creas: {
      endereco: "Rua Piaui, 231 – Centro",
    },
    hospitais_upa: {
      endereco: "R. Minas Novas, 387 - São Jorge",
      telefone: "33 3734-1258",
    },
  },
];
