import { useState } from "react";
import Tooltip from "@/components/Tooltip";

const TooltipPage = () => {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const code = `import Tooltip from "@/components/Tooltip";

<Tooltip text="This tooltip appears on top">
  <button className="rounded-md bg-violet-600 px-6 py-3 text-white transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.03] hover:bg-violet-700 hover:shadow-[0_12px_30px_rgba(124,58,237,0.35)] active:translate-y-0 active:scale-95">
    Top
  </button>
</Tooltip>

<Tooltip text="This tooltip appears below" position="bottom">
  <button className="rounded-md bg-slate-900 px-6 py-3 text-white transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.03] hover:bg-slate-800 hover:shadow-[0_12px_30px_rgba(15,23,42,0.35)] active:translate-y-0 active:scale-95">
    Bottom
  </button>
</Tooltip>

<Tooltip text="This tooltip appears on the left" position="left">
  <button className="rounded-md border border-slate-300 bg-white px-6 py-3 text-slate-700 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.03] hover:border-violet-400 hover:bg-violet-50 hover:text-violet-700 hover:shadow-[0_12px_30px_rgba(124,58,237,0.18)] active:translate-y-0 active:scale-95">
    Left
  </button>
</Tooltip>

<Tooltip text="This tooltip appears on the right" position="right">
  <button className="rounded-md border border-slate-300 bg-white px-6 py-3 text-slate-700 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.03] hover:border-violet-400 hover:bg-violet-50 hover:text-violet-700 hover:shadow-[0_12px_30px_rgba(124,58,237,0.18)] active:translate-y-0 active:scale-95">
    Right
  </button>
</Tooltip>`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-bold text-slate-900">
          Tooltip
        </h1>

        <p className="mt-3 text-lg text-slate-600">
          The Tooltip component is used to display additional information
          when the user hovers over an element.
        </p>
      </div>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">
          Usage
        </h2>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b bg-white px-5 py-3">
            <span className="text-sm font-medium text-slate-700">
              Preview
            </span>

            <button
              onClick={() => setShowCode(!showCode)}
              className="rounded-md bg-slate-100 px-3 py-1.5 text-sm text-slate-700 transition-all duration-200 hover:bg-slate-200 hover:shadow-sm active:scale-95"
            >
              &lt;/&gt; {showCode ? "Hide Code" : "View Code"}
            </button>
          </div>

          <div className="relative flex min-h-[300px] items-center justify-center gap-7 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-violet-50">
            <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-violet-200/20 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-indigo-200/20 blur-3xl" />

            <Tooltip text="This tooltip appears on top">
              <button
                className="
                  relative rounded-md bg-violet-600 px-6 py-3 text-white
                  shadow-md shadow-violet-300/20
                  transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
                  hover:-translate-y-1.5
                  hover:scale-[1.03]
                  hover:bg-violet-700
                  hover:shadow-[0_14px_35px_rgba(124,58,237,0.35)]
                  active:translate-y-0
                  active:scale-95
                "
              >
                Top
              </button>
            </Tooltip>

            <Tooltip
              text="This tooltip appears below"
              position="bottom"
            >
              <button
                className="
                  relative rounded-md bg-slate-900 px-6 py-3 text-white
                  shadow-md shadow-slate-400/20
                  transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
                  hover:-translate-y-1.5
                  hover:scale-[1.03]
                  hover:bg-slate-800
                  hover:shadow-[0_14px_35px_rgba(15,23,42,0.35)]
                  active:translate-y-0
                  active:scale-95
                "
              >
                Bottom
              </button>
            </Tooltip>

            <Tooltip
              text="This tooltip appears on the left"
              position="left"
            >
              <button
                className="
                  relative rounded-md border border-slate-300 bg-white px-6 py-3 text-slate-700
                  shadow-sm
                  transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
                  hover:-translate-y-1.5
                  hover:scale-[1.03]
                  hover:border-violet-400
                  hover:bg-violet-50
                  hover:text-violet-700
                  hover:shadow-[0_14px_35px_rgba(124,58,237,0.18)]
                  active:translate-y-0
                  active:scale-95
                "
              >
                Left
              </button>
            </Tooltip>

            <Tooltip
              text="This tooltip appears on the right"
              position="right"
            >
              <button
                className="
                  relative rounded-md border border-slate-300 bg-white px-6 py-3 text-slate-700
                  shadow-sm
                  transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
                  hover:-translate-y-1.5
                  hover:scale-[1.03]
                  hover:border-violet-400
                  hover:bg-violet-50
                  hover:text-violet-700
                  hover:shadow-[0_14px_35px_rgba(124,58,237,0.18)]
                  active:translate-y-0
                  active:scale-95
                "
              >
                Right
              </button>
            </Tooltip>
          </div>

          {showCode && (
            <div className="border-t border-slate-200">
              <div className="flex items-center justify-between bg-slate-900 px-5 py-2.5">
                <span className="text-xs font-medium text-slate-400">
                  TSX
                </span>

                <button
                  onClick={handleCopy}
                  className="rounded-md bg-slate-700 px-3 py-1.5 text-xs text-white transition-all duration-200 hover:bg-slate-600 active:scale-95"
                >
                  {copied ? "✓ Copied" : "Copy"}
                </button>
              </div>

              <pre className="max-h-[500px] overflow-auto bg-white p-6 text-sm leading-7 text-slate-800">
                <code>{code}</code>
              </pre>
            </div>
          )}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">
          API Reference
        </h2>

        <div className="overflow-hidden rounded-xl border border-slate-200">
          <table className="w-full text-left">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3">Prop</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Default</th>
                <th className="px-4 py-3">Description</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t">
                <td className="px-4 py-3 text-blue-600">text</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3">-</td>
                <td className="px-4 py-3">
                  Content displayed inside tooltip
                </td>
              </tr>

              <tr className="border-t">
                <td className="px-4 py-3 text-blue-600">position</td>
                <td className="px-4 py-3">
                  top | bottom | left | right
                </td>
                <td className="px-4 py-3">top</td>
                <td className="px-4 py-3">
                  Controls tooltip position
                </td>
              </tr>

              <tr className="border-t">
                <td className="px-4 py-3 text-blue-600">children</td>
                <td className="px-4 py-3">ReactNode</td>
                <td className="px-4 py-3">-</td>
                <td className="px-4 py-3">
                  Element that triggers tooltip
                </td>
              </tr>

              <tr className="border-t">
                <td className="px-4 py-3 text-blue-600">disabled</td>
                <td className="px-4 py-3">boolean</td>
                <td className="px-4 py-3">false</td>
                <td className="px-4 py-3">
                  Disables the tooltip
                </td>
              </tr>

              <tr className="border-t">
                <td className="px-4 py-3 text-blue-600">className</td>
                <td className="px-4 py-3">string</td>
                <td className="px-4 py-3">""</td>
                <td className="px-4 py-3">
                  Custom classes for the wrapper
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default TooltipPage;