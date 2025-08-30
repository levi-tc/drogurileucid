export default function GaleriePage() {
  const videos = [
    "/IMG_1206.mov",
    "/IMG_1233.mov",
    "/IMG_1235.mov",
    "/IMG_1236.mov",
    "/d2ef0089fcd74439892c01934ea1c418.mov",
    "/c64900009a00427289fbbfb59652a710.mov",
    "/6ba9659eb7c746c2a8fc29c938284be9.mov",
  ];

  return (
    <section className="min-h-[65vh] py-12">
      <div className="glow-wrap glow-blue glow-peach">
        <div className="container mx-auto px-4">
          <div className="surface-rounded mx-auto max-w-6xl rounded-2xl border p-6 sm:p-10">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold tracking-tight">Galerie</h1>
              <p className="mt-2 text-muted-foreground">Ultimele clipuri încărcate</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {videos.map((src) => (
                <div key={src} className="rounded-xl border overflow-hidden surface-rounded">
                  <video
                    className="block w-full h-auto"
                    controls
                    playsInline
                    preload="metadata"
                    muted
                  >
                    <source src={src} type="video/quicktime" />
                    <source src={src} type="video/mp4" />
                    Browserul tău nu suportă redarea video.
                  </video>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


