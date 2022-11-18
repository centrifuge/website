const esbuild = require('esbuild')
const isDevelopment = process.argv[2] === 'dev'

esbuild
  .build({
    entryPoints: [
      'lambda/index.ts',
      'lambda/src/getExample.ts',
      'lambda/src/getMediumPosts.ts',
      'lambda/src/getLeverPositions.ts',
    ],
    outdir: 'lambda/dist',
    bundle: true,
    minify: !isDevelopment,
    platform: 'node',
    target: 'node14',
    sourcemap: true,
    watch: isDevelopment,
    tsconfig: 'lambda/tsconfig.json',
  })
  .catch(() => process.exit(1))
