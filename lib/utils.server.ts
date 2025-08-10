import { redirect, type AppLoadContext } from "react-router";
import { getAuth } from "./auth.server";

type SessionParams = {
  context: AppLoadContext;
  request: Request;
  redirectTo?: string;
};

export async function getSession({ context, request }: SessionParams) {
  const session = await getAuth(context).api.getSession({
    headers: request.headers,
  });
  return session;
}

export async function ensureAuthenticated({
  context,
  request,
  redirectTo = "/auth/login",
}: SessionParams) {
  const session = await getAuth(context).api.getSession({
    headers: request.headers,
  });
  if (!session) {
    throw redirect(redirectTo);
  }
  return session;
}

export async function getSessionOrThrow({ context, request }: SessionParams) {
  const session = await getAuth(context).api.getSession({
    headers: request.headers,
  });
  if (!session) {
    throw new Response("Unauthorized", { status: 401 });
  }
  return session;
}

export async function ensureAdmin({ context, request }: SessionParams) {
  const session = await getSessionOrThrow({ context, request });
  if (session.user.role !== "admin") {
    throw new Response("Forbidden", { status: 403 });
  }
  return session;
}
