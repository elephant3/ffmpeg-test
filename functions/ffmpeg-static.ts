import { Request, Response } from 'express'
import ffmpegPath from 'ffmpeg-static'
import { runCommand } from './_command'

export default async (_: Request, res: Response) => {  
  runCommand(ffmpegPath, res)
}

