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
  {
    cidade: "Monte Formoso",
    policia_militar: {
      endereco: "R. José Pinheiro, 292",
      telefone: "190",
    },
    policia_civil: null,
    cras: {
      endereco: "Alvaro Moura, 36 - centro",
      email: "Cras.pmmf@gmail.com",
    },
    creas: null,
    hospitais_upa: null,
  },
  {
    cidade: "Novo Cruzeiro",
    policia_militar: {
      endereco: "Av. Julio Campos, 219",
      telefone: "190",
    },
    policia_civil: {
      endereco: "R. Nice Maravilha, 43 A - São Bento",
      telefone: "33 3533 1412",
    },
    cras: {
      endereco: "R. Jorge Chaim, 415 - Anastacio Roque",
      email: "crassedenc@gmail.com",
    },
    creas: {
      endereco: "R. Nice Maravilha , 53 - São Bento",
      email: "aiad.sagi@mds.gov.br",
    },
    hospitais_upa: {
      endereco: "Praça Frei Ubaldo, 47 - Centro",
      telefone: "33 3533-1934",
    },
  },
  {
    cidade: "Padre Paraíso",
    policia_militar: {
      endereco: "R. Amazonas, 94",
      telefone: "190",
    },
    policia_civil: {
      endereco: "R. Santa Luzia, 14 - Centro",
      telefone: "33 3534 1211",
    },
    cras: {
      endereco: "R. Olimpo Duarte, 180 - Centro",
      email: "cras@padreparaiso.mg.gov.br",
    },
    creas: {
      endereco: "Rua Aracuai, 259 – Centro",
    },
    hospitais_upa: {
      endereco: "R. Doná Áurea, 2",
      telefone: "33 3534-1210",
    },
  },
  {
    cidade: "Ponto dos Volantes",
    policia_militar: {
      endereco: "R. da Matriz, 126",
      telefone: "190",
    },
    policia_civil: null,
    cras: {
      endereco: "R. CURITIBA, 205, CENTRO",
      email: "cras.pvolantes@gmail.com",
    },
    creas: {
      endereco: "R. Nova, 0 - Centro",
    },
    hospitais_upa: null,
  },
  {
    cidade: "Águas Vermelhas",
    policia_militar: {
      endereco: "Praça Mal. Castelo Branco, 282",
      telefone: "190",
    },
    policia_civil: {
      endereco: "R: São Vicente, 215 -Centro",
      telefone: "33 3755 1203",
    },
    cras: {
      endereco: "R. Sao Vicente, 52- Centro",
      email: "crasaguasv@gmail.com",
    },
    creas: null,
    hospitais_upa: {
      endereco: "R. Uberlândia, S/N",
      telefone: "33 3755-1201",
    },
  },
  {
    cidade: "Cachoeira de Pajéu",
    policia_militar: {
      endereco: "Praça Doutor Freire, 88",
      telefone: "33 3754 1273",
    },
    policia_civil: {
      endereco: "Praça Rui Barbosa, 150 -Centro",
      telefone: "33 3751 1400",
    },
    cras: {
      endereco: "R. Propércio de Almeida, 16 - Centro",
      email: "smas_cpajeu@yahoo.com.br",
    },
    creas: null,
    hospitais_upa: {
      endereco: "Praça Rui Barbosa, S/N - Centro",
    },
  },
  {
    cidade: "Comercinho",
    policia_militar: {
      endereco: "R. Joaquim José dos Reis",
      telefone: "190",
    },
    policia_civil: null,
    cras: {
      endereco: "R. Manoel Rafael Oliveira, 222 - Centro",
      email: "crascomercinho@gmail.com",
    },
    creas: null,
    hospitais_upa: null,
  },
  {
    cidade: "Divisa Alegre",
    policia_militar: {
      endereco: "Av. Ver. Cláudio Alves da Costa",
      telefone: "33 99914 4015",
    },
    policia_civil: {
      endereco: "R. Vereador Cláudio Alves Costa, 1314 - Centro",
      telefone: "197",
    },
    cras: {
      endereco: "João Meira dos Santos, 1999, Centro",
      email: "crasdivisaalegre2021@gmail.com",
    },
    creas: {
      endereco: "R. João Meira dos santos, 1643 - Centro",
    },
    hospitais_upa: {
      endereco: "Praça da Liberdade, 247",
      telefone: "33 3755-8448",
    },
  },
  {
    cidade: "Divisópolis",
    policia_militar: {
      endereco: "Av. Vicente Pereira, 994-996",
      telefone: "190",
    },
    policia_civil: null,
    cras: {
      endereco: "R. Firmino da Silva Nunes, 318",
      email: "crasdivisopolis@hotmail.com",
    },
    creas: {
      endereco: "R. Hélio Ferraz, 1081 – Centro",
    },
    hospitais_upa: {
      endereco: "R. Fetaemg, S/N - centro",
      telefone: "33 98848-2258",
    },
  },
  {
    cidade: "Medina",
    policia_militar: {
      endereco: "R. Francisco Figueiredo",
      telefone: "190",
    },
    policia_civil: {
      endereco: "Rua Francisco Figueiredo, S/N°-Centro",
      telefone: "33 3753 1110",
    },
    cras: {
      endereco: "R. Belo Horizonte 389 - Centro",
      email: "cras3medina@hotmail.com",
    },
    creas: {
      endereco: "Av. Valdivio Antunes Guimarães, 50 - Cidade Jardim",
    },
    hospitais_upa: {
      endereco: "R. Dr. Geraldo Magela, 180",
      telefone: "33 3753-1334",
    },
  },
  {
    cidade: "Pedra Azul",
    policia_militar: {
      endereco: "R. Hormínio Alemida, 216",
      telefone: "33 98761 9354",
    },
    policia_civil: {
      endereco: "AV. CASSIANO MENDES, 366-Centro",
      telefone: "33 3751 1400",
    },
    cras: {
      endereco: "Av. Joaquim Antunes, 67 - Centro",
      email: "craspedraazul@hotmail.com",
    },
    creas: {
      endereco: "Av. Joaquim Antunes, 67 – Centro",
    },
    hospitais_upa: {
      endereco: "Av. Dr. Álvaro Neves, 369",
      telefone: "33 3751-1644",
    },
  },
];
