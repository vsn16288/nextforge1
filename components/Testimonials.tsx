
import React, { useState } from 'react';
import { Quote, Play, Loader2, X, Clapperboard, Share2, Check, Terminal, Cpu, Layers } from 'lucide-react';
import { Testimonial } from '../types.ts';
import { GoogleGenAI } from "@google/genai";

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO",
    company: "Lumina Health",
    content: "NEXTFORGE didn't just build an app; they built a scalable ecosystem. Their attention to detail in the iOS native implementation was breathtaking.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    videoPrompt: "A high-tech digital health ecosystem with clean iOS interfaces, medical data visualizations, and modern hospital environments in a futuristic blue aesthetic.",
    bgImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Founder",
    company: "Velocity Fintech",
    content: "We needed a complex Android solution in record time. The Forge process is real—transparent, fast, and high-quality results every single week.",
    avatar: "https://i.pravatar.cc/150?u=marcus",
    videoPrompt: "A fast-paced fintech application dashboard with glowing stock charts, 3D coin animations, and secure transaction holographic interfaces.",
    bgImage: "https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Product Lead",
    company: "EcoStream",
    content: "The UI/UX design provided by NEXTFORGE set a new standard for our industry. Our user engagement tripled within the first month of launch.",
    avatar: "https://i.pravatar.cc/150?u=elena",
    videoPrompt: "A beautiful eco-friendly lifestyle app showing lush green nature, flowing water, and vibrant mobile UI elements focused on sustainability.",
    bgImage: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    name: "David Park",
    role: "CEO",
    company: "Nexus Logistics",
    content: "Working with the NEXTFORGE team was a game-changer. Their full-stack expertise allowed us to automate 80% of our mobile operations.",
    avatar: "https://i.pravatar.cc/150?u=david",
    videoPrompt: "A futuristic logistics dashboard showing real-time global tracking, automated drones, and high-tech warehouse metrics in a dark indigo theme.",
    bgImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  }
];

