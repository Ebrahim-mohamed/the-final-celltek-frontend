import servicesData from '@/content/services.json';
import projectsData from '@/content/projects.json';

export type Service = {
  slug: string; name: string; short: string; group: string; audience: string;
  headline: string; intro: string; includes: { title: string; text: string }[];
  images: (string | null)[]; related: string[];
};
export type Project = {
  slug: string; name: string; client: string; location: string; services: string; hero: string;
  stats: { value: string; label: string }[]; built: { title: string; text: string }[];
  gallery: string[]; next: string;
};

export const services = servicesData as Service[];
export const projects = projectsData as Project[];
export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const contact = {
  phone: '+20 111 099 9976',
  whatsapp: 'https://wa.me/201110999976',
  email: 'amr.selim@celltekstudios.com',
};
