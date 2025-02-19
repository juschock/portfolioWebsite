import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import resumeData from '../../data/resume.js';

const openai = new OpenAI({
  organization: "org-3D15mSnd2wtG5HjZ2yuzVaTZ",
  apiKey: process.env.OPENAI_API_KEY, // This is safe here because it's server-side.
});

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    // Create a system message containing your resume details.
    // You can format this as needed.
    const systemPrompt = `You are a knowledgeable assistant with full context of the following resume:

Name: ${resumeData.name}
Title: ${resumeData.title}

Contact:
  - Phone: ${resumeData.contact.phone}
  - Email: ${resumeData.contact.email}
  - LinkedIn: ${resumeData.contact.linkedin}

Professional Summary:
${resumeData.professional_summary}

Technical Proficiencies:
  - Development: ${resumeData.technical_proficiencies.development.join(", ")}
  - DevOps: ${resumeData.technical_proficiencies.devops.join(", ")}
  - AI/ML/Big Data: ${resumeData.technical_proficiencies.ai_ml_big_data.join(", ")}
  - Sysadmin: ${resumeData.technical_proficiencies.sysadmin.join(", ")}
  - AWS: ${resumeData.technical_proficiencies.aws.join(", ")}

Awards & Certifications:
${resumeData.awards_certifications.join(", ")}

Education:
${resumeData.education.map(edu => `${edu.degree} from ${edu.institution} (${edu.years})`).join("; ")}

Work Experience:
${resumeData.work_experience.map(exp => `${exp.role} at ${exp.company} in ${exp.location} (${exp.duration}): ${exp.details}`).join("\n")}

Please use the above information to answer any questions regarding Joshua’s professional background.`;

    // Use GPT-4 if available; fallback to GPT-3.5-turbo if not.
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
