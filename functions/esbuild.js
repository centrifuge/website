const esbuild = require('esbuild')
require('dotenv').config({ path: 'functions/.env' })
const isDevelopment = process.argv[2] === 'dev'

const define = {}
for (const k in process.env) {
  define[`process.env.${k}`] = JSON.stringify(process.env[k])
}

esbuild
  .build({
    entryPoints: [
      'functions/index.ts',
      'functions/src/getExample.ts',
      'functions/src/getLeverPositions.ts',
      'functions/src/createProof.ts',
      'functions/src/getRewardData.ts',
      'functions/src/getPoolsData.ts',
      'functions/src/getTotalAssetsTokenized.ts',
    ],
    outdir: 'functions/dist',
    bundle: true,
    minify: !isDevelopment,
    platform: 'node',
    target: 'node14',
    sourcemap: true,
    watch: isDevelopment,
    tsconfig: 'functions/tsconfig.json',
    define,
  })
  .catch(() => process.exit(1))
