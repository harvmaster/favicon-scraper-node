import fs from 'fs'
import * as esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['./src/index.ts'],
  bundle: true,
  platform: 'node',
  target: 'node14',
  format: 'esm',
  outfile: './dist/index.js',
  external: getExternalsFromPackageJson(),
  sourcemap: true,
  minify: false,
  allowOverwrite: true
}).catch(() => process.exit(1));

esbuild.build({
  entryPoints: ['./src/index.ts'],
  bundle: true,
  platform: 'node',
  target: 'node14',
  format: 'cjs',
  outfile: './dist/index.cjs',
  external: getExternalsFromPackageJson(),
  sourcemap: true,
  minify: false,
  allowOverwrite: true
}).catch(() => process.exit(1));

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