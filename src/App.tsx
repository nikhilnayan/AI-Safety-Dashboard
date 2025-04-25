import { useState } from "react";
import { Incident, mockIncidents } from "./data/mockIncidents";
import IncidentCard from "./components/IncidentCard";
import IncidentForm from "./components/IncidentForm";
import Controls from "./components/Controls";
import { motion } from "framer-motion";

const App = () => {
  const [incidents, setIncidents] = useState<Incident[]>(mockIncidents);
  const [severityFilter, setSeverityFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  const filtered = incidents.filter((incident) =>
    severityFilter === "All" ? true : incident.severity === severityFilter
  );

  const sorted = [...filtered].sort((a, b) => {
    const dateA = new Date(a.reported_at).getTime();
    const dateB = new Date(b.reported_at).getTime();
    return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
  });

  const addIncident = (newIncident: Incident) => {
    setIncidents((prev) => [newIncident, ...prev]);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-teal-200 to-slate-600 px-4 py-10">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-center mb-10 text-blue-700"
        >
          AI Safety Incident Dashboard
        </motion.h1>

        <Controls
          severity={severityFilter}
          setSeverity={setSeverityFilter}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />

        <motion.div
          layout
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10"
        >
          {sorted.map((incident) => (
            <motion.div
              key={incident.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <IncidentCard incident={incident} />
            </motion.div>
          ))}
        </motion.div>
        <IncidentForm addIncident={addIncident} />
      </div>
      <footer className=" w-full text-center py-5 bg-gray-800 text-white">
        <p className="text-lg font-semibold">Nikhil Nayan</p>
        <p className="text-sm">📧 nayannikhil25@gmail.com | 📞 +91-8969596898</p>
        <a
          href="https://drive.google.com/file/d/1zAVC0FAWLHYVDEjWrt1meEwyvNWxrEsG/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-all"
        >
          My CV
        </a>
      </footer>
    </>
  );
};

export default App;
