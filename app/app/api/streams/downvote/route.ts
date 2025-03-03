import { prismaCLient } from "@/app/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
const upvoteSchema = z.object({
  streamId: z.string(),
});
export async function POST(req: NextRequest) {
  const session = await getServerSession();

  const user = await prismaCLient.user.findFirst({
    where: {
      email: session?.user?.email ?? "",
    },
  });

  if (!user) {
    return NextResponse.json(
      {
        msg: "Unauthenticated",
      },
      {
        status: 403,
      }
    );
  }

  try {
    const data = upvoteSchema.parse(await req.json());
    await prismaCLient.upvote.delete({
      where: {
        userId_streamId: {
          userId: user.id,
          streamId: data.streamId,
        },
      },
    });
  } catch (e) {
    return NextResponse.json(
      {
        msg: "Error while downvoting",
      },
      {
        status: 500,
      }
    );
  }
}
