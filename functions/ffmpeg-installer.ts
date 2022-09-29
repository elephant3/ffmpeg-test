import { Request, Response } from 'express'
import { path as ffmpegPath } from '@ffmpeg-installer/ffmpeg'
import { runCommand } from './_command'

export default async (_: Request, res: Response) => {  
  runCommand(ffmpegPath, res)
}