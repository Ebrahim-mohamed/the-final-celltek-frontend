import { notFound } from "next/navigation";
import { services, getService } from "@/lib/content";
import PageHero from "@/components/sections/PageHero";
import SplitLayout from "@/components/sections/SplitLayout";
import TickList from "@/components/sections/TickList";
import Gallery from "@/components/sections/Gallery";
import VideoGallery from "@/components/sections/VideoGallery";
import NumberedSteps from "@/components/sections/NumberedSteps";
import LinkCards from "@/components/sections/LinkCards";
import CtaSection from "@/components/sections/CtaSection";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import Button from "@/components/ui/Button";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const s = getService((await params).slug);

  return s ? { title: s.name, description: s.intro } : {};
}

const steps = [
  {
    title: "Brief",
    text: "You share drawings, references and deadlines.",
  },
  {
    title: "Production",
    text: "We produce and share drafts for your comments.",
  },
  {
    title: "Delivery",
    text: "Final files in every format you need.",
  },
];

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const s = getService((await params).slug);

  if (!s) notFound();

  const heading = s.name
    .toLowerCase()
    .replace("cgi", "CGI")
    .replace("3d", "3D")
    .replace("ai ", "AI ");

  return (
    <main id="page">
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: `Services / ${s.group}` },
        ]}
        eyebrow={`${s.name} · ${s.audience}`}
        title={s.headline}
        lead={s.intro}
        image={
          s.images[0]
            ? {
                src: `/img/${s.images[0]}.jpg`,
                alt: `${s.name} sample`,
              }
            : {
                placeholder: "Hero image or video to come from Celltek",
              }
        }
      >
        <div className="flex flex-wrap gap-3">
          <Button magnet href={`/book-a-demo?interest=${s.slug}`}>
            Get a quote
          </Button>

          <Button variant="ghost" href="#work">
            See samples
          </Button>
        </div>
      </PageHero>

      <Section className="pt-[clamp(40px,6vw,80px)]">
        <SplitLayout>
          <SectionHead
            className="mb-0"
            eyebrow="What's included"
            title="Everything delivered, ready to use"
            titleClassName="text-display-sm"
            lead="Turnaround and pricing are confirmed after a short brief."
          />

          <TickList items={s.includes} />
        </SplitLayout>
      </Section>

      <Section flushTop id="work">
        <SectionHead
          eyebrow="Selected work"
          title={
            s.slug === "reels"
              ? "Recent 3D Animations"
              : `Recent ${heading}`
          }
          titleClassName="text-display-sm"
        />

        {s.slug === "reels" ? (
          <VideoGallery />
        ) : (
          <Gallery
            items={s.images}
            alt={`${s.name} sample`}
            placeholder="Sample"
          />
        )}
      </Section>

      <Section flushTop>
        <SplitLayout>
          <SectionHead
            className="mb-0"
            eyebrow="How it works"
            title="Three steps from brief to delivery"
            titleClassName="text-display-sm"
          />

          <NumberedSteps items={steps} />
        </SplitLayout>
      </Section>

      <Section flushTop>
        <SectionHead eyebrow="Related services" />

        <LinkCards
          variant="related"
          cards={s.related.map((r) => {
            const x = getService(r)!;

            return {
              tag: x.group,
              title: x.name,
              text: x.short,
              href: `/services/${r}`,
            };
          })}
        />
      </Section>

      <CtaSection interest={s.slug} />
    </main>
  );
}