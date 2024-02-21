import "./getintouch.scss";

function Getintouch() {
  return (
    <>
      <h2 className="heading-2 row">Get in Touch</h2>
      <section className="section-get">
        <div className="get">
          <div className="get__form">
            <form action="#" className="form">
              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Full name"
                  id="name"
                  required
                />
                <label for="name" className="form__label">
                  Full name
                </label>
              </div>

              <div className="form__group">
                <input
                  type="email"
                  className="form__input"
                  placeholder="Email address"
                  id="email"
                  required
                />
                <label for="email" className="form__label">
                  Email address
                </label>
              </div>

              <div className="form__group">
                <textarea
                  type="text-area"
                  className="form__input"
                  placeholder="Message"
                  id="message"
                  rows={5}
                  required
                />
                <label for="email" className="form__label">
                  Message
                </label>
              </div>

              <div className="form__group">
                <button className="btn">Send &rarr;</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Getintouch;
