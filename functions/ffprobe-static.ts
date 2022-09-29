import { Request, Response } from 'express'
import ffprobePath from 'ffprobe-static'
import { runCommand } from './_command'

export default async (_: Request, res: Response) => {  
  runCommand(ffprobePath, res)
}