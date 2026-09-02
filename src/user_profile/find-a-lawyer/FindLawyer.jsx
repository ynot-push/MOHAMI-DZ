import React, { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import lawyers from "../exemple.json";
import "./findlawyer.css";

// Grab every image in the shared assets folder once, so we can resolve the
// relative paths stored in exemple.json ("../images/1.jpg" -> real url).
const imageModules = import.meta.glob("../../assets/images/*", {
  eager: true,
  import: "default",
});
const imageByFileName = Object.fromEntries(
  Object.entries(imageModules).map(([path, url]) => [
    path.split("/").pop(),
    url,
  ])
);
const resolveImage = (picturePath) =>
  imageByFileName[picturePath?.split("/").pop()] || imageByFileName["user.png"];

// Curated so the wilaya field is actually useful to type/select from,
// even though the demo dataset only covers a handful of them.
const WILAYAS = [
  "Alger", "Oran", "Constantine", "Annaba", "Setif", "Batna", "Blida",
  "Tlemcen", "Bejaia", "Skikda", "Sidi Bel Abbes", "Biskra", "Tiaret",
  "Bechar", "Adrar", "Msila", "Chlef", "Jijel", "Ouargla", "Tizi Ouzou",
];

const PRACTICE_AREAS = [
  { label: "Criminal defense", icon: "⚖️", desc: "Charges & criminal court" },
  { label: "Family", icon: "👨‍👩‍👧", desc: "Divorce, custody & more" },
  { label: "Civil rights", icon: "✊", desc: "Discrimination & equality" },
  { label: "Business", icon: "💼", desc: "Contracts & employment" },
  { label: "Car accident", icon: "🚗", desc: "Collisions & insurance" },
  { label: "Government", icon: "🏛️", desc: "Administrative law" },
  { label: "Employement", icon: "🧑‍💻", desc: "Workplace disputes" },
  { label: "Immigration", icon: "🛂", desc: "Visas & citizenship" },
];

function LawyerCard({ person }) {
  return (
    <div className="lc-card">
      <div className="lc-photo-wrap">
        <img
          className="lc-photo"
          src={resolveImage(person.picture)}
          alt={person.name}
          loading="lazy"
        />
        <span className="lc-badge">Verified</span>
      </div>
      <div className="lc-body">
        <h4>{person.name}</h4>
        <p className="lc-location">
          <span className="lc-dot" /> {person.location}
        </p>
        <div className="lc-tags">
          {person.category.slice(0, 3).map((c) => (
            <span className="lc-tag" key={c}>
              {c}
            </span>
          ))}
        </div>
        <div className="lc-rating" aria-hidden="true">
          <span>★★★★★</span>
          <span className="lc-rating-num">
            {(4.4 + (person.id % 5) * 0.1).toFixed(1)}
          </span>
        </div>
        <Link to="/Detail_App" className="lc-cta">
          View profile
        </Link>
      </div>
    </div>
  );
}

function FindLawyer() {
  const [wilaya, setWilaya] = useState("");
  const [practiceArea, setPracticeArea] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const resultsRef = useRef(null);

  const results = useMemo(() => {
    return lawyers.filter((item) => {
      const matchesWilaya =
        !wilaya || item.location.toLowerCase().includes(wilaya.toLowerCase());
      const matchesArea =
        !practiceArea ||
        item.category.some((c) =>
          c.toLowerCase().includes(practiceArea.toLowerCase())
        );
      return matchesWilaya && matchesArea;
    });
  }, [wilaya, practiceArea]);

  const runSearch = (e) => {
    e && e.preventDefault();
    setHasSearched(true);
    requestAnimationFrame(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const pickPracticeArea = (label) => {
    setPracticeArea(label);
    setHasSearched(true);
    requestAnimationFrame(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const clearFilters = () => {
    setWilaya("");
    setPracticeArea("");
    setHasSearched(false);
  };

  return (
    <div className="fal-page">
      {/* HERO / SEARCH — this is the only "hero" on the page; the marketing
          banner already lives on the home page, so this section exists
          purely to get the visitor searching. */}
      <section className="fal-hero">
        <div className="fal-hero-overlay">
          <div className="fal-hero-content">
            <h1>
              Experienced lawyers
              <br />
              are ready for help
            </h1>

            <div className="fal-search-card">
              <div className="fal-search-title">
                <h3>Find a lawyer</h3>
                <hr />
              </div>

              <form className="fal-search-row" onSubmit={runSearch}>
                <div className="fal-field">
                  <label htmlFor="wilaya-input">Wilaya</label>
                  <input
                    id="wilaya-input"
                    list="wilaya-options"
                    placeholder="Search by Wilaya"
                    value={wilaya}
                    onChange={(e) => setWilaya(e.target.value)}
                    autoComplete="off"
                  />
                  <datalist id="wilaya-options">
                    {WILAYAS.map((w) => (
                      <option value={w} key={w} />
                    ))}
                  </datalist>
                </div>

                <div className="fal-field">
                  <label htmlFor="area-input">Practice area</label>
                  <input
                    id="area-input"
                    list="area-options"
                    placeholder="Search by Practise area"
                    value={practiceArea}
                    onChange={(e) => setPracticeArea(e.target.value)}
                    autoComplete="off"
                  />
                  <datalist id="area-options">
                    {PRACTICE_AREAS.map((a) => (
                      <option value={a.label} key={a.label} />
                    ))}
                  </datalist>
                </div>

                <button type="submit" className="fal-search-btn">
                  Search
                </button>
              </form>

              <div className="fal-quick-chips">
                <span>Popular:</span>
                {PRACTICE_AREAS.slice(0, 5).map((a) => (
                  <button
                    key={a.label}
                    type="button"
                    className="fal-chip"
                    onClick={() => pickPracticeArea(a.label)}
                  >
                    {a.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICE AREA GRID */}
      <section className="fal-areas">
        <div className="fal-section-heading">
          <h2>Browse by practice area</h2>
          <p>Tap a category to instantly filter lawyers who specialize in it.</p>
        </div>
        <div className="fal-areas-grid">
          {PRACTICE_AREAS.map((a) => (
            <button
              key={a.label}
              className={
                "fal-area-card" +
                (practiceArea === a.label ? " fal-area-card--active" : "")
              }
              onClick={() => pickPracticeArea(a.label)}
              type="button"
            >
              <h4>{a.label}</h4>
              <p>{a.desc}</p>
            </button>
          ))}
        </div>
      </section>

      {/* RESULTS — only appears once the visitor actually searches */}
      {hasSearched && (
        <section className="fal-results" ref={resultsRef}>
          <div className="fal-results-header">
            <div>
              <h2>Search results</h2>
              <p>
                {results.length} lawyer{results.length === 1 ? "" : "s"}{" "}
                {results.length === 1 ? "matches" : "match"} your criteria
              </p>
            </div>
            <button className="fal-clear-btn" onClick={clearFilters} type="button">
              Clear filters ✕
            </button>
          </div>

          {results.length > 0 ? (
            <div className="fal-results-grid">
              {results.map((person) => (
                <LawyerCard person={person} key={person.id} />
              ))}
            </div>
          ) : (
            <div className="fal-empty">
              <p>No lawyers matched “{wilaya || practiceArea}” yet.</p>
              <button className="fal-clear-btn" onClick={clearFilters} type="button">
                Reset search
              </button>
            </div>
          )}
        </section>
      )}

      {/* HOW IT WORKS */}
      <section className="fal-how">
        <div className="fal-section-heading">
          <h2>How it works</h2>
        </div>
        <div className="fal-how-grid">
          <div className="fal-how-step">
            <span className="fal-how-num">1</span>
            <h4>Search</h4>
            <p>Tell us your wilaya and the type of legal help you need.</p>
          </div>
          <div className="fal-how-step">
            <span className="fal-how-num">2</span>
            <h4>Compare</h4>
            <p>Review verified profiles, specialties and client ratings.</p>
          </div>
          <div className="fal-how-step">
            <span className="fal-how-num">3</span>
            <h4>Connect</h4>
            <p>Reach out directly and book your consultation with confidence.</p>
          </div>
        </div>
      </section>

      {/* CTA FOR LAWYERS */}
      <section className="fal-cta">
        <div>
          <h2>Are you a lawyer?</h2>
          <p>Join Mohami DZ to reach new clients across Algeria for free.</p>
        </div>
        <Link to="/login" className="fal-cta-btn">
          Create your profile
        </Link>
      </section>
    </div>
  );
}

export default FindLawyer;
