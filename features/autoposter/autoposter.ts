import { AutoPoster } from 'topgg-autoposter'

module.exports = async (client: any) => {
  const ap = AutoPoster(process.env.TOPGG || '', client)

  ap.on('posted', () => {
    console.log('Posted stats to Top.gg!')
  })
}