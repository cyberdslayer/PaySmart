import { NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client'

const client = new PrismaClient();

export const GET = async () => {
    await client.user.create({
        data: {
            email: "cy.shubham.mishra@gmail.com",
            name: "Shubham",
            number: "6268883980",
            password: ""
        }
    })
    return NextResponse.json({
        message: "hi there"
    })
}