
type Themes = 't767' | 'f891'

export const changeTheme = (theme: string) => {
	document.querySelector("html")?.setAttribute("data-theme", theme);
}

export const getTheme = () => {
	return document.querySelector("html")?.getAttribute("data-theme");
}

