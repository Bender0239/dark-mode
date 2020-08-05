import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (value) => {
    const [ darkMode, setDarkMode ] = useLocalStorage('mode', value)
    return [darkMode, setDarkMode]
}