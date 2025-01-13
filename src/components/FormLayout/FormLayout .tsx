import React from "react";
import PartDescription from "../PartDescription/PartDescription";
import { useTranslations } from "next-intl";
import Form from "../Form/Form";
import ResultsTable from "../ResultsTable/ResultsTable";

export default function FormLayout() {
  const t = useTranslations("Part");
  return (
    <section className="pb-10">
      <PartDescription title={t("Part 1")} content={t("Contact 1")} />
      <div className="flex flex-col lg:flex-row items-start justify-between gap-[109px] container">
        <Form />
        <ResultsTable />
      </div>
    </section>
  );
}
