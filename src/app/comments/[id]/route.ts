import { comments } from "../data";

export const GET = async (
  _request: Request,
  { params }: { params: { id: string } }
) => {
  const id = parseInt(params.id);
  const comment = comments.find((comment) => comment.id === id);
  return Response.json(comment);
};
