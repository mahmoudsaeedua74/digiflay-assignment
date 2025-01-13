"use client";
import { useAppSelector } from "@/hooks/store.hooks";
import { useTranslations } from "next-intl";
import React from "react";
export default function ResultsTable() {
  const users = useAppSelector((store) => store.formSlice.users);
  const t = useTranslations("Form");
  return (
    <div className="w-full lg:w-[625px] ">
      <h3 className="text-secondColor font-bold mb-4">{t("Results")}</h3>
      <div
        className={` overflow-auto   text-sm max-h-96  shadow-custom rounded-sm border`}
      >
        <table className="w-full ">
          <thead className="text-xs text-[rgba(153,153,153,1)] bg-[#fafafa]  ">
            <tr>
              <th className="tableHead">{t("First")}</th>
              <th className="tableHead">{t("Second")}</th>
              <th className="tableHead">{t("Mobile")}</th>
              <th className="tableHead">{t("email")}</th>
            </tr>
          </thead>
            {users.map((user) => (
            <tbody
              className="text-[#1A1A1A] t font-medium bg-[#F2F2F2]  "
              key={user.id}
            >
              <tr className="bg-white border-b ">
              <td className="tableBody">{user.FirstName}</td>
              <td className="tableBody">{user.LastName}</td>
              <td className="tableBody">{user.Phone}</td>
              <td className="tableBody">{user.Email}</td>
              </tr>
            </tbody>
            ))}
        </table>
      </div>
    </div>
  );
}
