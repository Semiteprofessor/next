import { request } from "http";
import { NextRequest } from "next/server";

export const GET = (request: NextRequest) => {
  return Response.json({
    time: new Date().toLocaleDateString(),
  });
};
