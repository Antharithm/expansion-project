import { useEffect } from "react";
import useSWR from "swr";

async function fetcher(...args) {
  const res = await fetch(...args);
  return res.json();
}

function ViewCounter({ slug, footer = false }) {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views = new Number(data?.total);

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: "POST",
      });

    if (footer) {
      registerView();
    }
  }, [slug]);

  return (
    <span className="text-[#50fd9a]">
      {data ? `${views.toLocaleString()} views` : "(still loading)"}
    </span>
  );
}

function formatViews(views) {
  return `${views > 0 ? views.toLocaleString() : "–––"} views`;
}

/// FOOTER ///
const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-[#f6f3ed] determination-mono-font">
      <div className="text-center p-12 justify-center">
        {/* EXPANSIVE LABS */}
        <div style={{ position: "relative", top: "-10px", margin: "10px 0" }}>
          <h1
            style={{
              fontFamily: "Press Start 2P",
              fontSize: "10px",
              color: "#717171",
            }}
          >
            This webpage is powered by
            <a
              href="https://github.com/Expansive-Labs"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#09846d",
                textDecoration: "none",
                letterSpacing: "2px",
              }}
            >
              {" "}
              <p className="">EXPANSIVE LABS</p>
            </a>
          </h1>
        </div>
        <span className="text-muted"></span>
        <p className="mt-1 text-slate-600">
          Visitor count:
          <span className="text-[#50fd9a]">(still loading) {ViewCounter}</span>
        </p>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
