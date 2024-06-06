import { headers } from "next/headers";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();
  console.log(requestHeaders.get("Authorization"));
  console.log(headerList.get("Authorization"));
  console.log(requestHeaders.get("Authorization"));
  return new Response("<h1>Profile API data ...</h1>", {headers: {
    "Content-Type": "text/html"
  }});
};
