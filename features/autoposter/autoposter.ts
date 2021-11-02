import { AutoPoster } from 'topgg-autoposter'
import dotenv from 'dotenv'
dotenv.config()

module.exports = async (client: any) => {
  const ap = AutoPoster(process.env.TOPGG || '', client)

  ap.on('posted', () => {
    console.log('Posted stats to Top.gg!')
  })
}