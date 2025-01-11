'use client'

export default function TechnologiesSection() {
  return (
    <section id="technologies" className="technologiesSection">
      <h2>Technologies</h2>
      <div className="technologiesGrid">
        <div>
          <h3>Blockchain & Web3</h3>
          <ul>
            <li>Solidity</li>
            <li>ethers.js / web3.js</li>
            <li>OpenZeppelin</li>
            <li>MetaMask</li>
            <li>Web3Auth</li>
            <li>Rootstock, Arbitrum, Ethereum, Optimism, Scroll</li>
          </ul>
        </div>
        <div>
          <h3>Frontend</h3>
          <ul>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>API Integration</li>
          </ul>
        </div>
        <div>
          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB (Atlas)</li>
            <li>Mongoose</li>
          </ul>
        </div>
        <div>
          <h3>Tools & Frameworks</h3>
          <ul>
            <li>Hardhat</li>
            <li>Foundry</li>
            <li>Scaffold-ETH</li>
            <li>Pinata (IPFS)</li>
            <li>Infura</li>
            <li>@pushprotocol/restapi</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
