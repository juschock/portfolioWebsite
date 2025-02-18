// src/app/api/chat/route.ts
import { NextResponse } from 'next/server';
import Llama from 'node-llama-cpp';

let llama: any = null;

async function loadModel() {
  if (!llama) {
    llama = new Llama({
      // Adjust the modelPath to your actual model file in the project root
      modelPath: './models/mistral-7b-instruct-q4_0.gguf',
      nCtx: 2048,        // context length, adjust as needed
      seed: 42,
      // Additional configuration can be added here
    });
    await llama.load();
  }
}

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();
    await loadModel();
    const output = await llama.createCompletion({
      prompt,
      maxTokens: 256,
      temperature: 0.7,
      topP: 0.9,
    });
    return NextResponse.json({ text: output });
  } catch (err: any) {
    console.error('Error generating text:', err);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
