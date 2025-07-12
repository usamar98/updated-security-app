export default function Footer() {
  return (
    <footer className="text-gray-400 py-12" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-300">AION AI</h3>
            <p className="text-gray-500">
              Real-time Web3 security layer protecting users from malicious contracts and scam infrastructure.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-400">Products</h4>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#" className="hover:text-gray-400 transition-colors">Aion Lab</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors">Aion Bot</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors">Security API</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-400">Security</h4>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#" className="hover:text-gray-400 transition-colors">Contract Analysis</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors">Phishing Detection</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors">Wallet Protection</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors">Threat Intelligence</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-400">Contact</h4>
            <ul className="space-y-2 text-gray-500">
              <li>security@aion.ai</li>
              <li>Telegram: @AionAI</li>
              <li>Web3 Security Hub</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; 2024 AION AI. All rights reserved. Protecting Web3, one transaction at a time.</p>
        </div>
      </div>
    </footer>
  )
}