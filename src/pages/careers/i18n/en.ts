export default {
  pages: {
    careers: {
      title: 'Recruitment',
      subtitle: 'Virtue in the World,',
      subtitle2: 'Talent in all Directions',
      search: {
        placeholder: 'Find your ideal job',
        button: 'Search',
        noResults: 'No matching positions found',
        noJobsAvailable: 'No positions available',
        viewAll: 'View All Positions'
      },
      principles: {
        intro: `We firmly believe that talents are the core driving force behind enterprise development. In the recruitment process, we consistently uphold the following principles: `,
        items: [
          {
            name: 'Virtue First, Competence Valued',
            desc: `Character and values are our primary considerations as we seek talents who resonate with the company's spirit. At the same time, we value professional skills and growth potential to achieve mutual growth for both talent and the organization. `
          },
          {
            name: 'Openness, Inclusiveness',
            desc: `We embrace diverse backgrounds, experiences, and perspectives, striving to cultivate an open and inclusive team environment unleash boundless creativity and cultivate collective excellence.`
          },
          {
            name: 'Role-Person Alignment, Long-Term Growth',
            desc: `We focus not only on the immediate needs of the position but also on the long-term career planning of talents. Via scientific assessment and personalized development plans, we enable continuous professional growth.`
          },
          {
            name: 'Fairness, Transparency, and Mutual Choice',
            desc: `We provide a fair competitive environment, ensuring an open and transparent recruitment process while respecting the choices of talents, making every collaboration a foundation for mutual achievement. `
          }
        ],
        closing: `We look forward to standing alongside like-minded individuals, creating a more brilliant future together through mutual success.`
      },
      jobOpenings: {
        title: 'Job openings',
        workPlace: 'Work location'
      }
    },
    careersDetail: {
      title: 'Job Details',
      jobResponse: 'Job Responsibilities',
      jobCondition: 'Qualification Requirements',
      applyWay: 'Application Method',
      companyDescription: 'Company Introduction'
    }
  },
} as const

