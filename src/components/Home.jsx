const Home = () => {
 
  const handleDownloadResume = () => {
  const fileId = "1Z1Hdz4LuOjqBPM5yzy1qYmx-smjX6Eub";

  // Preview in a new tab
  window.open(`https://drive.google.com/file/d/${fileId}/preview`, "_blank");

  // Attempt direct download
  const a = document.createElement("a");
  a.href = `https://drive.google.com/uc?export=download&id=${fileId}`;
  a.download = "Raj-Keshkar-Resume.pdf";
  a.click();
};

  
  
  
  return (
    <div name="home" className="h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <img
          src="raj 2.jpg"
          alt="Raj Keshkar"
           className="border-8 border-gray-500 rounded-full mx-auto my-6 w-80 h-80"
          
        />
        <h1 className="text-5xl font-bold mb-4">Hi I&apos;m Raj Keshkar</h1>
        <p className="text-3xl text-white-700">MERN Stack Developer</p>
        <button
          onClick={handleDownloadResume}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 mt-8 rounded-lg transition-colors"
        >
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default Home;