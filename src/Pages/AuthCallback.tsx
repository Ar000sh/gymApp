import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";
import { useAuth } from "@/auth/AuthContext";

export default function AuthCallback() {
  const { ready, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as any)?.from || "/";

  useEffect(() => {
    // The supabase client will process the token in the URL automatically.
    // We just wait for the auth context to become ready and have a user.
    if (!ready) return;
    if (user) {
        console.log("user: ", user)
      navigate(from, { replace: true });
    }
  }, [ready, user, from, navigate]);

  return (
    <main className="mx-auto w-5/6 max-w-md pt-28 pb-16">
      <div className="rounded-2xl bg-white p-6 shadow-2xl">
        <h1 className="mb-2 text-xl font-montserrat">Verifying…</h1>
        <p className="text-sm text-gray-600">
          Finishing sign in. This may take a moment.
        </p>
      </div>
    </main>
  );
}
