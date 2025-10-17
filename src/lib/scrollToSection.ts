export function scrollToSection(sectionId: string) {
  const element = typeof document !== 'undefined' ? document.getElementById(sectionId) : null;
  if (element) {
    try {
      element.scrollIntoView({ behavior: 'smooth' });
    } catch {
      // Fallback for environments that don't support smooth behavior
      element.scrollIntoView();
    }
  }
}