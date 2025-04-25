import { motion } from "framer-motion";
import { Filter, SortAsc, SortDesc } from "lucide-react";

type Props = {
  severity: string;
  setSeverity: (val: string) => void;
  sortOrder: "newest" | "oldest";
  setSortOrder: (val: "newest" | "oldest") => void;
};

const Controls = ({ severity, setSeverity, sortOrder, setSortOrder }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 4 }}
      transition={{ duration: 0.4 }}
      className="flex flex-wrap gap-4 justify-between items-center bg-gradient-to-br from-blue-100 to-red-100 p-4 rounded-lg shadow-md"
    >
      <div className="flex items-center gap-2">
        <Filter className="w-5 h-5 text-blue-500" />
        <select
          value={severity}
          onChange={(e) => setSeverity(e.target.value)}                                             // To Filter the list by Severity 
          className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        >
          <option value="All">All Severities</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        {sortOrder === "newest" ? (
          <SortDesc className="w-5 h-5 text-blue-500" />
        ) : (
          <SortAsc className="w-5 h-5 text-blue-500" />
        )}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as "newest" | "oldest")}                     // To Sort the list by Reported Date
          className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>
    </motion.div>
  );
};

export default Controls;
