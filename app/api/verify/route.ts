import axios from "axios";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  try {
    const captchaValue = await req.json();
    const { data } = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SITE_SECRET}&response=${captchaValue}`
    );
    return NextResponse.json(data);
  } catch (err) {
    console.log("captcha verify error", err);
  }
}
