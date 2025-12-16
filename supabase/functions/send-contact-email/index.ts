import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

// HTML escape function to prevent XSS
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormRequest {
  name: string;
  phone: string;
  email?: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    const CONTACT_EMAIL = Deno.env.get("CONTACT_EMAIL");
    
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      throw new Error("Email service not configured");
    }
    
    if (!CONTACT_EMAIL) {
      console.error("CONTACT_EMAIL is not configured");
      throw new Error("Contact email not configured");
    }
    
    const { name, phone, email, message }: ContactFormRequest = await req.json();

    // Validate required fields
    if (!name || !phone) {
      console.error("Validation failed: name or phone missing");
      return new Response(
        JSON.stringify({ error: "Name and phone are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Sending contact form email for:", name, "phone:", phone);

    // Sanitize user inputs to prevent XSS
    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeEmail = email ? escapeHtml(email) : '';
    const safeMessage = message ? escapeHtml(message) : '';

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "שני רחום - מורה למתמטיקה <onboarding@resend.dev>",
        to: CONTACT_EMAIL.split(',').map(e => e.trim()),
        subject: `פנייה חדשה מהאתר: ${safeName}`,
        html: `
          <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #2563eb;">פנייה חדשה מהאתר</h1>
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px;">
              <p><strong>שם:</strong> ${safeName}</p>
              <p><strong>טלפון:</strong> ${safePhone}</p>
              ${safeEmail ? `<p><strong>אימייל:</strong> ${safeEmail}</p>` : ''}
              ${safeMessage ? `<p><strong>הודעה:</strong> ${safeMessage}</p>` : ''}
            </div>
            <p style="color: #6b7280; margin-top: 20px;">נשלח מטופס יצירת קשר באתר</p>
          </div>
        `,
      }),
    });

    const emailResponse = await response.json();
    
    if (!response.ok) {
      console.error("Resend API error:", emailResponse);
      throw new Error(emailResponse.message || "Failed to send email");
    }

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
