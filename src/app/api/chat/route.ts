import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import resumeData from '../../data/resume.js';

const openai = new OpenAI({
  organization: "org-3D15mSnd2wtG5HjZ2yuzVaTZ",
  apiKey: process.env.OPENAI_API_KEY, // Server-side; ensure this is set
});

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    // Build a system prompt that includes your resume details.
    const systemPrompt = `You are an assistant with full context of Joshua Uschock's resume:
    
Name: ${resumeData.name}
Title: ${resumeData.title}
Professional Summary: ${resumeData.professional_summary}

Work Experience: ${resumeData.work_experience.map(exp => `${exp.role} at ${exp.company} (${exp.duration})`).join("; ")}

Technical Proficiencies: ${resumeData.technical_proficiencies.development.join(", ")}

Please use the above information to answer any questions about Joshua’s background.`;

    // Attempt using GPT-4 first, then fallback to GPT-3.5-turbo
    let completion;
    try {
      completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: prompt },
        ],
      });
    } catch (gpt4Error) {
      console.warn("GPT-4 failed, trying GPT-3.5-turbo:", gpt4Error);
      completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: prompt },
        ],
      });
    }

    const message = completion.choices[0].message.content;
    return NextResponse.json({ text: message });
  } catch (err) {
    console.error("Error generating text:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
