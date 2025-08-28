import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import AuthForm from "@/components/AuthForm";
import { Loader2 } from "lucide-react";

const AuthPage = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      navigate("/dashboard");
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <AuthForm />
      </div>
    </div>
  );
};

export default AuthPage;