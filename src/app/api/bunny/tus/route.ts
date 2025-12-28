import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { videoId } = body;

    if (!videoId) {
      return NextResponse.json({ error: "videoId is required" }, { status: 400 });
    }

    const libraryId = process.env.BUNNY_LIBRARY_ID!;
    const apiKey = process.env.BUNNY_API_KEY!;

    // صلاحية الرفع (10 دقايق)
    const expire = Math.floor(Date.now() / 1000) + 60 * 10;

    // SHA256(libraryId + apiKey + expire + videoId)
    const signature = crypto
      .createHash("sha256")
      .update(libraryId + apiKey + expire + videoId)
      .digest("hex");

    return NextResponse.json({
      signature,
      expire,
      libraryId,
      videoId,
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to generate signature" }, { status: 500 });
  }
}
