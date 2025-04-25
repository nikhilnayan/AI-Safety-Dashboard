import { useState } from "react";
import { Incident } from "../data/mockIncidents";
import { motion } from "framer-motion";

// Props for receiving the addIncident callback
type Props = {
  addIncident: (incident: Incident) => void;
};

const IncidentForm = ({ addIncident }: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // To ensure fields are not empty
    if (!title || !description || !severity) return;

    const newIncident: Incident = {
      id: Date.now(), // Generate unique ID based on timestamp
      title,
      description,
      severity: severity as "Low" | "Medium" | "High",
      reported_at: new Date().toISOString(), // Current date and time
    };

    addIncident(newIncident);  //Sends data to parent components

    // To reset the form fields
    setTitle("");
    setDescription("");
    setSeverity("");
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-10 p-6 rounded-2xl shadow-xl bg-gradient-to-br from-pink-50 via-red-100 to-orange-50 space-y-5 max-w-lg mx-auto"
    >
      <h2 className="text-2xl text-center font-extrabold text-gray-800 mb-4">
        Report New Incident
      </h2>

      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-600">Title</label>
        <input
          type="text"
          placeholder="Enter incident title"
          className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-600">Description</label>
        <textarea
          placeholder="Describe the incident in detail"
          className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-600">Severity</label>
        <select
          value={severity}
          onChange={(e) => setSeverity(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          required
        >
          <option value="">Select Severity</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold tracking-wide hover:bg-blue-700 transition"
      >
        Submit Incident
      </motion.button>
    </motion.form>
  );
};

export default IncidentForm;
