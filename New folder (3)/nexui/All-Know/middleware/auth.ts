import { getSession } from 'next-auth/react';
import connectToDatabase from '@/lib/mongodb';
import User from '@/models/User';
import { NextRequest, NextResponse } from 'next/server';

const authmiddleware = async (role: string, permission: string) => async (req: NextRequest, res: NextResponse, next: Function) => {

    
}

export default authmiddleware