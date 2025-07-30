import { AssemblyAI } from 'assemblyai';
import { NextResponse } from 'next/server';

const client = new AssemblyAI({
  apiKey: process.env.ASSEMBLY_API_KEY,
});

export async function GET() {
  try {
    const tokenResponse = await client.realtime.createTemporaryToken({
      model: 'universal',
      expires_in: 3600,
    });

    return NextResponse.json({ token: tokenResponse.token });
  } catch (error) {
    console.error('Token generation failed:', error);
    return NextResponse.json(
      {
        error: 'Token generation failed',
        details: error.message,
      },
      { status: 500 }
    );
  }
}
