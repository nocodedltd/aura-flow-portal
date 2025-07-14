
import { useState } from "react";

const ClientLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!password) {
      newErrors.password = "Password is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsLoading(true);
    // Simulate API call for login
    setTimeout(() => {
      setIsLoading(false);
      alert("Login functionality will be implemented with next-auth in a future update.");
    }, 1500);
  };

  return (
    <main className="py-20">
      <div className="container">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2 text-primary">Client Portal</h1>
            <p className="text-secondary">
              Access your project dashboard and resources
            </p>
          </div>
        
          <div className="bg-card rounded-lg border border-border p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-primary">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-4 py-2 rounded-md border ${
                    errors.email ? "border-destructive" : "border-input"
                  } bg-background text-primary focus:outline-none focus:ring-2 focus:ring-ring`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-destructive">{errors.email}</p>
                )}
              </div>
            
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor="password" className="block text-sm font-medium text-primary">
                    Password
                  </label>
                  <a href="#" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full px-4 py-2 rounded-md border ${
                    errors.password ? "border-destructive" : "border-input"
                  } bg-background text-primary focus:outline-none focus:ring-2 focus:ring-ring`}
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-destructive">{errors.password}</p>
                )}
              </div>
            
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-primary border-input rounded focus:ring-ring"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-primary">
                  Remember me
                </label>
              </div>
            
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-secondary text-primary font-medium px-4 py-2 rounded-md hover:bg-primary hover:text-secondary hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-70 transition-colors transition-transform"
                style={{ transitionProperty: "transform, background-color, color" }}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </button>
            </form>
          
            <div className="mt-6 text-center text-sm">
              <p className="text-secondary">
                Don't have an account?{" "}
                <a href="/contact#top" className="text-primary hover:underline">
                  Contact us
                </a>{" "}
                to get access.
              </p>
            </div>
          </div>
        
          <div className="mt-8 bg-muted/50 rounded-lg p-4 text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Coming Soon:</strong> Client portal functionality is currently under development and will be available in a future update.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ClientLogin;
