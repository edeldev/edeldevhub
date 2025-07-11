import { Container, FadeIn, FilterTemplate, Title } from "@/components";

const PageTemplates = () => {
  return (
    <FadeIn>
      <Container className="mt-20 md:mt-35">
        <Title />

        <FilterTemplate />
      </Container>
    </FadeIn>
  );
};

export default PageTemplates;
