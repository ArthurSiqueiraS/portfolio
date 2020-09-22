function years(date) {
  const today = new Date()
  let years = today.getFullYear() - date.getFullYear()
  const m = today.getMonth() - date.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
    years--
  }
  return years
}

const age = years(new Date(1998, 3, 13))
const experience = years(new Date(2018, 5, 1))
export default {
  navItems: {
    about: 'Sobre mim',
    portfolio: 'Portfólio',
    technologies: 'Tecnologias',
    resume: 'Currículo',
  },
  viewResume: 'Veja meu currículo',
  findMe: 'Encontre-me em:',
  animations: 'Animações',
  chooseLanguage: 'Escolher idioma',
  changeTheme: 'Alternar tema',
  callToAction: `Olá! Meu nome é Arthur, tenho ${age} anos e trabalho com desenvolvimento web há ${experience} anos.
    Cheque o meu currículo para mais detalhes sobre minha experiência de trabalho, ou navegue pelo meu portfólio de projetos logo abaixo para uma apresentação mais prática.
    Se você gostaria de entrar em contato ou conhecer melhor meu perfil profissional, conecte-se comigo no Linkedin ou me envie um email!`,
  pastWork: 'Portfólio de projetos',
  portfolioTip: 'Coloque seu cursor sobre a imagem para revelar mais detalhes',
  portfolioTipMobile: 'Clique na imagem para revelar mais detalhes',
  details: 'Ver mais',
  highlights: 'Destaques',
  technologiesUsed: 'Tecnologias utilizadas',
  projectInfo: 'Informações do projeto',
  project: {
    employer: 'Vínculo',
    occupations: 'Ocupações',
    status: 'Status',
  },
  resume: {
    print: {
      button: 'Exportar PDF',
      unavailable: 'Não disponível neste navegador',
      tutorial:
        'Clicando no botão confirmar a janela de impressão será aberta. Para salvar o currículo como PDF com o melhor formato, configure suas opções como demonstrado no vídeo:',
      dialogCancel: 'Cancelar',
      dialogConfirm: 'Confirmar',
      dontShow: 'Não mostrar novamente',
    },
    about: 'Sobre',
    experience: 'Experiência',
    present: 'Presente',
    education: 'Educação',
    contact: 'Contato',
    skills: 'Conhecimentos',
    languages: 'Idiomas',
  },
  technologies: 'O que eu mais utilizo',
  madeWith: 'Feito com Vue + Nuxt.js, Vuetify e Ruby on Rails',
}
