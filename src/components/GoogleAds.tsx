// slots: 6329918287, 
const Slots = [
  '6329918287'
]

const GoogleAd = ({ slot }: {slot: string}) => {
  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", width: "100%", height: "250px" }}
      data-ad-client="ca-pub-2685638626889608"
      data-ad-slot={slot}  // Slot do anúncio
      data-ad-format="auto"
      data-full-width-responsive="true"
      data-auto-format="rspv"
      data-full-width=""
    />
  );
};

// Uso do componente com diferentes slots
export const GoogleAds = () => {
  return (
    <div className="grid grid-cols-3">
      {Slots.map((slot) => (
        <GoogleAd slot={slot} />
      ))}
    </div>
  );
}

// slots especificos
