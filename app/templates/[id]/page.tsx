import { Container, FadeIn, TemplateId } from "@/components";
import { TEMPLATES } from "@/utils/templates";
import { notFound } from "next/navigation";

export default async function PageTemplateId({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const template = TEMPLATES.find((t) => t.slug === id);

  if (!template) return notFound();

  return (
    <FadeIn>
      <Container className="mt-20 md:mt-35">
        <TemplateId template={template} />
      </Container>
    </FadeIn>
  );
}
