import logoImg from "@/assets/Angadi-world-New-logo.jpg";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center">
      <img
        src={logoImg}
        alt="Angadi World Technologies"
        className={`h-14 w-auto ${light ? "brightness-0 invert" : ""}`}
        loading="eager"
      />
    </div>
  );
}
