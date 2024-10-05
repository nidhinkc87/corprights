import { NextRequest, NextResponse } from "next/server";

import { revalidateTag } from "next/cache";

async function readRequestBody(request: NextRequest): Promise<string> {
  if (request.body === null) {
    throw new Error("Request body is null");
  }

  const reader = request.body.getReader();
  const decoder = new TextDecoder();
  let result = "";
  let done = false;

  do {
    const { done: readDone, value } = await reader.read();
    done = readDone;
    if (!done) {
      result += decoder.decode(value, { stream: true });
    }
  } while (!done);

  return result;
}

export async function POST(req: NextRequest) {
  try {
    const eventType = req.headers.get("x-strapi-event");

    const payloadString = await readRequestBody(req);
    const payloadData = JSON.parse(payloadString);
    const model = payloadData.model;

    console.log("Received event type:", eventType);
    console.log("Model:", model);

    if (model !== undefined) {
      revalidateTag(model);
    }

    return new NextResponse(
      JSON.stringify({ success: true, message: "Revalidation success" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error parsing webhook request:", error);
    return new NextResponse(
      JSON.stringify({ success: false, message: "error passing webhook" }),
      { status: 500 }
    );
  }
}
