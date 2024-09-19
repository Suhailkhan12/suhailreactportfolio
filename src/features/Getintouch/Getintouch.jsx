import { useForm } from "react-hook-form";
import "./getintouch.scss";
import useCreateForm from "./useCreateForm";
import useAnimationref from "../hooks/useAnimationref";
import { motion } from "framer-motion";
import { appearence } from "../../animations/animations";

//Get in touch Form
function Getintouch() {
  const { ref, maincontrol } = useAnimationref();

  const { register, handleSubmit, reset, formState } = useForm({});
  const { errors } = formState;

  const { isCreating, createForm } = useCreateForm();

  function onSubmit(data) {
    createForm(
      { ...data },
      {
        onSuccess: (data) => {
          reset();
        },
      }
    );
  }
  function onError(error) {
    // console.log(error);
  }

  return (
    <>
      <motion.h2
        variants={appearence}
        initial="hidden"
        animate={maincontrol}
        ref={ref}
        className="heading-2 row"
        id="contact__id"
      >
        Get in Touch
      </motion.h2>
      <motion.section
        variants={appearence}
        initial="hidden"
        animate={maincontrol}
        ref={ref}
        className="section-get"
      >
        <div className="get">
          <div className="get__form">
            <form
              action="#"
              className="form"
              onSubmit={handleSubmit(onSubmit, onError)}
            >
              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Full name"
                  id="name"
                  {...register("name", {
                    required: "This field required",
                  })}
                />
                <label htmlFor="name" className="form__label">
                  Full name
                </label>
                {errors?.name?.message && (
                  <error className="form__error">{errors?.name?.message}</error>
                )}
              </div>

              <div className="form__group">
                <input
                  type="email"
                  className="form__input"
                  placeholder="Email address"
                  id="email"
                  {...register("email", {
                    required: "This field required",
                  })}
                />
                <label htmlFor="email" className="form__label">
                  Email address
                </label>
                {errors?.email?.message && (
                  <error className="form__error">{errors?.email.message}</error>
                )}
              </div>

              <div className="form__group">
                <textarea
                  type="message"
                  className="form__input"
                  placeholder="Message"
                  id="message"
                  rows={5}
                  {...register("message", {
                    required: "This field required",
                  })}
                />
                <label htmlFor="message" className="form__label">
                  Message
                </label>
                {errors?.message?.message && (
                  <error className="form__error">
                    {errors?.message?.message}
                  </error>
                )}
              </div>

              <div className="form__group">
                <button className="btn" disabled={isCreating}>
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Getintouch;
