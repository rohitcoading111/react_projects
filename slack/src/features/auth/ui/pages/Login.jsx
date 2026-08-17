import {
  Network,
  Mail,
  Lock,
  ArrowRight,
  Eye,
  EyeOff,
} from "lucide-react";
import useAuth from "../../hooks/useAuth";


const Login = () => {
  const {
    register,
    handleSubmit,
    errors,
    onLoginSubmit,
    showLoginPassword,
    toggleLoginPassword,
    isLoginLoading,
    navigate,
  } = useAuth();

  return (
    <div className="min-h-screen bg-[#0d0c11] text-white flex items-center justify-center px-4">

      <main className="w-full max-w-[1280px] min-h-screen flex items-center justify-center">

        <div className="w-full max-w-[380px]">

          <div className="rounded-lg bg-[#19171c] px-7 py-7 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">

            <div className="flex justify-center">

              <div className="w-10 h-10 rounded-md bg-[#7655bd] flex items-center justify-center">
                <Network
                  size={19}
                  strokeWidth={1.8}
                />
              </div>

            </div>

            <div className="text-center mt-3">

              <h1 className="text-base font-semibold">
                Synthetix AI
              </h1>

              <p className="text-[10px] text-white/45 mt-1">
                Sign in to your workspace
              </p>

            </div>

            <div className="grid grid-cols-2 gap-3 mt-7">

              <button
                type="button"
                className="h-9 rounded-md bg-[#27242b] hover:bg-[#302c34] flex items-center justify-center gap-2 text-[9px] transition"
              >
                <span className="text-[11px] font-medium">
                  G
                </span>
                GOOGLE
              </button>

              <button
                type="button"
                className="h-9 rounded-md bg-[#27242b] hover:bg-[#302c34] flex items-center justify-center gap-2 text-[9px] transition"
              >
                <span className="text-[11px]">
                  ◈
                </span>
                GITHUB
              </button>

            </div>

            <div className="flex items-center gap-3 my-6">

              <span className="flex-1 h-px bg-white/10" />

              <span className="text-[8px] text-white/30 whitespace-nowrap">
                or continue with email
              </span>

              <span className="flex-1 h-px bg-white/10" />

            </div>

            <form
              onSubmit={handleSubmit(onLoginSubmit)}
              className="space-y-5"
            >

              <div>

                <label className="block text-[8px] mb-2">
                  EMAIL ADDRESS
                </label>

                <div className="relative">

                  <Mail
                    size={13}
                    strokeWidth={1.5}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-white/25"
                  />

                  <input
                    type="email"
                    placeholder="name@company.com"
                    className={`w-full h-10 rounded-md bg-[#0d0c10] pl-9 pr-3 text-[10px] outline-none placeholder:text-white/25 transition ${
                      errors.loginEmail
                        ? "ring-1 ring-red-500/60"
                        : "focus:bg-[#121116]"
                    }`}
                    {...register("loginEmail", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email",
                      },
                      setValueAs: (value) => value.trim().toLowerCase(),
                    })}
                  />

                </div>

                {errors.loginEmail && (
                  <p className="text-[8px] text-red-400 mt-1.5">
                    {errors.loginEmail.message}
                  </p>
                )}

              </div>

              <div>

                <div className="flex items-center justify-between mb-2">

                  <label className="text-[8px]">
                    PASSWORD
                  </label>

                  <button
                    type="button"
                    className="text-[8px] text-[#a486eb] hover:text-[#c2aff8] transition"
                  >
                    Forgot password?
                  </button>

                </div>

                <div className="relative">

                  <Lock
                    size={13}
                    strokeWidth={1.5}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-white/25"
                  />

                  <input
                    type={showLoginPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className={`w-full h-10 rounded-md bg-[#0d0c10] pl-9 pr-9 text-[10px] outline-none placeholder:text-white/25 transition ${
                      errors.loginPassword
                        ? "ring-1 ring-red-500/60"
                        : "focus:bg-[#121116]"
                    }`}
                    {...register("loginPassword", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                  />

                  <button
                    type="button"
                    onClick={toggleLoginPassword}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/25 hover:text-white transition"
                  >
                    {showLoginPassword ? (
                      <EyeOff size={13} />
                    ) : (
                      <Eye size={13} />
                    )}
                  </button>

                </div>

                {errors.loginPassword && (
                  <p className="text-[8px] text-red-400 mt-1.5">
                    {errors.loginPassword.message}
                  </p>
                )}

              </div>

              <label className="flex items-center gap-2 cursor-pointer">

                <input
                  type="checkbox"
                  className="w-3 h-3 accent-[#7655bd]"
                  {...register("remember")}
                />

                <span className="text-[8px] text-white/45">
                  Stay signed in
                </span>

              </label>

              <button
                type="submit"
                disabled={isLoginLoading}
                className="w-full h-11 rounded-md bg-[#7655bd] hover:bg-[#8565ce] disabled:opacity-50 flex items-center justify-center gap-2 text-[10px] font-medium transition"
              >
                {isLoginLoading ? "Signing in..." : "Sign In"}

                {!isLoginLoading && (
                  <ArrowRight
                    size={13}
                    strokeWidth={1.8}
                  />
                )}
              </button>

            </form>

            <p className="text-center text-[8px] text-white/40 mt-6">

              Don't have an account?{" "}

              <button
              onClick={()=> navigate("/register")}
                type="button"
                className="text-white hover:text-[#aa8df0] transition"
              >
                Sign Up
              </button>

            </p>

          </div>

          <div className="text-center mt-6">

            <p className="text-[7px] text-white/25">
              © 2024 Synthetix AI. Enterprise Intelligence Platform.
            </p>

            <div className="flex justify-center gap-5 mt-2 text-[7px] text-white/25">

              <button className="hover:text-white/50 transition">
                Privacy Policy
              </button>

              <button className="hover:text-white/50 transition">
                Terms of Service
              </button>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
};

export default Login;