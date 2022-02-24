const sharp = require(`sharp`)
const glob = require(`glob`)
const fs = require(`fs-extra`)
const matches = glob.sync(`src/images/team/*.{png,jpg,jpeg}`)
const MAX_WIDTH = 300
const MAX_HEIGHT = 300
const QUALITY = 70
Promise.all(
  matches.map(async match => {
    const stream = sharp(match)
    const info = await stream.metadata()
    if (info.width < MAX_WIDTH || info.height < MAX_HEIGHT) {
      return
    }
    const optimizedName = match.replace(
      /(\..+)$/,
      (match, ext) => `-optimized${ext}`
    )
    await stream
      .resize(MAX_WIDTH, MAX_HEIGHT)
      .jpeg({ quality: QUALITY })
      .toFile(optimizedName)
    return fs.rename(optimizedName, match)
  })
)