import { createClient, SupabaseClient, User } from "@supabase/supabase-js";

export const supabase: SupabaseClient = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export const signInWithGitHub = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `${window.location.origin}/deliveries/week-1`,
    },
  });

  if (error) {
    throw error;
  }

  return data;
};

export const getAuthenticatedUser = async (): Promise<User | null> => {
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.log(error);
    throw new Error("Error obteniendo usuario");
  }

  return data?.user;
};

export const signOut = async () => {
  await supabase.auth.signOut();
};
