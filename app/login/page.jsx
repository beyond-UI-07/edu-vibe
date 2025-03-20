import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg overflow-hidden flex">
        {/* Login Form */}
        <div className="w-full md:w-1/2 p-8">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <div>
              <div className="font-bold text-lg">IQMS</div>
              <div className="text-xs text-gray-500">Pressure Sensor</div>
            </div>
          </div>

          {/* Form Header */}
          <h1 className="text-2xl font-bold mb-2">Login to Dashboard</h1>
          <p className="text-gray-500 mb-6">Fill the below form to login</p>

          {/* Social Buttons */}
          <div className="flex gap-4 mb-6">
            <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 px-4 w-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
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
              <span>Sign in with Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 px-4 w-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              <span>Sign in with Apple</span>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <div className="px-4 text-sm text-gray-500">OR</div>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Login Form */}
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="Enter email address"
              />
            </div>

            <div className="mb-2">
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="Enter Password"
              />
            </div>

            <div className="text-right mb-6">
              <a href="#" className="text-indigo-600 text-sm">
                Forgot Password?
              </a>
            </div>

            <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium">
              Login
            </button>
          </form>

          <p className="text-center mt-6 text-sm text-gray-500">
            Don't have an account?{" "}
            <Link href="/sign-up" className="text-indigo-600 font-medium">
              Sign up
            </Link>
          </p>
        </div>

        {/* Preview Section */}
        <div className="hidden md:block w-1/2 bg-blue-50 p-8">
          <div className="text-sm text-gray-500 uppercase tracking-wider mb-4">IQM SYSTEMS Pressure Control</div>

          <h2 className="text-xl font-semibold text-gray-800 mb-8">
            Manage your concreting and construction operations{" "}
            <span className="text-indigo-600">more professionally</span>
          </h2>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-3 pb-4 border-b border-gray-200 mb-4">
              <div className="w-8 h-8 bg-indigo-600 rounded-md flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <div>
                <div className="text-sm font-medium">Welcome to Overview</div>
                <div className="text-xs text-gray-500">
                  Please define your project structures before start creating Pour sessions
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-xs text-gray-500 mb-1">Structures</div>
                <div className="text-lg font-bold">29</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-xs text-gray-500 mb-1">Pour Sessions</div>
                <div className="text-lg font-bold">12</div>
              </div>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex justify-between mb-4">
                <div className="text-sm font-medium">Pour Sessions schedule</div>
                <div className="flex gap-4 text-xs text-gray-500">
                  <div>Mo 12</div>
                  <div>Tu 13</div>
                  <div>We 14</div>
                </div>
              </div>

              <div className="relative h-40">
                <div className="absolute left-0 top-0 text-xs text-gray-500">4 PM</div>
                <div className="absolute left-0 top-1/4 text-xs text-gray-500">3 PM</div>
                <div className="absolute left-0 top-1/2 text-xs text-gray-500">2 PM</div>
                <div className="absolute left-0 top-3/4 text-xs text-gray-500">1 PM</div>

                <div className="absolute left-12 right-0 top-1/4 bg-blue-100 p-2 rounded text-xs border-l-2 border-blue-500">
                  <div className="font-medium">Centre Wall Pour</div>
                  <div className="text-gray-500">session description</div>
                </div>

                <div className="absolute left-12 right-0 top-3/4 bg-green-100 p-2 rounded text-xs border-l-2 border-green-500">
                  <div className="font-medium">Centre Wall Pour</div>
                  <div className="text-gray-500">session description</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

