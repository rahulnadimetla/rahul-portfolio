import VideoIntro from "@/components/VideoIntro";

export const metadata = {
  title: "Rahul Nadimetla | AI & ML Engineer",
  description: "Portfolio of Rahul Nadimetla — Software Engineer, Data Analyst, AI/ML & GenAI Builder based in Hyderabad, India.",
};

export default function Home() {
  return (
    <main style={{ background: "#080503", color: "#fff", fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif" }}>

      {/* ── HERO ──────────────────────────────────────────────── */}
      <VideoIntro videoSrc="/hero-video.mp4" />

      {/* ── ABOUT ─────────────────────────────────────────────── */}
      <section id="about" style={sectionStyle}>
        <div style={containerStyle}>
          <p style={eyebrowStyle}>About Me</p>
          <h2 style={headingStyle}>Turning data into decisions,<br/>AI into action.</h2>
          <p style={bodyStyle}>
            I&apos;m Rahul Nadimetla, a B.Tech CSE (AI &amp; ML) student at Siddhartha Institute of Engineering &amp; Technology,
            Hyderabad, graduating in April 2027 with a CGPA of 8.59. I&apos;m passionate about building intelligent systems
            that solve real-world problems — from end-to-end machine learning pipelines to Generative AI web applications.
          </p>
          <p style={bodyStyle}>
            I thrive under pressure — proven by 3rd place at the GenAI Forge National Hackathon (NASSCOM FutureSkills Prime)
            and selection for Smart India Hackathon 2025. I bring strong analytical thinking, fast learning, and a bias for
            building things that actually work.
          </p>
          <div style={{ display:"flex", gap:"32px", marginTop:"32px", flexWrap:"wrap" }}>
            {[["8.59","CGPA"],["3rd","GenAI Forge Hackathon"],["2","National Hackathons"],["15+","Technical Skills"]].map(([n,l])=>(
              <div key={l}>
                <div style={{ fontSize:"clamp(32px,4vw,48px)", fontWeight:700, color:"#f7943a", lineHeight:1 }}>{n}</div>
                <div style={{ fontSize:"13px", color:"rgba(255,255,255,.45)", marginTop:"6px", letterSpacing:".04em" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ────────────────────────────────────────────── */}
      <section id="skills" style={{ ...sectionStyle, background:"#0c0906" }}>
        <div style={containerStyle}>
          <p style={eyebrowStyle}>Technical Skills</p>
          <h2 style={headingStyle}>What I work with</h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:"16px", marginTop:"40px" }}>
            {[
              { cat:"Languages", items:["Python","SQL","C (fundamentals)","JavaScript (basics)"] },
              { cat:"AI / ML", items:["Scikit-learn","PyTorch","Random Forest","SVM","Decision Tree","LLMs","Generative AI"] },
              { cat:"Data & Viz", items:["Pandas","NumPy","Matplotlib","Seaborn","Power BI","Excel"] },
              { cat:"Tools & Platforms", items:["Flask","VS Code","Jupyter Notebook","GitHub","Azure (familiar)"] },
              { cat:"Concepts", items:["ML Pipelines","Data Cleaning","Data Visualization","Agile Practices"] },
            ].map(({cat,items})=>(
              <div key={cat} style={cardStyle}>
                <div style={{ fontSize:"11px", fontWeight:600, letterSpacing:".14em", textTransform:"uppercase", color:"#f7943a", marginBottom:"14px" }}>{cat}</div>
                <div style={{ display:"flex", flexWrap:"wrap", gap:"8px" }}>
                  {items.map(i=>(
                    <span key={i} style={pillStyle}>{i}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ──────────────────────────────────────────── */}
      <section id="projects" style={sectionStyle}>
        <div style={containerStyle}>
          <p style={eyebrowStyle}>Projects</p>
          <h2 style={headingStyle}>Things I&apos;ve built</h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"20px", marginTop:"40px" }}>

            <div style={projectCardStyle}>
              <div style={{ fontSize:"11px", fontWeight:600, color:"#f7943a", letterSpacing:".12em", textTransform:"uppercase", marginBottom:"10px" }}>2026 · Machine Learning</div>
              <h3 style={{ fontSize:"20px", fontWeight:700, color:"#fff", margin:"0 0 12px" }}>Precision Farming: AI Crop Recommendation</h3>
              <p style={{ fontSize:"14px", color:"rgba(255,255,255,.5)", lineHeight:1.7, margin:"0 0 18px" }}>
                ML-based crop recommendation system using Random Forest achieving ~90% prediction accuracy on 5,000+ agricultural records.
                Built complete ML pipeline and deployed via Flask web application for real-time recommendations.
              </p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"6px", marginBottom:"18px" }}>
                {["Python","Random Forest","Flask","Scikit-learn"].map(t=>(
                  <span key={t} style={tagStyle}>{t}</span>
                ))}
              </div>
              <div style={{ display:"flex", gap:"16px" }}>
                <a href="https://github.com/rahulnadimetla" target="_blank" rel="noopener noreferrer" style={linkStyle}>GitHub →</a>
              </div>
            </div>

            <div style={projectCardStyle}>
              <div style={{ fontSize:"11px", fontWeight:600, color:"#f7943a", letterSpacing:".12em", textTransform:"uppercase", marginBottom:"10px" }}>2025 · Smart India Hackathon</div>
              <h3 style={{ fontSize:"20px", fontWeight:700, color:"#fff", margin:"0 0 12px" }}>Low-Bandwidth Virtual Classroom</h3>
              <p style={{ fontSize:"14px", color:"rgba(255,255,255,.5)", lineHeight:1.7, margin:"0 0 18px" }}>
                Scalable virtual classroom solution for rural colleges with limited internet bandwidth.
                Designed with distributed systems thinking and presented to a national panel of judges at SIH 2025.
              </p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"6px", marginBottom:"18px" }}>
                {["System Design","Edtech","Agile","Distributed Systems"].map(t=>(
                  <span key={t} style={tagStyle}>{t}</span>
                ))}
              </div>
              <div style={{ display:"flex", gap:"16px" }}>
                <a href="https://github.com/rahulnadimetla" target="_blank" rel="noopener noreferrer" style={linkStyle}>GitHub →</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── ACHIEVEMENTS ──────────────────────────────────────── */}
      <section id="achievements" style={{ ...sectionStyle, background:"#0c0906" }}>
        <div style={containerStyle}>
          <p style={eyebrowStyle}>Achievements</p>
          <h2 style={headingStyle}>Recognition</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:"16px", marginTop:"40px" }}>
            {[
              {
                icon:"🥉",
                title:"3rd Place — GenAI Forge 2026 National Hackathon",
                sub:"SmartBridge × NASSCOM FutureSkills Prime",
                desc:"Led a team to design and deliver an AI-powered web application using Generative AI. Managed task allocation, development workflow, and project delivery under tight deadlines. Presented scalable GenAI solution to industry judges.",
              },
              {
                icon:"🏆",
                title:"Smart India Hackathon 2025 — Institutional Selection",
                sub:"Siddhartha Institute of Engineering & Technology",
                desc:"Selected to represent SIET at one of India's largest national hackathons. Designed a low-bandwidth virtual classroom solution for rural colleges and presented to a national panel.",
              },
            ].map(({icon,title,sub,desc})=>(
              <div key={title} style={achCardStyle}>
                <div style={{ fontSize:"32px", marginBottom:"12px" }}>{icon}</div>
                <div style={{ fontSize:"18px", fontWeight:700, color:"#fff", marginBottom:"4px" }}>{title}</div>
                <div style={{ fontSize:"12px", color:"#f7943a", fontWeight:600, letterSpacing:".06em", textTransform:"uppercase", marginBottom:"12px" }}>{sub}</div>
                <p style={{ fontSize:"14px", color:"rgba(255,255,255,.5)", lineHeight:1.7, margin:0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ────────────────────────────────────── */}
      <section id="certs" style={sectionStyle}>
        <div style={containerStyle}>
          <p style={eyebrowStyle}>Certifications</p>
          <h2 style={headingStyle}>Credentials</h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:"14px", marginTop:"40px" }}>
            {[
              { name:"Python Programming Course", by:"GeeksforGeeks" },
              { name:"Master Data Analysis with Python", by:"Udemy" },
              { name:"The Complete MySQL Bootcamp", by:"Udemy" },
            ].map(({name,by})=>(
              <div key={name} style={certCardStyle}>
                <div style={{ fontSize:"20px", marginBottom:"10px" }}>📜</div>
                <div style={{ fontSize:"15px", fontWeight:600, color:"#fff", marginBottom:"5px" }}>{name}</div>
                <div style={{ fontSize:"12px", color:"#f7943a", fontWeight:500 }}>{by}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────── */}
      <section id="contact" style={{ ...sectionStyle, background:"#0c0906" }}>
        <div style={{ ...containerStyle, textAlign:"center", maxWidth:"600px" }}>
          <p style={eyebrowStyle}>Contact</p>
          <h2 style={headingStyle}>Let&apos;s work together</h2>
          <p style={{ ...bodyStyle, textAlign:"center" }}>
            I&apos;m actively seeking internship opportunities in Data Analytics, AI/ML, Generative AI, and Python development.
            Reach out — I respond fast.
          </p>
          <div style={{ display:"flex", gap:"12px", justifyContent:"center", flexWrap:"wrap", marginTop:"32px" }}>
            <a href="mailto:rahulnadimetla21@gmail.com" style={{ ...ctaBtnStyle, background:"#f7943a", color:"#0a0705" }}>
              rahulnadimetla21@gmail.com
            </a>
            <a href="/Rahul_Nadimetla_Resume.pdf" target="_blank" rel="noopener noreferrer" style={{ ...ctaBtnStyle, background:"rgba(247,148,58,.15)", border:"1px solid rgba(247,148,58,.5)", color:"#f7943a" }}>
              📄 Download Resume
            </a>
          </div>
          <div style={{ display:"flex", gap:"20px", justifyContent:"center", marginTop:"24px" }}>
            <a href="https://www.linkedin.com/in/rahul-nadimetla-9449bb32b" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>LinkedIn</a>
            <a href="https://github.com/rahulnadimetla" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>GitHub</a>
            <a href="tel:+918074406629" style={socialLinkStyle}>+91 80744 06629</a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────── */}
      <footer style={{ borderTop:"1px solid rgba(255,255,255,.06)", padding:"28px 24px", textAlign:"center", background:"#080503" }}>
        <p style={{ fontSize:"13px", color:"rgba(255,255,255,.22)", margin:0 }}>
          © 2026 Rahul Nadimetla · Built with Next.js · Hyderabad, India
        </p>
      </footer>

    </main>
  );
}

/* ── Shared styles ──────────────────────────────────────────────── */
const sectionStyle = { padding:"clamp(60px,8vw,120px) 24px", background:"#080503" };
const containerStyle = { maxWidth:"960px", margin:"0 auto" };
const eyebrowStyle = { fontSize:"11px", fontWeight:600, letterSpacing:".18em", textTransform:"uppercase", color:"#f7943a", margin:"0 0 12px", opacity:.9 };
const headingStyle = { fontSize:"clamp(28px,4vw,48px)", fontWeight:700, color:"#fff", margin:"0 0 24px", lineHeight:1.15, letterSpacing:"-.02em" };
const bodyStyle = { fontSize:"clamp(14px,1.6vw,17px)", color:"rgba(255,255,255,.5)", lineHeight:1.75, margin:"0 0 16px" };
const cardStyle = { background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.08)", borderRadius:"16px", padding:"24px" };
const pillStyle = { display:"inline-block", padding:"4px 12px", borderRadius:"100px", background:"rgba(247,148,58,.1)", border:"1px solid rgba(247,148,58,.25)", color:"rgba(255,255,255,.7)", fontSize:"12px", fontWeight:500 };
const projectCardStyle = { background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.08)", borderRadius:"16px", padding:"28px", transition:"border-color .2s", cursor:"default" };
const tagStyle = { display:"inline-block", padding:"3px 10px", borderRadius:"100px", background:"rgba(255,255,255,.07)", border:"1px solid rgba(255,255,255,.1)", color:"rgba(255,255,255,.55)", fontSize:"11px" };
const linkStyle = { fontSize:"13px", color:"#f7943a", textDecoration:"none", fontWeight:600 };
const achCardStyle = { background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.08)", borderRadius:"16px", padding:"28px" };
const certCardStyle = { background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.08)", borderRadius:"14px", padding:"22px" };
const ctaBtnStyle = { display:"inline-flex", alignItems:"center", padding:"13px 28px", borderRadius:"100px", fontSize:"14px", fontWeight:700, letterSpacing:".04em", textDecoration:"none", transition:"opacity .2s, transform .15s" };
const socialLinkStyle = { fontSize:"14px", color:"rgba(255,255,255,.45)", textDecoration:"none", letterSpacing:".04em", fontWeight:500 };
