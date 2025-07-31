import { data, Form, Link, redirect, useNavigation } from "react-router";
import { signIn } from "../../lib/auth-client";
import type { Route } from "./+types/login";
import { useState } from "react";
import { auth } from "@/lib/auth.server";

type ValidationError = {
  email?: string;
  password?: string;
};

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const email = formData.get("email")?.toString() || "";
  const password = formData.get("password")?.toString() || "";

  const errors: ValidationError = {};

  // Basic validation
  if (!email || !password) {
    errors.email = "Email and password are required.";
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (password.length < 6) {
    errors.password = "Password must be at least 6 characters.";
  }

  if (Object.keys(errors).length > 0) {
    return data({ errors }, { status: 400 });
  }

  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
        rememberMe: true,
      },
      headers: request.headers,
    });

    return redirect("/dashboard", 303);
  } catch (error: any) {
    return data({ error: error.message || "Login failed." }, { status: 400 });
  }
}

type GithubError = {
  code?: string;
  message?: string;
};

export default function Login({ actionData }: Route.ComponentProps) {
  const [githubError, setGithubError] = useState<GithubError | undefined>(
    undefined,
  );

  const navigation = useNavigation();

  const signInWithGithub = async () => {
    const res = await signIn.social({
      provider: "github",
      callbackURL: "/dashboard",
      errorCallbackURL: "/auth/login",
    });
    if (res.error) {
      setGithubError(res.error);
    }
    // what about redirecting to the dashboard?
  };

  // Extract error and errors from actionData
  let error: string | undefined = undefined;
  let errors: ValidationError = {};
  if (actionData) {
    if ("error" in actionData) {
      error = actionData.error;
    }
    if ("errors" in actionData) {
      errors = actionData.errors;
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
      <Form method="post" className="space-y-6">
        {error && (
          <div className="text-red-600 text-sm mb-2 text-center">{error}</div>
        )}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500 ${errors.email ? "border-red-500" : ""}`}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-red-600 text-xs mt-1">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500 ${errors.password ? "border-red-500" : ""}`}
            aria-invalid={!!errors.password}
            aria-describedby={errors.password ? "password-error" : undefined}
          />
          {errors.password && (
            <p id="password-error" className="text-red-600 text-xs mt-1">
              {errors.password}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={navigation.state === "submitting"}
          className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          {navigation.state === "submitting" ? "Logging in..." : "Login"}
        </button>
      </Form>
      <div className="mt-6 text-center">
        <button
          onClick={signInWithGithub}
          className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.37-1.342-3.37-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.09-.646.35-1.088.636-1.34-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.274.098-2.656 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.382.202 2.402.1 2.656.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C19.138 20.19 22 16.436 22 12.012 22 6.484 17.523 2 12 2z" />
          </svg>
          Login with GitHub
        </button>
      </div>
      <div className="mt-4 text-center text-sm text-gray-600">
        Don't have an account?{" "}
        <Link to="/auth/register" className="text-indigo-600 hover:underline">
          Register
        </Link>
      </div>
    </div>
  );
}
