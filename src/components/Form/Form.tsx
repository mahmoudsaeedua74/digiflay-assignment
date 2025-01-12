"use client";
import React, {  } from "react";
import Button from "../Button/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FormValues } from "@/types/formik.type";
import { userInfo } from "@/store/features/formSlice";
import { useRootDispatch } from "@/hooks/store.hooks";
import { useTranslations } from "next-intl";

export default function Form() {
  const dispatch = useRootDispatch();
  const t = useTranslations("Form");
  //use yup for make a validation for every inputs 
  const validationSchema = Yup.object({
    FirstName: Yup.string()
      .required(t("FirstNameRequired"))
      .min(3, t("FirstNameMin"))
      .max(15, t("FirstNameMax")),
    LastName: Yup.string()
      .required(t("LastNameRequired"))
      .min(3, t("LastNameMin"))
      .max(15, t("LastNameMax")),
    Phone: Yup.string()
      .required(t("PhoneRequired"))
      .matches(
        /^01[0125][0-9]{8}$/,
        t("PhoneMatches")
      ),
    Email: Yup.string()
      .required(t("EmailRequire"))
      .email(t("EmailAddress")),
  });
  const formik = useFormik<FormValues>({
    initialValues: {
      FirstName: "",
      LastName: "",
      Email: "",
      Phone: "",
    },
    validationSchema,
    onSubmit: (values) => {
      //give values for useInfo that i can POST and take it and display it in table
      dispatch(userInfo(values));
    },
  });

  return (
    <div className=" w-full lg:w-[546px]">
      <form
        className="flex flex-col gap-3 text-sm  text-[#1A1A1A] font-medium"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex justify-between  gap-[30px]  ">
          <div className="mb-5">
            <label htmlFor="text" className="mb-2 ">
              {t("First")}
            </label>
            <input
              type="text"
              id="FirstName"
              {...formik.getFieldProps("FirstName")}
              className="formCheck "
              placeholder={t("First")}
            />
            {formik.touched.FirstName && formik.errors.FirstName ? (
              <p className="formError ">
                {formik.errors.FirstName}
              </p>
            ) : null}
            {formik.touched.FirstName && !formik.errors.FirstName && (
              <p className="formValid ">
                <span className="font-medium">{t("Valid")}</span> {t("FirstNameValid")}
              </p>
            )}
          </div>
          <div className="mb-5">
            <label htmlFor="text" className="mb-2 ">
            {t("Second")}
            </label>
            <input
              type="text"
              id="LastName"
              {...formik.getFieldProps("LastName")}
              className="formCheck "
              placeholder={t("Second")}
            />
            {formik.touched.LastName && formik.errors.LastName ? (
              <p className="formError ">
                {formik.errors.LastName}
              </p>
            ) : null}
            {formik.touched.LastName && !formik.errors.LastName && (
              <p className="formValid ">
                <span className="font-medium">{t("Valid")}</span>{t("LastNameValid")}
              </p>
            )}
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="Phone" className="mb-2">
          {t("Mobile")}
          </label>
          <input
            type="tel"
            id="Phone"
            {...formik.getFieldProps("Phone")}
            className="formCheck "
            placeholder={t("Mobile")}
          />
          {formik.touched.Phone && formik.errors.Phone ? (
            <p className="formError ">{formik.errors.Phone}</p>
          ) : null}
          {formik.touched.Phone && !formik.errors.Phone && (
            <p className="formValid ">
              <span className="font-medium">{t("Valid")}</span> {t("PhoneNameValid")}
            </p>
          )}
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="mb-2">
          {t("email")}

          </label>
          <input
            type="email"
            id="Email"
            {...formik.getFieldProps("Email")}
            className="formCheck "
            placeholder={t("email")}
          />
          {formik.touched.Email && formik.errors.Email ? (
            <p className="formError ">{formik.errors.Email}</p>
          ) : null}
          {formik.touched.Email && !formik.errors.Email && (
            <p className="formValid ">
              <span className="font-medium">{t("Valid")}</span> {t("EmailNameValid")}
            </p>
          )}
        </div>
        <Button>{t("Send")}</Button>
      </form>
    </div>
  );
}
// i use > {...formik.getFieldProps("name")} to automatically handle  onChange onBlur and value
// instead of using this  >  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}
