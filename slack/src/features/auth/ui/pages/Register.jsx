import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Sparkles,
} from "lucide-react";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    errors,
    onRegisterSubmit,
    showRegisterPassword,
    toggleRegisterPassword,
    showConfirmPassword,
    toggleConfirmPassword,
    passwordStrength,
    isRegisterLoading,
    navigate
  } = useAuth();

  const registerPassword = watch("registerPassword", "");

  return (
    <div className="min-h-screen bg-[#0d0c11] text-white">

      <div className="min-h-screen flex">

        <section className="hidden lg:flex lg:w-[44%] relative overflow-hidden">

          <div className="absolute inset-0 bg-[#101b2d]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(75,130,210,.35),transparent_35%),radial-gradient(circle_at_60%_55%,rgba(75,80,180,.3),transparent_40%)]" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c11] via-transparent to-transparent" />
          </div>

          <div className="relative z-10 p-8">
            <span className="text-sm font-medium">
              Synthetix AI
            </span>
          </div>

          <div className="relative z-10 mt-auto p-10 pb-12">

            <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-white/70 mb-4">
              <Sparkles size={12} />
              Next-gen intelligence
            </div>

            <h1 className="text-3xl font-semibold leading-tight">
              Accelerate your team's
              <br />
              intelligence.
            </h1>

            <p className="mt-4 max-w-[350px] text-xs leading-6 text-white/60">
              Connect your enterprise data to our specialized AI
              models and unlock unparalleled strategic insights
              in seconds.
            </p>

            <div className="flex gap-10 mt-7">

              <div>
                <p className="text-lg">
                  99.9%
                </p>

                <p className="text-[8px] text-white/40 uppercase">
                  Uptime SLA
                </p>
              </div>

              <div>
                <p className="text-lg">
                  ISO
                </p>

                <p className="text-[8px] text-white/40 uppercase">
                  27001 Certified
                </p>
              </div>

            </div>

          </div>

        </section>

        <section className="flex-1 flex items-center justify-center px-6 py-12">

          <div className="w-full max-w-[430px]">

            <div className="mb-8">

              <h2 className="text-2xl font-semibold">
                Create your account
              </h2>

              <p className="text-[10px] text-white/45 mt-2">
                Experience the future of collaborative data intelligence.
              </p>

            </div>

            <form
              onSubmit={handleSubmit(onRegisterSubmit)}
              className="space-y-5"
            >

              <div>

                <label className="block text-[9px] mb-2">
                  FULL NAME
                </label>

                <div className="relative">

                  <User
                    size={14}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-white/25"
                  />

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full h-11 rounded-md bg-[#1a181d] pl-10 pr-3 text-xs outline-none placeholder:text-white/25 focus:bg-[#1d1a20] transition"
                    {...register("fullName", {
                      required: "Full name is required",
                      minLength: {
                        value: 3,
                        message: "Name must be at least 3 characters",
                      },
                    })}
                  />

                </div>

                {errors.fullName && (
                  <p className="text-[9px] text-red-400 mt-1">
                    {errors.fullName.message}
                  </p>
                )}

              </div>

              <div>

                <label className="block text-[9px] mb-2">
                  EMAIL ADDRESS
                </label>

                <div className="relative">

                  <Mail
                    size={14}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-white/25"
                  />

                  <input
                    type="email"
                    placeholder="name@company.com"
                    className="w-full h-11 rounded-md bg-[#1a181d] pl-10 pr-3 text-xs outline-none placeholder:text-white/25 focus:bg-[#1d1a20] transition"
                    {...register("registerEmail", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email",
                      },
                      setValueAs: (value) => value.trim().toLowerCase(),
                    })}
                  />

                </div>

                {errors.registerEmail && (
                  <p className="text-[9px] text-red-400 mt-1">
                    {errors.registerEmail.message}
                  </p>
                )}

              </div>

              <div>

                <label className="block text-[9px] mb-2">
                  PASSWORD
                </label>

                <div className="relative">

                  <Lock
                    size={14}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-white/25"
                  />

                  <input
                    type={showRegisterPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full h-11 rounded-md bg-[#1a181d] pl-10 pr-10 text-xs outline-none placeholder:text-white/25 focus:bg-[#1d1a20] transition"
                    {...register("registerPassword", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                    })}
                  />

                  <button
                    type="button"
                    onClick={toggleRegisterPassword}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition"
                  >
                    {showRegisterPassword ? (
                      <EyeOff size={14} />
                    ) : (
                      <Eye size={14} />
                    )}
                  </button>

                </div>

                <div className="flex gap-1 mt-2">

                  {[1, 2, 3, 4].map((item) => (
                    <div
                      key={item}
                      className={`h-[3px] flex-1 rounded-full ${
                        item <= passwordStrength
                          ? "bg-[#9b7bea]"
                          : "bg-white/10"
                      }`}
                    />
                  ))}

                </div>

                <p className="text-[8px] text-white/40 mt-1">

                  {passwordStrength === 0 && "Enter a password"}

                  {passwordStrength === 1 && "Weak password"}

                  {passwordStrength === 2 && "Fair password"}

                  {passwordStrength === 3 && "Strong password"}

                  {passwordStrength === 4 && "Very strong password"}

                </p>

                {errors.registerPassword && (
                  <p className="text-[9px] text-red-400 mt-1">
                    {errors.registerPassword.message}
                  </p>
                )}

              </div>

              <div>

                <label className="block text-[9px] mb-2">
                  CONFIRM PASSWORD
                </label>

                <div className="relative">

                  <Lock
                    size={14}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-white/25"
                  />

                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full h-11 rounded-md bg-[#1a181d] pl-10 pr-10 text-xs outline-none placeholder:text-white/25 focus:bg-[#1d1a20] transition"
                    {...register("confirmPassword", {
                      required: "Please confirm your password",
                      validate: (value) =>
                        value === registerPassword ||
                        "Passwords do not match",
                    })}
                  />

                  <button
                    type="button"
                    onClick={toggleConfirmPassword}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={14} />
                    ) : (
                      <Eye size={14} />
                    )}
                  </button>

                </div>

                {errors.confirmPassword && (
                  <p className="text-[9px] text-red-400 mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}

              </div>

              <div>

                <label className="flex items-start gap-2 cursor-pointer">

                  <input
                    type="checkbox"
                    className="mt-[2px] accent-[#8b6bd4]"
                    {...register("terms", {
                      required: "Please accept the terms",
                    })}
                  />

                  <span className="text-[8px] leading-4 text-white/45">
                    I agree to the{" "}
                    <span className="text-white/80">
                      Terms of Service
                    </span>{" "}
                    and{" "}
                    <span className="text-white/80">
                      Privacy Policy
                    </span>
                    .
                  </span>

                </label>

                {errors.terms && (
                  <p className="text-[9px] text-red-400 mt-1">
                    {errors.terms.message}
                  </p>
                )}

              </div>

              <button
                type="submit"
                disabled={isRegisterLoading}
                className="w-full h-11 rounded-md bg-gradient-to-r from-[#7655bd] to-[#b79af7] text-[10px] font-semibold text-[#130e19] hover:opacity-90 disabled:opacity-50 transition"
              >
                {isRegisterLoading
                  ? "Creating Account..."
                  : "Create Account"}
              </button>

            </form>

            <div className="flex items-center gap-3 my-6">

              <span className="flex-1 h-px bg-white/10" />

              <span className="text-[8px] text-white/30">
                OR CONTINUE WITH
              </span>

              <span className="flex-1 h-px bg-white/10" />

            </div>

            <div className="grid grid-cols-2 gap-3">

              <button
                type="button"
                className="h-10 rounded-md bg-[#19171c] hover:bg-[#211e25] text-[9px] transition"
              >
                <span className="mr-2 text-[11px]">
                  G
                </span>
                Google
              </button>

              <button
                type="button"
                className="h-10 rounded-md bg-[#19171c] hover:bg-[#211e25] text-[9px] transition"
              >
                <span className="mr-2">
                  ◈
                </span>
                SSO
              </button>

            </div>

            <p className="text-center text-[9px] text-white/40 mt-7">

              Already have an account?{" "}

              <button
              onClick={()=> navigate("/")}
                type="button"
                className="text-[#aa8df0] hover:text-white transition"
              >
                Log In
              </button>

            </p>

          </div>

        </section>

      </div>

      <footer className="fixed bottom-0 left-0 right-0 h-12 px-6 sm:px-10 flex items-center justify-between bg-[#0d0c11]">

        <span className="text-xs">
          Synthetix AI
        </span>

        <div className="hidden sm:flex gap-6 text-[7px] text-white/35">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Security</span>
          <span>System Status</span>
        </div>

        <span className="text-[7px] text-white/30">
          © 2024 Synthetix AI. Enterprise Intelligence Platform.
        </span>

      </footer>

    </div>
  );
};

export default Register;