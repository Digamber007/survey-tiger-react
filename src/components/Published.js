

import { useNavigate } from "react-router";

const Published = ({ questions }) => {

  const history = useNavigate();

  function handleClick(){
    history("/");
  };

  function handleConfirm(){
    history("/")
    alert('Data is Published Successfully !')
  }

  return (
    <>
      <div className="container mt-5 ">
        {questions.length > 0 ? (
          questions.map((q, key) => (
            <div className="row">
              <div className="col-lg-8 col-md-6 text-start">
                <h3 className="my-3">
                  {key}) {q.qtext}
                </h3>
              </div>
              <div className="col-lg-4 col-md-6 text-start d-flex">
                {q.options.map((opt) =>
                  q.qtype === 1 ? (
                    <div className="form-check ms-3" key={opt.uid}>
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          value=""
                        />
                        {opt.value}
                      </label>
                    </div>
                  ) : (
                    <div className="form-check ms-3" key={opt.uid}>
                      <label className="form-check-label">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="random"
                        />
                        {opt.value}
                      </label>
                    </div>
                  )
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">
            <h2>No Questions added</h2>
            <p>"Survey not available. Please create survey first."</p>
            <br/>
            <br/>
            <button className="btn btn-primary" onClick={handleClick}>Go Back</button>

          </div>
        )}

        {questions.length !== 0 ? (
          <div className="m-5">
            <button className="btn btn-primary" onClick={handleConfirm}>Confirm</button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Published;
