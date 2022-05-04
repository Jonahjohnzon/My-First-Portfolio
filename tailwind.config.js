module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:'class'
  ,
  theme: {
    animation:{
      backmovement:'backmovement 50s infinite',
      backmovement2:'backmovement2 50s infinite',
      backmovement3:'backmovement3 50s infinite',
      backmovement4:'backmovement4 50s infinite',
      backmovement5:'backmovement 30s infinite',
      backmovement6:'backmovement2 30s infinite',
      backmovement7:'backmovement3 30s infinite',
      backmovement8:'backmovement4 30s infinite',
    },
    colors:{
      'dark':'rgb(33,33,33)',
      'cold':'rgb(27,27,27)',
      'white':'white',
      'lightgreen':'rgb(8,254,216)',
      'green':'rgb(2,153,126)',
      'black':'black',
      'brown':'rgb(76,76,77)',
      'white': '#ffffff',
      'blue': '#0C062F',
      'orange':'#FF9900',
      'neutral':'#828282',
      'yellow':'#FFEB99',
      'ftcolor':'#2B2924',
      'map':'rgb(48,48,48)',
      'cream':'rgb(243,235,232)',
      "red":"red",
      "purple":"purple",
      "gree":'green',
      'transparent':'transparent'
    },
 
    extend: {
     
      keyframes:{
        backmovement:{
          '0%': {
            top:"10vh",
            left:'10vw'
          },
          '33%':{
            top:'40vh',
            left:'50vw'
          },
          '66%':{
            top:'100vh',
            left:'1vw'
          },
          '100%':{
            top:'10vh',
            left:'10vw'
          }
        },
        backmovement2:{
          '0%': {
            top:"100vh",
            left:'100vw'
          },
          '33%':{
            top:'50vh',
            left:'10vw'
          },
          '66%':{
            top:'10vh',
            left:'90vw'
          },
          '100%':{
            top:'100vh',
            left:'100vw'
          }
        },
        
        backmovement3:{
          '0%': {
            top:"40vh",
            left:'40vw'
          },
          '33%':{
            top:'0vh',
            left:'10vw'
          },
          '66%':{
            top:'90vh',
            left:'90vw'
          },
          '100%':{
            top:'40vh',
            left:'40vw'
          }
        },
        
        backmovement4:{
          '0%': {
            top:"20vh",
            left:'70vw'
          },
          '33%':{
            top:'80vh',
            left:'10vw'
          },
          '66%':{
            top:'60vh',
            left:'90vw'
          },
          '100%':{
            top:'20vh',
            left:'70vw'
          }
        },
      },
      
      fontFamily:{
        'nunito':['Nunito'],
        "proxi":['Proxima'],
        'poppins':['Poppins']
      },
      screens: {
        'phone':'480px',
 
       'tablet': '640px',
       // => @media (min-width: 640px) { ... }
 
       'laptop': '1024px',
       // => @media (min-width: 1024px) { ... }
 
       'desktop': '1280px',
       // => @media (min-width: 1280px) { ... }
     },
    },
  },
  plugins: [],
}
