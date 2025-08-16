'use server'

import db from '../lib/db'
import { NextRequest, NextResponse } from 'next/server'
import { ProuductTypes, ProuductAction } from '../types/global'

export async function productAction(): Promise<ProuductAction> {
    const data = await db`SELECT * FROM products` as ProuductTypes[];
    return {
        status: 200,
        body: 'get products success',
        data
    }
}    