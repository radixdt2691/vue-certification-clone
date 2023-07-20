module.exports = {
  content: ["./src/**/*.{html,js,woff,woff2}"],
  theme: {
    fontFamily:{
      'Inter-Bold':['Inter-Bold','sans-serif'],
      'Inter':['Inter','sans-serif']
    },
    extend: {
      colors:{
        'brilliant-rose':'#f863bd',
        'cornflower-blue':'#5981f7', 
        'heading-secondary':'#E8E6E6',
        'header-bg':'#1a1a1a80',
        'btn-primary':'#42b883',
        'btn-secondary':'#0ebbd2',
        'body-gray':'#979fad',
        'mint':'#42b883',
        'dark-gunmetal':'#252529',
        'dodger-blue':'#4785fe',
        'pink-bg':'#f863bd',
        'spring-green':'#02faaf',
        'cerulean':'#0ebbd2',
        'bg-black-errie':'#1A1A1A',
        'github-hover':'#252529',
        'pre-order-from':'#4a3248',
        'pre-order-to':'#323751'
      },
      gap:{
        '18':'4.5rem'
      },
      spacing:{
        '15':'3.75rem',
        '84':'21rem',
        '176':'44rem',
        '140':'140px'
      },
      dropShadow:{
        'xl':'0 0 100px rgba(66,184,131,.5)'
      },
      blur:{
        '4xl':'100px'
      },
      transitionDuration:{
        '300':'.3s',
        '500':'.5s'
      },
      lineHeight:{
        '73':'73px',
      },
    },
  },
  plugins: [],
}
