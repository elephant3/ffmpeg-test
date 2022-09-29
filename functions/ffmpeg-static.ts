import { exec } from 'child_process'

import { Request, Response } from 'express'
const ffmpegPath = require('ffmpeg-static')

export default async (req: Request, res: Response) => {
  console.log('Starting ffmpegStatic -static test...')
  //handle success
  console.log(`PATH: ${ffmpegPath}`);
  const child = exec(`cp /var/task/ffmpeg /tmp/.; chmod 755 /tmp/ffmpeg; tmp/ffmpeg -version`)
  child.stdout.on('data', function (data) {
    console.log('stdout: ' + data)
  })
  child.stderr.on('data', function (data) {
    console.log('stderr: ' + data)
  })
  child.on('close', function (code) {
    console.log('closing code: ' + code)
    if (code === 0) {
      res.status(200).send('Success!')
    } else {
      res.status(500).send('Failed!')
    }
  })

}