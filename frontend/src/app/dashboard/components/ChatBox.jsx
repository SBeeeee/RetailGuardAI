import { Send } from "lucide-react";
import {messages} from "../../../components/data"
export default function ChatBox() {
  return (
    <div className="bg-white mt-6 rounded-xl shadow p-4">
      <h2 className="text-lg font-semibold mb-4">🤖 AI Assistant Chat</h2>
      <div className="h-64 overflow-y-auto border rounded p-3 bg-gray-50 mb-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`mb-2 flex ${msg.sender === "admin" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-md p-2 rounded-lg text-sm ${
                msg.sender === "admin" ? "bg-blue-500 text-white" : "bg-white text-gray-800 border"
              }`}
            >
              {msg.message}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <input
          className="flex-1 border px-3 py-2 rounded-lg text-sm"
          placeholder="Ask about fraud patterns, users, or transactions..."
        />
        <button className="bg-blue-500 text-white p-2 rounded-full">
          <Send size={16} />
        </button>
      </div>
    </div>
  );
}
