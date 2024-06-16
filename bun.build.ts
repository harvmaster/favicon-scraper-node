import fs from 'fs'
import bun from 'bun'

await bun.build({
  entrypoints: ['./src/index.ts'],
  outdir: './dist',
  external: getExternalsFromPackageJson(),
  format: 'esm',
  target: 'node',
  // minify: true
})

function getExternalsFromPackageJson(): string[] {
  const packageJson = JSON.parse(fs.readFileSync("./package.json").toString())

  const sections = [
    'dependencies',
    'devDependencies',
    'peerDependencies',
  ], externals = new Set()

  for (const section of sections)
    if (packageJson[section])
      Object.keys(packageJson[section]).forEach(_ => externals.add(_))

  console.log('externals', externals)

  return Array.from(externals) as string[]
}