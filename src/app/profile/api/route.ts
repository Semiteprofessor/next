import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  const requestHeaders = new Headers(request.headers);
  console.log(requestHeaders.get("Authorization"));
  return new Response("Profile API data ...");
};
