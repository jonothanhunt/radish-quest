export function GraphCard(props) {
  const isoString = props.date;
  const date = new Date(isoString);
  const options = { weekday: "short", day: "numeric", month: "short" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <div className={`w-80  rounded-lg bg-zinc-800 overflow-hidden shrink-0`}>
      <div className="relative">
        {props.image.length > 0 && (
          <img
            alt={""}
            className="h-60 w-full object-cover"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 40%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 40%, transparent 100%)",
            }}
            src={`../images/${props.image}`}
          />
        )}
        <div className="absolute top-3 left-3 ml-auto bg-slate-900/60 backdrop-blur p-2 rounded-lg">
          <p className="text-slate-50">{props.supermarket}</p>
        </div>
        <div className="absolute top-3 right-3 ml-auto bg-slate-900/60 backdrop-blur p-2 rounded-lg">
          <p className="text-slate-50">{formattedDate}</p>
        </div>
      </div>

      <div className="text-center p-3 -mt-10">
        <p
          className="text-slate-50"
          data-tip="A completely arbitrary and subjective score based on the improvement to my mood during radish consumption"
        >
          TasteScore
        </p>

        <p className="text-6xl text-slate-50 font-bold font-mooli">
          <span className="text-2xl">
            {props.previousTasteScore === -1 ? (
              ""
            ) : props.previousTasteScore > props.tasteScore ? (
              <span className="text-red-700 -ml-6">▼</span>
            ) : props.previousTasteScore < props.tasteScore ? (
              <span className="text-green-700 -ml-6">▲</span>
            ) : (
              ""
            )}
          </span>
          {props.tasteScore}
        </p>

        <div className="h-2" />

        <div className="p-2 rounded-lg bg-zinc-900">
          <p className="text-red-300">Spicyness</p>

          {[...Array(props.spiceScore)].map((e, i) => (
            <img
              className="w-5 inline"
              key={"spice_" + i}
              src="./icon/SVG/logo.svg"
              alt=""
            />
          ))}
        </div>

        <div className="h-3" />

        <div className="p-2 rounded-lg bg-zinc-900">
          <p className="text-sky-300">
            Average size: <b>{props.size}mm</b>
          </p>

          {/* sizing ruler */}
          <div >
            <svg className="m-auto mt-3" height={20} width={props.size * 6} preserveAspectRatio="none" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 0 11 10">
              <defs>
              </defs>
              <g id="Layer_1-2" data-name="Layer 1">
                <line vectorEffect="non-scaling-stroke" strokeMiterlimit="10" fill="none" stroke="#fff" className="cls-1" x1="0" y1="5" x2="10" y2="5"/>
                <line vectorEffect="non-scaling-stroke" strokeMiterlimit="10" fill="none" stroke="#fff" className="cls-1" x1="0" x2="0" y2="10"/>
                <line vectorEffect="non-scaling-stroke" strokeMiterlimit="10" fill="none" stroke="#fff" className="cls-1" x1="10" x2="10" y2="10"/>
              </g>
            </svg>
          </div>
        </div>

        <div className="h-3" />

        <div className="p-2 rounded-lg bg-zinc-900">
          <p className="text-slate-50">
            Country of Origin: <b>{props.countryOfOrigin}</b>
          </p>
        </div>

        <div className="h-3" />

        <div className="p-2 rounded-lg bg-zinc-900">
          <p className="text-slate-50"><i>{props.notes}</i></p>
        </div>
      </div>
    </div>
  );
}
