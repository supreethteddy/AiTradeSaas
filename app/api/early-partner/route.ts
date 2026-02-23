import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 503 }
      );
    }

    const { name, email, phone, message } = await request.json();

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: 'AI Trade SaaS <onboarding@resend.dev>',
      to: 'supreeth.girish@gmail.com',
      subject: 'New Early Partner Lead',
      replyTo: email,
      text: [
        'New early partner application:',
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        '',
        'Message:',
        message || '(no message provided)',
      ].join('\n'),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending early partner email', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}

