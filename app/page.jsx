// app/page.jsx — Next.js App Router entry
import VideoIntro from "@/components/VideoIntro";

export default function Home() {
  return (
    <main>
      <VideoIntro videoSrc="/hero-video.mp4" />

      {/* ── Your next section goes here ─────────────── */}
      <section
        id="about"
        style={{
          minHeight: "100vh",
          background: "#0f0c09",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ color: "rgba(255,255,255,0.18)", letterSpacing: "0.1em" }}>
          Your portfolio continues here
        </p>
      </section>
    </main>
  );
}
