import { useState } from "react";
import { Incident } from "../data/mockIncidents";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, AlertCircle } from "lucide-react";

type Props = {
  incident: Incident;
};

const severityStyles = {
  Low: {
    color: "text-green-600",
    icon: <AlertCircle className="text-green-500 w-5 h-5" />,
    border: "border-green-200",
  },
  Medium: {
    color: "text-yellow-600",
    icon: <AlertCircle className="text-yellow-500 w-5 h-5" />,
    border: "border-yellow-200",
  },
  High: {
    color: "text-red-600",
    icon: <AlertTriangle className="text-red-500 w-5 h-5" />,
    border: "border-red-200",
  },
};

const IncidentCard = ({ incident }: Props) => {
  const [showDetails, setShowDetails] = useState(false);
  const severity = severityStyles[incident.severity];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-400 border-x-8 ${severity.border} bg-white`}
    >
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          {severity.icon}
          <div>
            <h3 className="text-xl font-bold text-gray-800">{incident.title}</h3>
            <p className={`text-sm font-medium ${severity.color}`}>
              Severity: {incident.severity}
            </p>
            <p className="text-xs text-gray-400">
              Reported: {new Date(incident.reported_at).toLocaleDateString()}
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-sm text-blue-600 hover:text-blue-800 font-medium transition"
        >
          {showDetails ? "Hide Details" : "View Details"}
        </button>
      </div>

      <AnimatePresence>
        {showDetails && (
          <motion.p
            key="details"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 20 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gray-700 text-sm"
          >
            {incident.description}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default IncidentCard;
