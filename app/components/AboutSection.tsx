'use client'

export default function AboutSection() {
  return (
    <section id="about" className="aboutSection">
      {/* Título */}
      <h2>About Me</h2>

      {/* Descripción breve */}
      <p className="aboutDescription">
        I'm Yolfry Tubiñez, a Chemical Engineer turned Entrepreneur with over 15 years of experience across diverse industries, including print media, digital marketing, and emerging blockchain technology. I am passionate about leveraging my skills to explore innovative solutions that drive impact in challenging markets.
      </p>

      {/* Logros destacados */}
      <div className="aboutHighlights">
        <p>
          In Venezuela, I founded Pegasoplay, an online gambling platform that generated over $80,000 annually, and grew "Desafío Hípico" to nearly 30,000 subscribers with over 250,000 monthly visits. Since 2017, I’ve been focused on blockchain and Web3 projects, achieving milestones such as guiding Invernez to 3rd place in a competitive incubator, Fractls to 4th place in a global bootcamp, and leading <strong>SmartAssist</strong> to secure 1st place in the DEFI & RWA track of the Educateth and ETHKIPU Hackathon. SmartAssist also earned an incubation program for 2025.
        </p>
      </div>

      {/* Habilidades clave */}
      <div className="aboutSkills">
        <h3>What I Bring</h3>
        <ul>
          <li>🔐 Blockchain Development: Smart Contracts and Web3 exploration.</li>
          <li>📈 Digital Marketing: SEO, content strategies, and community building.</li>
          <li>🌐 Business Development: Market analysis and launching ventures.</li>
          <li>🛠️ Project Management: Leading cross-functional teams to achieve goals.</li>
        </ul>
      </div>

      {/* Certificaciones */}
      <div className="certifications">
        <h3>Certifications</h3>
        <div className="certificationGrid">
          <div>
            <a href="https://academy.binance.com/en/track/digital-assets-and-blockchain-industry?utm_medium=web_share_copy" target="_blank" rel="noopener noreferrer">
              <img className="certImg" src="/certs/binance1.png" alt="Binance Academy" width={100} height={100} style={{ borderRadius: '50%' }}/>
              <p>Binance Academy – Blockchain Fundamentals</p>
            </a>
          </div>
          <div>
            <a href="https://www.coursera.org/account/accomplishments/verify/724N55HG4SMR" target="_blank" rel="noopener noreferrer">
              <img className="certImg" src="/certs/consensys1.png" alt="ConsenSys Blockchain" width={100} height={100} style={{ borderRadius: '50%' }} />
              <p>ConsenSys – Blockchain: Foundations and Use Cases</p>
            </a>
          </div>
          {/* Chainlink Tokenized RWA Bootcamp */}
          <div>
            <a href="https://collectors.poap.xyz/token/7249213" target="_blank" rel="noopener noreferrer">
              <img className="certImg" src="/certs/chainlink1.gif" alt="Chainlink Bootcamp" width={100} height={100} style={{ borderRadius: '50%' }} />
              <p>Chainlink – Tokenized RWA Bootcamp</p>
            </a>
          </div>

          {/* Curso de Solidity en ETH Kipu */}
          <div>
            <a href="https://collectors.poap.xyz/token/6740721" target="_blank" rel="noopener noreferrer">
              <img src="/certs/ethkipu1.png" alt="ETH Kipu Solidity" width={100} height={100} style={{ borderRadius: '50%' }} />
              <p>ETH Kipu – Solidity Course 2023</p>
            </a>
          </div>
          <div>
            <a href="https://courses.edx.org/certificates/a78edb04bed644eb8d97ececf4356298" target="_blank" rel="noopener noreferrer">
              <img src="/certs/idb1.png" alt="Inter-American Development Bank" width={100} height={100} style={{ borderRadius: '50%' }} />
              <p>IDB – Desafíos y oportunidades en la economía digital</p>
            </a>
          </div>
          <div>
            <a href="https://opensea.io/assets/matic/0xdBf2138593aeC61d55d86E80b8ed86D7b9ba51F5/13475" target="_blank" rel="noopener noreferrer">
              <img src="/certs/Encode1.jpg" alt="Encode Club Bootcamp" width={100} height={100} style={{ borderRadius: '50%' }} />
              <p>Encode Club – Advanced Solidity Bootcamp</p>
            </a>
          </div>
          <div>
            <img src="/certs/Push1.png" alt="Encode Club Bootcamp" width={100} height={100} style={{ borderRadius: '50%' }} />
            <p>Push Protocol – Billion Reasons to Build Bootcamp</p>
          </div>
          <div>
            <a href="https://sealweb3.com/badges/f0865bfd-ab29-4a82-903d-d6809f2063e0" target="_blank" rel="noopener noreferrer">
              <img src="/certs/Educateth1.png" alt="EducaETH" width={100} height={100} style={{ borderRadius: '50%' }} />
              <p>
                Educateth – Introducción a Blockchain
                <span>(Introduction to Blockchain)</span>
              </p>
            </a>
          </div>
          <div>
            <a href="https://sealweb3.com/badges/f0865bfd-ab29-4a82-903d-d6809f2063e1" target="_blank" rel="noopener noreferrer">
              <img src="/certs/Educateth2.png" alt="EducaETH Solidity Básico" width={100} height={100} style={{ borderRadius: '50%' }}/>
              <p>
                Educateth – Solidity Básico
                <span>(Fundamentals of Solidity Programming)</span>
              </p>
            </a>
          </div>
          <div>
            <a href="https://sealweb3.com/badges/f0865bfd-ab29-4a82-903d-d6809f2063e2" target="_blank" rel="noopener noreferrer">
              <img src="/certs/Educateth3.png" alt="EducaETH Oportunidades del Ecosistema" width={100} height={100} style={{ borderRadius: '50%' }}/>
              <p>
                Educateth – Oportunidades del Ecosistema
                <span>(Blockchain Ecosystem Opportunities)</span>
              </p>
            </a>
          </div>
          <div>
            <a href="https://sealweb3.com/badges/f0865bfd-ab29-4a82-903d-d6809f2063e3" target="_blank" rel="noopener noreferrer">
              <img src="/certs/Educateth4.png" alt="EducaETH Desarrollo Intermedio" width={100} height={100} style={{ borderRadius: '50%' }}/>
              <p>
                Educateth – Desarrollo Intermedio
                <span>(Building Frontend Skills for Blockchain Applications)</span>
              </p>
            </a>
          </div>
          <div>
            <a href="https://sealweb3.com/badges/f0865bfd-ab29-4a82-903d-d6809f2063e4" target="_blank" rel="noopener noreferrer">
              <img src="/certs/Educateth5.png" alt="EducaETH Desarrollando Habilidades" width={100} height={100} style={{ borderRadius: '50%' }}/>
              <p>
                Educateth – Desarrollando Habilidades
                <span>(Soft Skills for Multidisciplinary Blockchain Teams)</span>
              </p>
            </a>
          </div>
          <div>
            <a href="https://opensea.io/assets/optimism/0x491e56692fe7c9eabc53f1de0902cba29e9cee75/1" target="_blank" rel="noopener noreferrer">
              <img src="/certs/Invernez1.png" alt="La Incubadora Web3" width={100} height={100} style={{ borderRadius: '50%' }}/>
              <p>
                La Incubadora Web3 – Programa para Startups Web3 <br />
                <span>(Web3 Startups Program)</span>
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
