import { exec } from 'child_process'
const ffprobePath = require('@ffprobe-installer/ffprobe').path

import { Request, Response } from 'express'

export default async (req: Request, res: Response) => {
  console.log('Starting ffprobe-installer test...')
  const child = exec([ffprobePath, '-version'].join(' '))
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