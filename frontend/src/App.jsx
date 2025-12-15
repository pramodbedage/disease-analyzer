import { useState } from 'react'
import ChatBot from './components/ChatBot'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold text-blue-900 mb-6 tracking-tight">
          Disease Analyzer
        </h1>
        <p className="text-xl text-gray-600 mb-10">
          Your AI-powered health companion. Search for symptoms, find diseases, and get instant answers.
        </p>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <p className="text-gray-400 italic">
            Disease search functionality coming soon...
          </p>
        </div>
      </div>

      {/* Wireless Chat Component */}
      <ChatBot />
    </div>
  )
}

export default App
