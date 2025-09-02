import { connectToDB } from "@/libs/db";
import { Post } from "@/libs/schemas/posts";

export async function GET(
  request: Request,
  { params: { id } }: { params: { id: string } },
) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type"); //ne
    connectToDB();
    const posts =
      type === "ne"
        ? await Post.find({ _id: { $ne: id } })
        : await Post.findById({ _id: id });
    return Response.json(posts);
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({
        message: error.message,
        status: false,
      });
    }
    return Response.json({
      message: "Get Page Unknown Error",
      status: false,
    });
  }
}
