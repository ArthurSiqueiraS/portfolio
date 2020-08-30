export const state = () => ({
  basics: {
    name: 'Arthur Siqueira e Silva',
    label: 'Full-stack developer',
    image: '',
    phone: '+55 5399362391',
    email: 'asesilva@inf.ufpel.edu.br',
    url: 'dev.arthursiqueira.netlify.app',
    linkedin: 'arthur-siqueira-e-silva-8283bb18a',
    summary: 'Full-stack web developer, graduated in Computer Science.\n',
    location: 'Pelotas, Rio Grande do Sul, Brazil',
    profiles: [
      {
        network: 'LinkedIn',
        username: 'arthur-siqueira-e-silva-8283bb18a',
        url: 'https://www.linkedin.com/in/arthur-siqueira-e-silva-8283bb18a/',
      },
    ],
  },
  work: [
    {
      id: 1,
      company: 'Indeorum',
      highlights: [],
      position: 'Full Stack Engineer',
      startDate: '2020-01-31',
      summary:
        'Development of commercial web applications, working in scrum teams and using VueJS (Nuxt.js), Ruby on Rails and MongoDB as the main development technologies. Also working as technical project manager and responsible for the creation of solutions for complex problems in data science and data engineering.',
      url: 'https://www.linkedin.com/company/15162541',
    },
    {
      id: 2,
      company: 'Freelance',
      endDate: '2020-07-31',
      highlights: [],
      position: 'Full Stack Engineer',
      startDate: '2020-06-30',
      summary:
        'Solo project for a web platform to promote and broadcast the XXXVI Academic Week of Medicine UFPel, developing frontend with VueJs (using the Nuxt.js framework) and backend with Ruby on Rails (API) and MongoDB, besides integrations with cloud services Heroku, Netlify and Amazon S3.',
      url: '',
    },
    {
      id: 3,
      company: 'Indeorum',
      endDate: '2020-01-31',
      highlights: [],
      position: 'Web Developer Internship',
      startDate: '2018-06-30',
      summary: '',
      url: 'https://www.linkedin.com/company/15162541',
    },
    {
      id: 4,
      company: 'Hut8 - Empresa Júnior da Computação',
      endDate: '2019-12-31',
      highlights: [],
      position: 'Web Developer',
      startDate: '2018-05-31',
      summary:
        'Frontend development for web applications using React.js and Bootstrap.',
      url: 'https://www.linkedin.com/company/10274746',
    },
  ],
  volunteer: [],
  education: [
    {
      id: 1,
      institution: 'Universidade Federal de Pelotas',
      area: 'Computer Science',
      studyType: "Bachelor's degree",
      startDate: '2016-12-31',
      endDate: '2019-12-31',
      gpa: '',
      courses: [],
    },
  ],
  awards: [
    {
      title: 'Academic Honor',
      date: '2020-02-28',
      awarder: 'Universidade Federal de Pelotas',
      summary:
        'Title received for achieving the highest academic performance value among the 2019/2 UFPel Computer Science graduate class.',
    },
  ],
  publications: [],
  skills: [
    {
      name: 'Vue.js',
      level: 5,
    },
    {
      name: 'JavaScript',
      level: 5,
    },
    {
      name: 'CSS',
      level: 4,
    },
    {
      name: 'Nuxt.js',
      level: 5,
    },
    {
      name: 'React.js',
      level: 3,
    },
    {
      name: 'Java',
      level: 2,
    },
    {
      name: 'Git',
      level: 2,
    },
    {
      name: 'Vuetify',
      level: 5,
    },
    {
      name: 'HTML',
      level: 4,
    },
    {
      name: 'Linux',
      level: 2,
    },
    {
      name: 'Ruby on Rails',
      level: 4,
    },
    {
      name: 'Python',
      level: 2,
    },
    {
      name: 'Amazon S3',
      level: 1,
    },
    {
      name: 'Adobe Photoshop',
      level: 2,
    },
    {
      name: 'MongoDB',
      level: 3,
    },
    {
      name: 'WebSockets',
      level: 2,
    },
    {
      name: 'C',
      level: 2,
    },
    {
      name: 'SQL',
      level: 1,
    },
  ],
  languages: [
    {
      name: 'Portuguese',
      fluency: 3,
    },
    {
      name: 'English',
      fluency: 2,
    },
    {
      name: 'Spanish',
      fluency: 1,
    },
  ],
})

export const mutations = {}

export const actions = {}

export const strict = false
