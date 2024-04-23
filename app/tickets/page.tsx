import React from 'react'
import prisma from '@/prisma/db'

const Tickets = async () => {

  const Tickets = await prisma.ticket.findMany()


  console.log(Tickets)
  return (
    <div>Tickets</div>
  )
}

export default Tickets