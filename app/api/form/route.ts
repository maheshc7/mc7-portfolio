import { NextResponse } from "next/server";

// Handles POST requests
export async function POST(request: Request) {
  const { name, email, message } = await request.json();
  console.log("Here");
  // Sending the form data to the Web3Forms API
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: process.env.WEB3FORMS_ACCESS_KEY,
      name,
      email,
      message,
    }),
  });

  const result = await response.json();
  return NextResponse.json(result);
}
