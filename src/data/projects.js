// Para incluir um projeto, adicione um objeto nesta lista.
// status é opcional e aparece como selo acima do título.
// Link com outline: true vira o botão vazado, e icon põe um ícone antes do texto.
export const projects = [
  {
    title: "FaceShield - SENAI",
    image: "/assets/EscritoFS_preto.jpg",
    imageAlt: "Sistema de Autenticação",
    description:
      "Este é um sistema de gerenciamento de empréstimos de ferramentas completo, que utiliza reconhecimento facial para validação de usuários. Ele permite o gerenciamento total (CRUD) de usuários, ferramentas, locais, estados e empréstimos, além de oferecer buscas detalhadas por ferramentas disponíveis, por localização/estado e histórico de empréstimos.",
    techs: [
      "Java",
      "Spring Boot",
      "JWT",
      "MySQL",
      "Python",
      "HTML",
      "JavaScript",
      "CSS",
    ],
    links: [
      {
        label: "Ver Código",
        icon: "fab fa-github",
        href: "https://github.com/orgs/FaceShield-SENAI-TCC/repositories",
      },
    ],
  },
  {
    title: "ColabManager",
    status: "Em desenvolvimento",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    imageAlt: "Código-fonte em um editor, ilustrando o ColabManager",
    description:
      "Sistema full-stack de gestão de colaboradores, cargos e departamentos. A API REST em Spring Boot com PostgreSQL já roda em Docker, e o front-end em React está em desenvolvimento.",
    techs: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    links: [
      {
        label: "Ver Código",
        icon: "fab fa-github",
        href: "https://github.com/alexsant22/ColabManager",
      },
    ],
  },
  {
    title: "NestJS API Base",
    image: "/assets/nest-api-base.svg",
    imageAlt: "Lista de rotas da API nest-api-base",
    description:
      "API base em NestJS para servir de ponto de partida a outras aplicações. Usa Prisma com PostgreSQL, valida os dados com class-validator, documenta as rotas com Swagger e já traz um CRUD de usuários e projetos com relacionamento 1:N.",
    techs: ["TypeScript", "NestJS", "Prisma", "PostgreSQL", "Swagger"],
    links: [
      {
        label: "Ver Código",
        icon: "fab fa-github",
        href: "https://github.com/alexsant22/nest-api-base",
      },
    ],
  },
  {
    title: "tvd-api",
    image: "/assets/tvd-api.svg",
    imageAlt: "Lista de rotas da API tvd-api",
    description:
      "API REST pública de The Vampire Diaries, no formato da SWAPI, feita para o Projeto Prático de Interfaces Web do IFSP. Traz personagens, episódios, temporadas, espécies e famílias, com paginação e busca por nome, e está publicada na Vercel.",
    techs: ["JavaScript", "Node.js", "Express", "Vercel"],
    links: [
      {
        label: "Ver Código",
        icon: "fab fa-github",
        href: "https://github.com/alexsant22/tvd-api",
      },
      {
        label: "Ver API",
        icon: "fas fa-arrow-up-right-from-square",
        href: "https://tvd-api.vercel.app/api",
        outline: true,
      },
    ],
  },
];
