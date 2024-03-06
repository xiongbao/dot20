import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center p-6 md:p-24 text-white font-light">
      <h1 className="text-4xl md:text-6xl"><span className="font-bold block text-6xl md:text-8xl">Dot20</span> inscription Marketplace</h1>
      <p className="text-2xl md:text-4xl">coming soon...</p>
      <video className="fixed top-0 left-0 w-full h-full object-cover mix-blend-screen -z-10 isolate" autoPlay loop muted playsInline>
        <source src="/bg.webm"/>
      </video>
    </main>
  );
}
