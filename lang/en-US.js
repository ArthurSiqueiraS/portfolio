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
  viewResume: 'View my resume',
  findMe: 'Find me on:',
  animations: 'Animations',
  chooseLanguage: 'Choose language',
  changeTheme: 'Change theme',
  callToAction: `Hi! My name is Arthur, I am ${age} years old and I've been working with web development for ${experience} years.
    Check out my resume for more details on my work experience, or browse through my projects portfolio right below for a more practical presentation.
    If you wanna get in touch or get to know more about my professional profile, connect with me on Linkedin or send me an email!`,
  pastWork: 'Projects portfolio',
  details: 'See more',
  frontEnd: 'Front-end',
  backEnd: 'Back-end',
  highlights: 'Highlights',
  technologiesUsed: 'Technology stack',
  projectInfo: 'Project info',
  project: {
    employer: 'Employer',
    occupations: 'Occupations',
    status: 'Status',
  },
  resume: {
    print: {
      button: 'Export PDF',
      unavailable: 'Not available in this browser',
      tutorial:
        'Clicking the confirm button will open the printing dialog. To save the resume as a PDF with the best printing format, configure your options as shown in the video:',
      dialogCancel: 'Cancel',
      dialogConfirm: 'Confirm',
      dontShow: "Don't show this again",
    },
    about: 'About',
    experience: 'Experience',
    present: 'Present',
    education: 'Education',
    contact: 'Contact',
    skills: 'Skills',
    languages: 'Languages',
  },
  technologies: 'What I use the most',
  madeWith: 'Made with Vue + Nuxt.js, Vuetify and Ruby on Rails',
}
