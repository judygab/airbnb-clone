import { NextResponse } from "next/server";

import listingsData from "../../listingsData.json";

export async function GET(req) {
    return NextResponse.json(listingsData);
}