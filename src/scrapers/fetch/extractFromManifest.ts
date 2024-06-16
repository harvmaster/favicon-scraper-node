import type { Manifest } from '../../types'

export const extractFromManifest = (manifest: Manifest) => {
  if (!manifest?.icons) return []
  const icons = manifest.icons.map((icon: { src: string }) => icon.src)

  return icons
}

export default extractFromManifest