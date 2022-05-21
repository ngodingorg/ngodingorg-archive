import { FiGlobe } from "react-icons/fi";

export default function BrowserPreviewSection({ iframeValue }: any) {
  return (
    <>
      <div
        className="bg-slate-100 flex flex-row items-center fixed top-16 w-1/3"
        style={{ marginTop: 1 }}
      >
        <div className="p-4" style={{ color: "#94a3b8" }}>
          <FiGlobe />
        </div>
        <div className="bg-white py-3.5 pl-4 pr-12">
          <p className="font-ng-text text-sm font-normal">
            http://localhost:8000
          </p>
        </div>
      </div>
      <iframe
        title="output"
        sandbox="allow-scripts"
        height="100%"
        width="100%"
        className="pt-16"
        frameBorder="0"
        srcDoc={iframeValue}
      />
    </>
  );
}
