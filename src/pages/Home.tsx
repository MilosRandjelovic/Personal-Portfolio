
const Home = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between py-20">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-gray-800 bg-clip-text text-transparent">
              Frontend Developer
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              "Transforming ideas into seamless digital experiences through clean and efficient code."
            </p>
          </div>
          <div className="md:w-1/2 text-center">
            <img
              src="./profile.png"
              alt="Profile"
              className="rounded-full w-64 h-64 object-cover mx-auto shadow-xl mb-6"
            />
            <h2 className="text-2xl font-bold text-gray-800">
              Milos Randjelovic
            </h2>
          </div>
        </div>

        {/* Quote Section */}
        <div className="text-center py-20">
          <blockquote className="text-2xl italic text-gray-600">
            "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it."
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Home;