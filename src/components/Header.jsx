export default function Header() {
  return (
    <header className="p-8 bg-gradient-to-r from-purple-700 to-purple-500 text-white">
      <div className="flex gap-2 items-center container mx-auto">
        <img
          src="../images/TrollFace.png"
          alt="TrollFace"
          className="h-8 w-8"
        />
        <div className="text-2xl">Meme Generator</div>
      </div>
    </header>
  );
}
