import { Router } from 'express'
import { TicketControllers } from './controllers'

export class TicketRoutes {
  static get routes() {
    const router = Router()

    const controllers = new TicketControllers()

    router.get('/',controllers.getTicket)
    router.get('/last',controllers.getLastTicketNumber)
    router.get('/pending',controllers.pendingTicket)

    router.post('/',controllers.createTicket)

    router.get('/draw/:desk',controllers.drawTicket)
    router.put('/done/:ticketId',controllers.ticketFinished)

    router.get('/working-on',controllers.workingOn)
    return router
  }
}
