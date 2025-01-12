import React from "react";
import PartDescription from "../PartDescription/PartDescription";
import Editor from "../Editor/Editor";
import { useTranslations } from "next-intl";

export default function TextSection() {
  const t = useTranslations("Part");
  return (
    <section>
      <PartDescription title={t("Part 3")} content={t("Contact 3")} />
      <Editor />
    </section>
  );
}
