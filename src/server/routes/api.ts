import { Router, Request, Response } from 'express'
const router = Router()

router.get('/', (_req: Request, res: Response) => {
  res.json({ router: 'api 2' })
})

router.get('/test', (_req: Request, res: Response) => {
  const testItems = [
    { id: 1, name: 'item 1' },
    { id: 2, name: 'item 2' },
    { id: 3, name: 'item 3' }
  ]

  res.json(testItems)
})

export default router
