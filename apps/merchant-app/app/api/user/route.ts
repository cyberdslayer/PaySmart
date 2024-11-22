import { NextResponse } from "next/server"
import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'

const client = new PrismaClient();

export const GET = async () => {
    try {
        await client.user.create({
            data: {
                email: "user@mail.com",
                name: "Shubham",
                password: await bcrypt.hash("yourpassword", 10),
                number: "1234567890"
            }
        })
    } catch (error) {
        if ((error as { code: string }).code === 'P2002') {
            return NextResponse.json({
                message: "Email already exists"
            }, { status: 400 })
        }
        throw error
    }
    return NextResponse.json({
        message: "hi there"
    })
}