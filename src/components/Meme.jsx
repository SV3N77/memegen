import { useState, useEffect } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
  }

  function getMemeImage() {
    const randomIndex = Math.floor(Math.random() * allMemes.length);
    setMeme((prevMeme) => ({
      ...prevMeme,
      randImage: allMemes[randomIndex].url,
    }));
  }
  return (
    <main className="mt-6 container mx-auto">
      <div className="flex flex-col gap-5 px-10 py-4">
        <div className="flex justify-center gap-4">
          <input
            name="topText"
            type="text"
            value={meme.topText}
            onChange={handleChange}
            placeholder="Top Text"
            className="w-full px-2 py-1 border-2 border-gray-400 rounded-md"
          />
          <input
            name="bottomText"
            type="text"
            value={meme.bottomText}
            onChange={handleChange}
            placeholder="Bottom Text"
            className="w-full px-2 py-1 border-2 border-gray-400 rounded-md"
          />
        </div>
        <button
          onClick={getMemeImage}
          className="p-4 text-white bg-gradient-to-r from-purple-700 to-purple-500 rounded-md "
        >
          Get a new meme image 🖼
        </button>
        <div className="relative text-white text-6xl mx-auto">
          <img
            src={meme.randImage}
            alt="meme"
            className="max-w-full rounded-md"
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 uppercase py-2 text-center font-bold">
            {meme.topText}
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 uppercase py-2 text-center font-bold">
            {meme.bottomText}
          </div>
        </div>
      </div>
    </main>
  );
}
