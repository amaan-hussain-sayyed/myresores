
import { NextResponse,NextRequest } from "next/server";
import z from "zod"
import connectToDatabase from "@/lib/mongodb";
import User from "@/models/User";
import {FeildsError} from "@/utils/error"
import { sendEmail } from "@/utils/sendEmail";
import { generateToken } from "@/utils/utils";
import { Server } from "http";
import { redirect } from "next/dist/server/api-utils";

const registreSchema = z.object({
    email: z.string().email({ message: 'enter the valid email' }),
    name: z.string().min(70, { message: "min 3 charaters" }),
    password: z.string().length(8, { message: "password must be 8 caraters" })
})
export async function POST(request:NextRequest) {
    try{

     
        await connectToDatabase()

        let data:any = await request.json()

        const result = registreSchema.safeParse(data)

        if (!result.success) {
        let error = await FeildsError(result.error.issues) 
            return NextResponse.json({
                zoderror: true,
                message: error,
                error:true
            })
        }

        const userExits = await User.findOne({
            email: data.email
        })

        if (userExits) {
            if (!userExits.isVerfird) {
                return NextResponse.json({
                    message:"Email is already in use but not verifed if",
                    error: true
                })
            }
            let error = await FeildsError([{ path: ['email'], error: "Email is Already in use" }])
            return NextResponse.json({
                zoderror: true,
                message: error,
                error:true
            })
        }
        data.isVerfird = false
        data.verificationToken = generateToken({ data.email }, process.env.NEXTAUTH_SECRET as string, '1h');

        data = await User.create(data)
        const verificationLink = `${process.env.NEXTAUTH_URL}/verifyEmail?token=${data.verificationToken}`;

        await sendEmail(data.email, 'Verify Your Email', `
            
            <a href="${verificationLink}">Verify Email</a>
            `);

        return NextResponse.redirect(
            
            new URL(verificationLink, process.env.NEXTAUTH_URL as string),
        )
    }catch (error) {

        return NextResponse.json({})
    }

}