import Button from "./Components/Button";
export default function Home() {
  const isAuthenticated = false; // Replace with actual authentication logic
  const username = "User"; // Replace with actual username logic

  return (
    <>
      <nav className="sticky-nav fixed w-full z-50 bg-gray-900/80 border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <a href="/" className="flex items-center space-x-3">
                <img src="/ProgLobby.png" alt="Proglobby Logo" className="w-12 h-12 hover:rotate-[15deg] transition-transform duration-300" />
                <span className="text-2xl font-bold text-white">Proglobby</span>
              </a>
              <div className="hidden md:flex items-center space-x-6">
                <a href="/" className="nav-link text-gray-300 hover:text-purple-400 px-4 py-2 transition-all duration-300 relative group">
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="/blog" className="nav-link text-gray-300 hover:text-purple-400 px-4 py-2 transition-all duration-300 relative group">
                  Blog
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="/learn" className="nav-link text-gray-300 hover:text-purple-400 px-4 py-2 transition-all duration-300 relative group">
                  Learn
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="/about" className="nav-link text-gray-300 hover:text-purple-400 px-4 py-2 transition-all duration-300 relative group">
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <div className="relative group">
                  <button className="px-4 py-2 text-purple-400 hover:text-white transition-all duration-300 hover:bg-purple-600/20 rounded-lg">
                    {username}
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-gray-800/90 border border-gray-700/30 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="/profile" className="block px-4 py-2 text-gray-300 hover:bg-purple-600/20 hover:text-white">Profile</a>
                    <a href="/logout" className="block px-4 py-2 text-gray-300 hover:bg-purple-600/20 hover:text-white">Logout</a>
                  </div>
                </div>
              ) : (
                <>
                  <a href="/login" className="px-4 py-2 text-purple-400 hover:text-white transition-all duration-300 hover:bg-purple-600/20 rounded-lg">
                    Sign In
                  </a>
                  <Button text="Sign Up" />
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-40 pb-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto transform transition-all duration-500 hover:scale-[1.01]">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                Anyone Can Learn Computer Science
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 mx-auto max-w-2xl transform transition-all duration-300 hover:scale-105">
              Transform your career with immersive learning experiences in cutting-edge technologies.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="/start-learning" className="cta-button relative overflow-hidden px-8 py-4 rounded-full text-lg font-medium bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:from-pink-500 hover:to-purple-600 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30">
                Start Learning Now With Proglobby
                <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 -z-10">
          <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full -top-48 -left-48 blur-3xl animate-float"></div>
          <div className="absolute w-96 h-96 bg-pink-500/10 rounded-full -bottom-48 -right-48 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="course-card transform transition-all duration-500 hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 border border-gray-700/30 h-80">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">Modern Web Development</h3>
                  <p className="text-gray-400">Master React, Node.js, and Next.js</p>
                  <div className="mt-4 flex items-center space-x-2 text-purple-400">
                    <span>🚀 Beginner Friendly</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="course-card transform transition-all duration-500 hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 border border-gray-700/30 h-80">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">Modern Web Development</h3>
                  <p className="text-gray-400">Master React, Node.js, and Next.js</p>
                  <div className="mt-4 flex items-center space-x-2 text-purple-400">
                    <span>🚀 Beginner Friendly</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="course-card transform transition-all duration-500 hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 border border-gray-700/30 h-80">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">Modern Web Development</h3>
                  <p className="text-gray-400">Master React, Node.js, and Next.js</p>
                  <div className="mt-4 flex items-center space-x-2 text-purple-400">
                    <span>🚀 Beginner Friendly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}