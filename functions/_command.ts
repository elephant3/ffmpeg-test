import { exec } from 'child_process'
import {  Response } from 'express'

export const runCommand = (binaryPath: string, res: Response) => {
  console.log('Expecting binary at path', binaryPath)
  const child = exec([binaryPath, '-version'].join(' '))
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