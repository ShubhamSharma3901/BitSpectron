import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const email = await resend.emails.send({
    from: "Query<onboarding@bitspectron.com>",
    to: "owner.bitspectron@gmail.com",
    subject: `Enquiry from ${body.email}`,
    html: `<p>Email:${body.email}</p><p>Service Required: ${body.service}</p><p>Phone: ${body.phone}</p><p>Message: ${body.message}</p>`,
    // headers: {
    //   "Access-Control-Allow-Origin": "no-cors",
    // },
  });
  if (email.data) {
    return NextResponse.json({ success: true });
  }
  return NextResponse.json({ success: false });
}
