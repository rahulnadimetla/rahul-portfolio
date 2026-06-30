"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import styles from "./VideoIntro.module.css";

function CinematicLayer() {
  const mountRef = useRef(null);
  const frameRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const el = mountRef.current; if (!el) return;
    const W = el.clientWidth, H = el.clientHeight;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(W, H); renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 100);
    camera.position.z = 5;
    const COUNT = 180;
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const sizes = new Float32Array(COUNT);
    const speeds = new Float32Array(COUNT);
    const offsets = new Float32Array(COUNT);
    const palette = [
      new THREE.Color(1.0,0.55,0.15), new THREE.Color(1.0,0.82,0.55),
      new THREE.Color(0.85,0.92,1.0), new THREE.Color(1.0,1.0,1.0),
      new THREE.Color(0.3,0.55,1.0),
    ];
    for (let i = 0; i < COUNT; i++) {
      positions[i*3]=(Math.random()-.5)*14; positions[i*3+1]=(Math.random()-.5)*9; positions[i*3+2]=(Math.random()-.5)*6;
      const c=palette[Math.floor(Math.random()*palette.length)];
      colors[i*3]=c.r; colors[i*3+1]=c.g; colors[i*3+2]=c.b;
      sizes[i]=18+Math.random()*60; speeds[i]=0.18+Math.random()*0.35; offsets[i]=Math.random()*Math.PI*2;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions,3));
    geo.setAttribute("color",    new THREE.BufferAttribute(colors,3));
    geo.setAttribute("size",     new THREE.BufferAttribute(sizes,1));
    const bc=document.createElement("canvas"); bc.width=bc.height=64;
    const bx=bc.getContext("2d");
    const gr=bx.createRadialGradient(32,32,0,32,32,32);
    gr.addColorStop(0,"rgba(255,255,255,0.95)"); gr.addColorStop(.35,"rgba(255,255,255,0.4)"); gr.addColorStop(1,"rgba(255,255,255,0)");
    bx.fillStyle=gr; bx.fillRect(0,0,64,64);
    const tex=new THREE.CanvasTexture(bc);
    const mat=new THREE.PointsMaterial({ size:0.28,sizeAttenuation:true,map:tex,vertexColors:true,transparent:true,opacity:0.55,blending:THREE.AdditiveBlending,depthWrite:false });
    const particles=new THREE.Points(geo,mat); scene.add(particles);
    const onMouse=(e)=>{ mouseRef.current.x=(e.clientX/window.innerWidth-.5)*2; mouseRef.current.y=(e.clientY/window.innerHeight-.5)*2; };
    window.addEventListener("mousemove",onMouse,{passive:true});
    const onResize=()=>{ const nW=el.clientWidth,nH=el.clientHeight; camera.aspect=nW/nH; camera.updateProjectionMatrix(); renderer.setSize(nW,nH); };
    window.addEventListener("resize",onResize,{passive:true});
    let t=0; const pos=geo.attributes.position;
    const animate=()=>{
      frameRef.current=requestAnimationFrame(animate); t+=0.008;
      for(let i=0;i<COUNT;i++){ pos.array[i*3+1]+=Math.sin(t*speeds[i]+offsets[i])*0.0015; pos.array[i*3]+=Math.cos(t*speeds[i]*0.5+offsets[i])*0.0008; }
      pos.needsUpdate=true;
      camera.position.x+=(mouseRef.current.x*0.35-camera.position.x)*0.04;
      camera.position.y+=(-mouseRef.current.y*0.2-camera.position.y)*0.04;
      renderer.render(scene,camera);
    };
    animate();
    return ()=>{ cancelAnimationFrame(frameRef.current); window.removeEventListener("mousemove",onMouse); window.removeEventListener("resize",onResize); geo.dispose(); mat.dispose(); tex.dispose(); renderer.dispose(); el.removeChild(renderer.domElement); };
  },[]);
  return <div ref={mountRef} className={styles.cinematic} aria-hidden="true" />;
}

