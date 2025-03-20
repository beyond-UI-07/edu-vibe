import { Button } from "@/components/ui/button";
import { useSignUp } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function SignUpPage() {
  const {} = useSignUp()
  return (
    <div className="container mx-auto py-4 md:py-7 px-3 md:px-10">
      <div className="flex flex-col md:flex-row justify-between gap-8 py-6">
        {/* Sign Up Form */}
        <div className="w-full lg:w-1/2">
          <div className="flex items-center gap-3 mb-8">
            <Image
              src="/logo.png"
              width="200"
              height="200"
              alt="EduVibe Logo"
            />
          </div>

          <h1 className="text-2xl font-bold mb-2">Create an Account</h1>
          <p className="text-gray-500 mb-6">Fill the form below to register</p>

          {/* Social Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 px-4 w-full hover:bg-gray-100/80 transition-all duration-200 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
              >
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span>Sign up with Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 px-4 w-full cursor-pointer hover:bg-gray-100/80 transition-all duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
              >
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              <span>Sign up with Apple</span>
            </button>
          </div>

          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <div className="px-4 text-sm text-gray-500">OR</div>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="Enter email address"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="Create a password"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary-600/90 transition-all duration-200 text-white py-2 rounded-lg font-medium"
            >
              Create Account
            </Button>
          </form>

          <p className="text-center mt-6 text-sm text-gray-500">
            Already have an account?{" "}
            <Link href="/login" className="text-primary-600 font-medium">
              Sign in
            </Link>
          </p>
        </div>

        {/* Preview Section */}
        <div className="hidden lg:block w-1/2">
          <img
            src="https://img.freepik.com/premium-vector/vector-sunset-time-illustration_1234575-1004.jpg?semt=ais_hybrid"
            className="w-full h-full object-cover rounded-xl"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
