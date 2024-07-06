export default function useTitle(title) {
    if (title === '/') return document.title = `Volunteer - Home`
    return document.title = `Volunteer - ${title.substring(1)}`
}
