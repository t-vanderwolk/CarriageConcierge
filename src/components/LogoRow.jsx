// src/components/LogoRow.jsx
const logos = [
  { src: "/images/partners/bugaboo.png", alt: "Bugaboo" },
  { src: "/images/partners/nuna.png", alt: "Nuna" },
  { src: "/images/partners/uppababy.png", alt: "UPPAbaby" },
  { src: "/images/partners/silvercross.png", alt: "Silver Cross" },
  { src: "/images/partners/cybex.png", alt: "Cybex" },
  { src: "/images/partners/britax.png", alt: "Britax" },
  { src: "/images/partners/veer.png", alt: "VEER" },
  { src: "/images/partners/bumbleride.png", alt: "Bumbleride" },
  { src: "/images/partners/doona.png", alt: "Doona" },
  { src: "/images/partners/graco.png", alt: "Graco" },
  { src: "/images/partners/maxi-cosi.png", alt: "Maxi-Cosi" },
  { src: "/images/partners/stokke.png", alt: "Stokke" },
  { src: "/images/partners/thule.png", alt: "Thule" },
  { src: "/images/partners/clek.png", alt: "Clek" },
  { src: "/images/partners/chicco.png", alt: "Chicco" },
{ src: "/images/partners/mockingbird.png", alt: "Mockingbird" },

  { src: "/images/partners/ergobaby.png", alt: "Ergobaby" },
  { src: "/images/partners/babybjorn.png", alt: "BabyBjorn" },
  { src: "/images/partners/evenflo.png", alt: "Evenflo" },
  { src: "/images/partners/joie.png", alt: "Joie" },
  { src: "/images/partners/happiestbaby.png", alt: "HappiestBaby" },
  { src: "/images/partners/babyjogger.png", alt: "BabyJogger" },
  { src: "/images/partners/wonderfold.png", alt: "Wonderfold" },
  { src: "/images/partners/orbitbaby.png", alt: "OrbitBaby" },
  { src: "/images/partners/bob.png", alt: "BOB" },
  { src: "/images/partners/keenz.png", alt: "Keenz" },
  { src: "/images/partners/joolz.png", alt: "Joolz" },
  { src: "/images/partners/pegperego.png", alt: "PegPerego" },
  { src: "/images/partners/babyzen.png", alt: "Babyzen" },






];

export default function LogoRow() {
  return (
    <section className="px-6 pb-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-80">
          {logos.map((l) => (
            <img
              key={l.alt}
              src={l.src}
              alt={l.alt}
              className="h-7 md:h-8 object-contain grayscale hover:grayscale-0 transition"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}