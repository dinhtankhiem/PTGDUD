import { useTheme } from '../ThemeContext'

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button type="button" className="btn" onClick={toggleTheme}>
      Theme: {theme} — Click để đổi
    </button>
  )
}
