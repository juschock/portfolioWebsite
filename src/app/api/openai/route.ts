import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  organization: "org-3D15mSnd2wtG5HjZ2yuzVaTZ",
  apiKey: process.env.OPENAI_API_KEY, // This is safe here because it's server-side.
});

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });
    const message = completion.choices[0].message.content;
    return NextResponse.json({ text: message });
  } catch (err) {
    console.error("Error generating text:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
