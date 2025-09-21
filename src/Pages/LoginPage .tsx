// src/Pages/LoginPage.tsx
import { useState } from "react";
import { useAuth } from "@/auth/AuthContext";
import FormBuilder from "@/scenes/formBuilder";
import type { FormField } from "@/shared/formTypes";
import { useLocation, useNavigate, Link } from "react-router-dom";

export default function LoginPage() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as any)?.from || "/";

  const [formError, setFormError] = useState<string | null>(null);

  const fields: FormField[] = [
    {
      type: "input",
      id: "email",
      name: "email",
      label: "Email *",
      placeholder: "you@example.com",
      inputType: "email",
      rules: {
        required: true,
        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      },
      messages: { pattern: "Invalid email address." },
    },
    {
      type: "input",
      id: "password",
      name: "password",
      label: "Password *",
      placeholder: "••••••••",
      inputType: "password",
      rules: { required: true, minLength: 6 },
      messages: { minLength: "Min 6 characters." },
    },
  ];

  return (
    <main className="mx-auto w-5/6 max-w-md pt-28 pb-16">
      <div className="bg-white rounded-2xl shadow-2xl p-5">
        <h1 className="mb-6 text-2xl font-montserrat">Sign in</h1>
      <FormBuilder
        fields={fields}
        submitLabel="Sign in"
        submitStyles="mt-2 rounded-lg bg-secondary-500 px-6 py-2 text-white hover:bg-primary-500"
        formfieldBaseStyles="mb-4 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
        className="flex flex-col gap-2 rounded-2xl "
        onValid={async (data) => {
          try {
            setFormError(null);
            await signIn(data.email, data.password);
            navigate(from, { replace: true });
          } catch (err: any) {
            // Supabase/Auth error message
            setFormError(err?.message || "Sign in failed.");
          }
        }}
        onInvalid={() => setFormError("Please fix the highlighted fields.")}
      />

      {formError && <p className="mt-3 text-sm text-primary-500">{formError}</p>}

      <p className="mt-4 text-sm">
        No account? <Link to="/signup" className="text-primary-500">Create one</Link>
      </p>
      </div>
      
    </main>
  );
}