export default function VideoIntro({ videoSrc="/hero-video.mp4", onScrollNext }) {
  const videoRef=useRef(null), heroRef=useRef(null);
  const overlayRef=useRef(null), tagRef=useRef(null), nameRef=useRef(null);
  const subRef=useRef(null), skillsRef=useRef(null), ctaRef=useRef(null), scrollRef=useRef(null);
  const [muted,setMuted]=useState(true);
  const [paused,setPaused]=useState(false);
  const [hintVisible,setHintVisible]=useState(true);

  useEffect(()=>{ const id=setTimeout(()=>setHintVisible(false),4200); return ()=>clearTimeout(id); },[]);

  useEffect(()=>{
    const ctx=gsap.context(()=>{
      const tl=gsap.timeline({defaults:{ease:"power3.out"}});
      tl.from(overlayRef.current,{opacity:0,duration:1.8})
        .from(tagRef.current,{opacity:0,y:18,duration:0.9},"-=0.6")
        .from(nameRef.current.children,{opacity:0,y:44,stagger:0.14,duration:1.1},"-=0.5")
        .from(subRef.current,{opacity:0,y:14,duration:0.8},"-=0.5")
        .from(skillsRef.current.children,{opacity:0,y:10,stagger:0.06,duration:0.6},"-=0.4")
        .from(ctaRef.current.children,{opacity:0,y:12,stagger:0.1,duration:0.7},"-=0.3")
        .from(scrollRef.current,{opacity:0,y:10,duration:0.6},"-=0.3");
    },heroRef);
    return ()=>ctx.revert();
  },[]);

  const toggleMute=useCallback(()=>{ const v=videoRef.current; if(!v) return; v.muted=!v.muted; setMuted(v.muted); setHintVisible(false); },[]);
  const togglePlay=useCallback(()=>{ const v=videoRef.current; if(!v) return; paused?v.play():v.pause(); setPaused(p=>!p); },[paused]);
  const handleScroll=useCallback(()=>{ if(onScrollNext){onScrollNext();return;} const el=heroRef.current; if(el) window.scrollTo({top:el.offsetHeight,behavior:"smooth"}); },[onScrollNext]);

  const skills = ["Python","SQL","Pandas","NumPy","Scikit-learn","PyTorch","Power BI","Excel","Flask","Machine Learning","LLMs","Generative AI","Random Forest","Data Visualization","GitHub"];

  return (
    <section ref={heroRef} className={styles.hero} aria-label="Portfolio introduction">
      <div className={styles.gradTop} aria-hidden="true"/>
      <div className={styles.gradBottom} aria-hidden="true"/>
      <div className={styles.gradLeft} aria-hidden="true"/>
      <CinematicLayer/>
      <div ref={overlayRef} className={styles.videoWrap}>
        <video ref={videoRef} className={styles.fgVideo} src={videoSrc} autoPlay loop playsInline muted aria-label="Rahul Nadimetla portfolio video"/>
        <div className={styles.vignette} aria-hidden="true"/>
      </div>
      <div className={`${styles.soundHint} ${hintVisible?styles.hintIn:styles.hintOut}`} aria-live="polite">
        <span className={styles.pulse} aria-hidden="true"/> Tap for sound
      </div>
      <div className={styles.content}>
        <p ref={tagRef} className={styles.tagline}>
          B.Tech CSE (AI &amp; ML) &nbsp;·&nbsp; CGPA 8.59 &nbsp;·&nbsp; Hyderabad, India
        </p>
        <h1 ref={nameRef} className={styles.name} aria-label="Rahul Nadimetla">
          <span className={styles.nameFirst}>Rahul</span>
          <span className={styles.nameLast}>Nadimetla</span>
        </h1>
        <p ref={subRef} className={styles.subtitle}>
          Software Engineer &nbsp;·&nbsp; Data Analyst &nbsp;·&nbsp; AI/ML &amp; GenAI Builder
          <br/>
          <span className={styles.accent}>
            🥉 3rd · GenAI Forge National Hackathon &nbsp;|&nbsp; 🏆 Smart India Hackathon 2025
          </span>
        </p>
        <div ref={skillsRef} className={styles.skillsRow}>
          {skills.map(s=>(<span key={s} className={styles.skillPill}>{s}</span>))}
        </div>
        <div ref={ctaRef} className={styles.ctaRow}>
          <a href="mailto:rahulnadimetla21@gmail.com" className={styles.ctaPrimary}>Hire Me</a>
          <a href="/Rahul_Nadimetla_Resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.ctaResume}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{marginRight:"6px"}}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z"/></svg>
            Resume
          </a>
          <a href="https://www.linkedin.com/in/rahul-nadimetla-9449bb32b" target="_blank" rel="noopener noreferrer" className={styles.ctaSecondary}>LinkedIn</a>
          <a href="https://github.com/rahulnadimetla" target="_blank" rel="noopener noreferrer" className={styles.ctaSecondary}>GitHub</a>
        </div>
      </div>
      <div className={styles.controls} role="group" aria-label="Video controls">
        <button className={styles.glassBtn} onClick={togglePlay} aria-label={paused?"Play video":"Pause video"}>
          {paused?<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>:<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6zm8-14v14h4V5z"/></svg>}
        </button>
        <button className={styles.glassBtn} onClick={toggleMute} aria-label={muted?"Unmute":"Mute"}>
          {muted?<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>:<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>}
        </button>
      </div>
      <button ref={scrollRef} className={styles.scrollIndicator} onClick={handleScroll} aria-label="Scroll to next section">
        <span className={styles.scrollLine} aria-hidden="true"/>
        <span className={styles.scrollLabel}>Scroll</span>
      </button>
    </section>
  );
}