export const Testimonials: React.FC = () => {
  const [generatingVideo, setGeneratingVideo] = useState<number | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  const loadingMessages = [
    "Initializing Forge Engine...",
    "Synthesizing high-fidelity assets...",
    "Rendering volumetric lighting...",
    "Compiling UI/UX animations...",
    "Finalizing neural export..."
  ];

  const handleShare = async (testimonial: Testimonial) => {
    const shareData = {
      title: `Success Story: ${testimonial.company} x NEXTFORGE`,
      text: `"${testimonial.content}" - ${testimonial.name}, ${testimonial.role} at ${testimonial.company}`,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(`${shareData.text} \nFound at: ${shareData.url}`);
        setCopiedId(testimonial.id);
        setTimeout(() => setCopiedId(null), 2000);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    }
  };

  const handleGenerateVideo = async (testimonial: Testimonial) => {
    if (!process.env.API_KEY || process.env.API_KEY === "undefined") {
      alert("Neural Link Offline: To enable the Video Forge, please add your Gemini API Key as an environment variable (API_KEY) in your hosting dashboard.");
      return;
    }

    setGeneratingVideo(testimonial.id);
    setVideoUrl(null);
    setProgress(0);
    setLogs(["Requesting GPU cluster access...", "Analyzing testimonial context..."]);
    
    let messageIndex = 0;
    setLoadingMessage(loadingMessages[0]);
    
    const messageInterval = setInterval(() => {
      messageIndex = (messageIndex + 1) % loadingMessages.length;
      setLoadingMessage(loadingMessages[messageIndex]);
      setLogs(prev => [loadingMessages[messageIndex], ...prev.slice(0, 4)]);
    }, 5000);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev < 92) return prev + Math.random() * 1.5;
        return prev;
      });
    }, 1200);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: testimonial.videoPrompt,
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: '16:9'
        }
      });

      setLogs(prev => ["VEO protocol handshake successful.", "Forge operation: " + operation.id, ...prev]);

      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 8000));
        operation = await ai.operations.getVideosOperation({ operation: operation });
        setLogs(prev => ["Polling Forge Status: In Progress...", ...prev.slice(0, 5)]);
      }

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (downloadLink) {
        setProgress(100);
        setLogs(prev => ["Video data forged successfully.", "Streaming to client...", ...prev]);
        setVideoUrl(`${downloadLink}&key=${process.env.API_KEY}`);
      }
    } catch (error) {
      console.error("Video Generation Error:", error);
      alert("The forge encountered a temporal anomaly. Please verify your API key and retry.");
      setGeneratingVideo(null);
    } finally {
      clearInterval(messageInterval);
      clearInterval(progressInterval);
    }
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-slate-950/50">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-cyan-500 uppercase mb-3 text-glow">Success Stories</h2>
          <p className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
            Trusted by Innovators
          </p>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            See how we've helped companies from across the globe forge their digital future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div 
              key={t.id} 
              className="glass-effect p-8 rounded-[32px] border border-slate-800 hover:border-cyan-500/60 hover:scale-[1.04] hover:shadow-[0_0_60px_rgba(34,211,238,0.2)] transition-all duration-500 group relative overflow-hidden cursor-default"
            >
              <div className="absolute -inset-2 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-700 pointer-events-none" />
              
              {t.bgImage && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-all duration-1000 ease-out pointer-events-none transform scale-125 group-hover:scale-100 group-hover:-translate-y-4 group-hover:translate-x-2">
                  <img 
                    src={t.bgImage} 
                    alt="" 
                    className="w-full h-full object-cover grayscale brightness-50"
                  />
                  <div className="absolute inset-0 bg-slate-950/40" />
                </div>
              )}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-cyan-500/5 animate-circuit-pulse" />
                <div className="absolute inset-0 overflow-hidden">
                  <div className="w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent shadow-[0_0_15px_rgba(34,211,238,0.2)] animate-scan-v" />
                </div>
              </div>

              <div className="flex flex-col h-full relative z-10">
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 group-hover:scale-110 group-hover:rotate-12 transition-transform shadow-[0_0_20px_rgba(34,211,238,0)] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                      <Quote className="w-6 h-6 fill-current" />
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleShare(t)}
                        className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 transition-all relative group/share"
                      >
                        {copiedId === t.id ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Share2 className="w-4 h-4 transition-transform group-hover/share:scale-110 group-hover/share:rotate-12" />
                        )}
                        <div className={`absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-slate-800 text-white text-[10px] font-bold rounded shadow-xl pointer-events-none transition-all duration-300 transform ${
                          copiedId === t.id ? 'opacity-100' : 'opacity-0 group-hover/share:opacity-100'
                        }`}>
                          {copiedId === t.id ? 'Copied!' : 'Share'}
                        </div>
                      </button>
                      <button 
                        onClick={() => handleGenerateVideo(t)}
                        disabled={generatingVideo !== null}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 transition-all disabled:opacity-50"
                      >
                        {generatingVideo === t.id ? <Loader2 className="w-3 h-3 animate-spin" /> : <Play className="w-3 h-3" />}
                        Video Summary
                      </button>
                    </div>
                  </div>
                  <p className="text-xl text-slate-200 leading-relaxed italic font-medium transition-colors group-hover:text-white">
                    "{t.content}"
                  </p>
                </div>
                
                <div className="mt-auto flex items-center gap-4">
                  <div className="relative group/avatar cursor-pointer">
                    <div className="absolute -inset-1.5 bg-cyan-500/0 rounded-full blur-[8px] group-hover/avatar:bg-cyan-500/40 transition-all duration-700" />
                    <div className="relative overflow-hidden rounded-full border-2 border-slate-800 group-hover/avatar:border-cyan-400 transition-colors duration-500">
                      <img src={t.avatar} alt={t.name} className="w-14 h-14 object-cover" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white transition-colors group-hover:text-cyan-400">{t.name}</h4>
                    <p className="text-sm text-cyan-400 font-medium">{t.role} <span className="text-slate-600 mx-1">@</span> {t.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {(generatingVideo || videoUrl) && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={() => { setGeneratingVideo(null); setVideoUrl(null); }} />
          <div className="relative w-full max-w-4xl glass-effect border-cyan-500/30 rounded-3xl overflow-hidden">
            <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
              <div className="flex items-center gap-3">
                <Clapperboard className="w-5 h-5 text-cyan-400" />
                <span className="font-bold text-white uppercase tracking-widest text-xs">Forge Protocol: Video Synthesis</span>
              </div>
              <button onClick={() => { setGeneratingVideo(null); setVideoUrl(null); }} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
            <div className="aspect-video bg-slate-950 flex flex-col items-center justify-center relative">
              {videoUrl ? (
                <video src={videoUrl} autoPlay controls className="w-full h-full object-contain" />
              ) : (
                <div className="w-full h-full p-8 md:p-12 flex flex-col justify-center max-w-2xl mx-auto">
                  <div className="flex justify-between items-end mb-4">
                    <div className="space-y-1">
                      <h3 className="text-2xl md:text-3xl font-black text-white">{loadingMessage}</h3>
                      <p className="text-cyan-500/70 text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2"><Cpu className="w-3 h-3" /> VEO Processing</p>
                    </div>
                    <div className="text-right"><span className="text-4xl font-black text-white">{Math.round(progress)}%</span></div>
                  </div>
                  <div className="relative h-4 w-full bg-slate-900 border border-slate-800 rounded-full overflow-hidden mb-12">
                    <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-600 via-cyan-400 to-white" style={{ width: `${progress}%` }} />
                  </div>
                  <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 font-mono text-[10px] text-slate-400 space-y-1 h-32 overflow-hidden">
                    {logs.map((log, i) => <div key={i} className={i === 0 ? 'text-cyan-400' : ''}>[{new Date().toLocaleTimeString()}] {log}</div>)}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
