import { comments } from "../data";

export const GET = async (
  _request: Request,
  { params }: { params: { id: string } }
) => {
  const id = parseInt(params.id);
  const comment = comments.find((comment) => comment.id === id);
  return Response.json(comment);
};

export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const body = await request.json();
  const { text } = body;
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  comments[index].text = text;
  return Response.json(comments[index]);
};

export const DELETE = async (
  _request: Request,
  { params }: { params: { id: string } }
) => {
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  const deleteComment = comments[index];
  comments.splice(index, 1);
  return Response.json(deleteComment);
};
