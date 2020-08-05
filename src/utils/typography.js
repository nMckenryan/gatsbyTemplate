import Typography from "typography"
import kirkhamTheme from "typography-theme-kirkham"
//Holds the 'theme file' retrieved from plugin

const typography = new Typography(kirkhamTheme)

export default typography
export const rhythm = typography.rhythm
