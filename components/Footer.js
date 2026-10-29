import { Github, Linkedin } from "lucide-react";
import { siteData } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-inner">
        <div className="footer-brand">
          <a className="brand-mark" href="#home" aria-label="Back to home">ST<span>.</span></a>
          <p>© 2026 SM Tawfiq. All rights reserved.</p>
        </div>
        <div className="footer-right"><span>Designed & built with purpose.</span><div className="footer-socials"><a href={siteData.github} aria-label="GitHub profile" target="_blank" rel="noreferrer"><Github size={19} /></a><a href={siteData.linkedin} aria-label="LinkedIn profile" target="_blank" rel="noreferrer"><Linkedin size={19} /></a></div></div>
      </div>
    </footer>
  );
}
