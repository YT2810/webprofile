'use client'

export default function ProjectsSection() {
  return (
    <section id="projects" className="projectsSection">
      <h2>My Projects</h2>
      <ul className="projectsList">
        {/* Fractls */}
        <li>
          <strong>
            <a href="https://github.com/YT2810/Fractls-DApp" target="_blank" rel="noopener noreferrer">
              Fractls
            </a>
          </strong>: A decentralized application for creating and managing fractionalized NFTs. 
          <br />
          Achieved 4th place at the Push Protocol Bootcamp (July 2024).
        </li>

        {/* SpinWheel */}
        <li>
          <strong>
            <a href="https://taikai.network/en/ethuruguay/hackathons/buildathon-2024/projects/clzn8aecd0if3wm014cw1ayiy/idea" target="_blank" rel="noopener noreferrer">
              SpinWheel
            </a>
          </strong>: A platform to securely validate digital reputation using Ethereum blockchain.
          <br />
          Built at the Ethereum Uruguay Buildathon (September 2024).
        </li>

        {/* Invernez */}
        <li>
          <strong>
            <a href="https://ethglobal.com/showcase/invernez-7egx3" target="_blank" rel="noopener noreferrer">
              Invernez
            </a>
          </strong>: A decentralized crowdleasing platform built on Rootstock Testnet, enabling tokenized asset leasing.
          <br />
          Secured 3rd place at the Web3 Incubator (August 2024).
        </li>

        {/* Escrow PoC */}
        <li>
          <strong>
            <a href="https://github.com/juanobligado/group-1-escrow-poc" target="_blank" rel="noopener noreferrer">
              Escrow PoC
            </a>
          </strong>: A proof of concept for a secure escrow system built during the Encode Solidity Advanced Bootcamp.
          <br />
          Basis for SmartAssist project (December 2024).
        </li>

        {/* SmartAssist */}
        <li>
          <strong>
            <a href="https://devpost.com/software/smartassist-8mjku6" target="_blank" rel="noopener noreferrer">
              SmartAssist
            </a>
          </strong>: An AI-powered and blockchain-integrated platform to solve customer service and payment issues.
          <br />
          Winner of the DeFi & RWA track at Educateth and ETHKIPU Hackathon, securing an incubation program for 2025.
        </li>

        {/* Pegasoplay */}
        <li>
          <strong>
            <a href="https://x.com/PegasoPlay" target="_blank" rel="noopener noreferrer">
              Pegasoplay
            </a>
          </strong>: An online gambling platform that generated over $80,000 annually, operating successfully in Venezuela’s challenging economic environment.
          <br />
          Key lead generation channel: Desafío Hípico.
        </li>

        {/* Desafío Hípico */}
        <li>
          <strong>
            <a href="https://www.youtube.com/channel/UCXuQ77QAcWz5Aq30RyjtYgQ" target="_blank" rel="noopener noreferrer">
              Desafío Hípico
            </a>
          </strong>: YouTube channel with over 3.7M views and 21K new subscribers in 2024, serving as the primary attraction channel for Pegasoplay.
          <br />
          <a href="https://x.com/DesafioHipicoTK" target="_blank" rel="noopener noreferrer">
            Follow on X
          </a>
        </li>
      </ul>
    </section>
  )
}
