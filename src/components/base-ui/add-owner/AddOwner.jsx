import * as React from "react";
import "./add-owner.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone";

export const AddOwner = ({ onSubmitForm }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      date: null,
      profit: "",
      losser: "",
      phone: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      date: Yup.date().required("Required"),
      profit: Yup.number().positive("Positive").required("Required"),
      losser: Yup.number().positive("Positive").required("Required"),
      phone: Yup.string().phone("Need phone").required("Required"),
    }),
    onSubmit: (values) => {
      const arr = localStorage.getItem("rpokosov-metamins")
        ? JSON.parse(localStorage.getItem("rpokosov-metamins"))
        : [];
      arr.push(values);
      localStorage.setItem("rpokosov-metamins", JSON.stringify(arr));
      onSubmitForm();
    },
  });

  return (
    <div className="add-owner">
      <p className="add-owner_title">Add new owner</p>

      <form onSubmit={formik.handleSubmit}>
        <div className="add-owner__item">
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="input-text"
            placeholder="Owner name"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="form-error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="add-owner__item">
          <DatePicker
            id="date"
            name="date"
            selected={formik.values.date}
            onChange={(date) => formik.setFieldValue("date", date)}
            onBlur={formik.handleBlur}
            minDate={new Date()}
            placeholderText="End date"
            className="input-text"
          />
          {formik.touched.date && formik.errors.date ? (
            <div className="form-error">{formik.errors.date}</div>
          ) : null}
        </div>
        <div className="add-owner__item">
          <input
            id="profit"
            name="profit"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.profit}
            type="number"
            className="input-text"
            placeholder="Profits"
          />
          {formik.touched.profit && formik.errors.profit ? (
            <div className="form-error">{formik.errors.profit}</div>
          ) : null}
        </div>
        <div className="add-owner__item">
          <input
            id="losser"
            name="losser"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.losser}
            type="number"
            className="input-text"
            placeholder="Losses"
          />
          {formik.touched.losser && formik.errors.losser ? (
            <div className="form-error">{formik.errors.losser}</div>
          ) : null}
        </div>
        <div className="add-owner__item">
          <input
            id="phone"
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            type="text"
            className="input-text"
            placeholder="Phone"
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="form-error">{formik.errors.phone}</div>
          ) : null}
        </div>
        <div className="add-owner__item">
          <button className="btn btn-confirm" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
