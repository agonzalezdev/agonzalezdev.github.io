
export const PortfolioPersonalData = ({CVImg}) => {
  return {
    name: 'Alex González',
    title: 'Senior Full Stack Developer',
    image: `${CVImg}`,
    contacts: [
      { type: 'email', value: 'agonzalezmartin33@gmail.com' },
      { type: 'phone', value: '+34 692674402' },
      { type: 'location', value: 'Barcelona' },
      { type: 'website', value: 'agonzalezdev.github.io' },
      { type: 'linkedin', value: 'linkedin.com/in/alex-gonzalez-705592137' },
      { type: 'twitter', value: 'twitter.com' },
      { type: 'github', value: 'github.com/agonzalezdev' }
    ]
  }
};
  
  export const PortfolioSection = [
    {
    type: 'text',
    title: 'Sobre mi',
    content: 'Desde pequeño, siempre he sido un apasionado de la tecnología y todo lo que la rodea.',
    icon: 'usertie'
    },
    {
      type: 'projects-list',
      title: 'Mis proyectos',
      icon: 'rocket',
      groups: [
        {
          sectionHeader: 'Tiendeo',
          description: 'FullStack developer en cliente final a cargo de todos los proyectos de backend del equipo',
          items: [
            { title: 'Cashback', projectUrl: 'tiendeo.com/cashback', description: 'Aplicación para ganar dinero mediante compras en supermercados' },
            { title: 'Cashback Customers', projectUrl: 'tiendeo.com', description: 'Aplicación para vender como SAAS a otras empresas' },
            { title: 'Tiendeo', projectUrl: 'tiendeo.com', description: 'Aplicación de catálogos y ofertas personalizadas y geolocalizadas' },
          ]
        },
        {
          sectionHeader: 'Ulbe Group',
          description: 'FullStack developer en consultora de proyectos',
          items: [
            { title: 'Metro Madrid', projectUrl: 'metromadrid.com', description: 'Aplicación para gestionar rutas del metro de Madrid' },
            { title: 'Fox', projectUrl: 'fox.com', description: 'Aplicación CRM para empresa de mantenimiento' },
            { title: 'XXXX', projectUrl: 'xxxx.com', description: 'Aplicación CRM para gestión' },
          ]
        },
        {
          sectionHeader: 'T2 Study Wealth Management',
          description: 'Junior developer en consultora de proyectos',
          items: [
            { title: 'Múltiples proyectos', description: 'Múltiples proyectos' }
          ]
        }
      ]
      },
      {
        type: 'common-list',
        title: 'Idiomas',
        icon: 'language',
        items: [
          {
            authority: 'Ingles',
            authorityMeta: 'Intermedio'
          },
          {
            authority: 'Español',
            authorityMeta: 'Nativo'
          },
          {
            authority: 'Catalán',
            authorityMeta: 'Nativo'
          }
        ]
      },
      {
        type: 'tag-list',
        title: 'Skills',
        icon: 'rocket',
        items: ['C#', '.NET', '.NET Core', 'NodeJS','React', 'Javascript', 'TypeScript', 'CSS', 'SQL', 'K8S',
                 'Docker', 'PostgreSQL', 'GraphQL', 'RabbitMQ', 'Redis', 'Jenkins', 'JSON', 'YAML']
      },
      {
        type: 'tag-list',
        title: 'Hobbies e intereses',
        icon: 'cubes',
        items: ['Música', 'Motor', 'Lectura', 'Videojuegos', 'Tecnología']
      }
  ];