import { HobbyistPanel } from "@/components/hobbyist-panel";
import { profile } from "@/data/profile";

export default function Home() {
  const [first, middle, ...rest] = profile.name.split(" ");
  const last = rest.join(" ");

  return (
    <main className="relative flex flex-col sm:block h-full min-h-[calc(100dvh-6rem)] px-6 sm:px-0 pb-8 sm:pb-0 gap-8 sm:gap-0">
      <div className="h-[38vh] sm:h-auto sm:absolute sm:inset-0 sm:left-[45%]">
        <HobbyistPanel attributes={profile.attributes} />
      </div>

      <h1 className="hero-name mt-auto sm:mt-0 sm:absolute sm:bottom-10 sm:left-10 sm:max-w-[70%]">
        <span className="block">{first}</span>
        <span className="block">{middle}</span>
        <span className="accent block">{last}</span>
      </h1>
    </main>
  );
}
