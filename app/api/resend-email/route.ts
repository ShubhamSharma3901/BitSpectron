import { resend } from "@/lib/resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const email = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: "owner.bitspectron@gmail.com",
    subject: "Hello World",
    html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
    // headers: {
    //   "Access-Control-Allow-Origin": "no-cors",
    // },
  });
  if (email.data) {
    return NextResponse.json({ success: true });
  }
  return NextResponse.json({ success: false });
}
