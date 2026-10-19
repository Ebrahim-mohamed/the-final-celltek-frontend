"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import * as THREE from 'three';
import { initSite } from '@/lib/site-motion';

declare global {
  interface Window { gsap: unknown; ScrollTrigger: unknown; Lenis: unknown; THREE: unknown }
}

// Runs the site's motion layer (menus, smooth scroll, 3D hero, scroll animations) once per page load.
// Internal links are plain <a> tags, so every page is a full load: the motion layer moves DOM nodes
// (pinned sections, split headings), which must not happen under React's client-side navigation.
export default function Motion() {
  const pathname = usePathname();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    window.gsap = gsap; window.ScrollTrigger = ScrollTrigger; window.Lenis = Lenis; window.THREE = THREE;
    const cleanup = initSite();
    if (location.hash) {
      const t = setTimeout(() => document.querySelector(location.hash)?.scrollIntoView(), 400);
      return () => { clearTimeout(t); cleanup(); };
    }
    return cleanup;
  }, [pathname]);
  return null;
}
