import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);

    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "API Key is missing" },
        { status: 500 },
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    try {
      const result = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: "",
        config: {
          systemInstruction: "",
          responseMimeType: "application/json",
          responseSchema: {},
        },
      });

      const text = result?.text;

      if (!text) {
        return NextResponse.json(
          { error: "No response from Gemini" },
          { status: 500 },
        );
      }

      const analysis = JSON.parse(text);
      return NextResponse.json(analysis);
    } catch (error) {
      console.error("Gemini analysis failed:", error);
      return NextResponse.json(
        { error: "Failed to generate upgrade analysis. Please try again." },
        { status: 500 },
      );
    }
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Internal Server Error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
