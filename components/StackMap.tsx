import { Badge } from "./Badge";

type Layer = {
  layer: string;
  purpose: string;
  decisions: string[];
};

export function StackMap({ layers }: { layers: Layer[] }) {
  return (
    <div className="grid gap-4">
      {layers.map((layer, index) => (
        <article key={layer.layer} className="grid gap-4 rounded-lg border border-line bg-white p-5 dark:border-slate-800 dark:bg-slate-950 md:grid-cols-[160px_1fr]">
          <div>
            <Badge tone={index % 2 === 0 ? "green" : "blue"}>Layer {index + 1}</Badge>
            <h3 className="mt-3 text-lg font-black">{layer.layer}</h3>
          </div>
          <div>
            <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">{layer.purpose}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {layer.decisions.map((decision) => <Badge key={decision}>{decision}</Badge>)}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
