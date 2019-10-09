// import dropdown from './dropdown'
const themeTeens = () => {
  console.log('teenTheme')
}

const themeKids = () => {
  console.log('kidsTheme')
}

const themeDefault = () => {
  console.log('defaultTheme')
}

const chooseTheme = (key) => {
  switch (key) {
    case 'Baby Side':
      themeKids()
      return

    case 'Teen Side':
      themeTeens()
      return

    default:
      themeDefault();
      return
  }
}

module.exports = {
  change: chooseTheme
}