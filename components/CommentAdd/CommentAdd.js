import { Formik } from "formik";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getUserName } from "../../redux/auth/auth-selectors";
import { addComment } from "../../services/api";

const CommentAdd = ({ save, id }) => {
  //    const user =  useSelector(getUserName)

  return (
    <div>
      <>
        <Formik
          initialValues={{
            text: "",
          }}
          validateOnBlur
          // validationSchema={validationSchema}
          onSubmit={async (values, props) => {
            console.log(values.text);
            console.log(id._id);
            await addComment({ id: id._id, text: values.text }).then((data) =>
              save(data)
            );

            // navigate('/library');
            // console.log(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            isValid,
            dirty,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                //   handleSubmit();
              }}

              // onKeyDown={(e) => {
              //   if (e.key === "Enter") {
              //     e.preventDefault();
              //     handleSubmit(values);
              //   }
              // }}
            >
              <ul>
                {/* <GoogleAuthBtn /> */}

                <li>
                  <label htmlFor="text">
                    Новий відгук або коментар
                    {!values.text.length || values.text ? (
                      <span> *</span>
                    ) : (
                      <></>
                    )}
                  </label>
                  <br />
                  <textarea
                    type="text"
                    name="text"
                    placeholder="..."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.text}
                  />
                  <br />
                  <span>{touched.text && errors.text ? errors.text : ""}</span>
                </li>

                <button
                  // height="30px"
                  // marginB="15px"
                  // text="Увійти"
                  // width="100%"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Надіслати
                </button>
              </ul>
            </form>
          )}
        </Formik>
      </>
    </div>
  );
};

export default CommentAdd;
