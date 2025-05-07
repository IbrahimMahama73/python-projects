
// GLOBAL Holdings Landing Page + Wallet Setup & Dashboard Interface

import React, { useState } from "react";

export default function Home() {
  const [walletCreated, setWalletCreated] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#4b0000] to-black text-white py-20 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">GLOBAL Holdings</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Send crypto. Receive fiat. Empowering Africa’s cross-border payments using the XRP Ledger.
        </p>
        <button
          className="mt-6 bg-gold text-black px-6 py-3 font-semibold rounded-xl shadow"
          onClick={() => setWalletCreated(true)}
        >
          {walletCreated ? "Go to Dashboard" : "Create Wallet"}
        </button>
      </section>

      {!walletCreated && (
        <section className="py-16 px-8 bg-white text-center">
          <h2 className="text-3xl font-semibold mb-6">How It Works</h2>
          <div className="max-w-2xl mx-auto text-lg space-y-4">
            <p>1. Sign in securely with your XUMM wallet</p>
            <p>2. Fund your wallet with XRP or supported tokens</p>
            <p>3. Choose a corridor and send payments instantly</p>
            <p>4. Recipient receives fiat in minutes</p>
          </div>
        </section>
      )}

      {walletCreated && (
        <section className="py-16 px-8 bg-gray-100">
          <h2 className="text-3xl font-semibold text-center mb-6">Wallet Dashboard</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold mb-2">Wallet Balance</h3>
              <p className="text-2xl font-bold">💰 248.53 XRP</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold mb-2">Send Crypto</h3>
              <button className="mt-2 bg-gold text-black font-semibold px-4 py-2 rounded">Initiate Transfer</button>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold mb-2">Exchange Rates</h3>
              <ul className="text-sm">
                <li>🇬🇭 GHS → 🇨🇳 CNY: 1 GHS = 0.55 CNY</li>
                <li>🇬🇭 GHS → 🇬🇧 GBP: 1 GHS = 0.065 GBP</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold mb-2">Transaction History</h3>
              <ul className="text-sm space-y-1">
                <li>✅ Sent 100 XRP to 🇨🇳 China</li>
                <li>✅ Received 200 XRP from 🇬🇧 UK</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6 bg-gray-100">
        &copy; {new Date().getFullYear()} GLOBAL Holdings. All rights reserved.
      </footer>
    </main>
  );
}
