"use client";
import { useState } from "react";
import { Container } from "../Container";
import { Filter, ProjectContent } from "./components";
import { PROJECTS } from "@/utils/projects";
import { TCategories } from "@/utils/types";

export const ProjectsPage = () => {
  const [active, setActive] = useState<TCategories>("Todo");

  const filteredProjects =
    active === "Todo"
      ? PROJECTS
      : PROJECTS.filter((p) => p.categories.includes(active));

  return (
    <Container className="mt-20 md:mt-35">
      <ProjectContent />
      <Filter
        active={active}
        setActive={setActive}
        filteredProjects={filteredProjects}
      />
    </Container>
  );
};
