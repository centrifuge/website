const esbuild = require('esbuild')
require('dotenv').config({ path: 'lambda/.env' })
const isDevelopment = process.argv[2] === 'dev'

const define = {}
for (const k in process.env) {
  define[`process.env.${k}`] = JSON.stringify(process.env[k])
}

esbuild
  .build({
    entryPoints: [
      'lambda/index.ts',
      'lambda/src/getExample.ts',
      'lambda/src/getMediumPosts.ts',
      'lambda/src/getLeverPositions.ts',
      'lambda/src/getPoolsData.ts',
      'lambda/src/getLoansData.ts',
    ],
    outdir: 'lambda/dist',
    bundle: true,
    minify: !isDevelopment,
    platform: 'node',
    target: 'node14',
    sourcemap: true,
    watch: isDevelopment,
    tsconfig: 'lambda/tsconfig.json',
    define,
  })
  .catch(() => process.exit(1))
