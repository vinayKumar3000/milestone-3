import React from "react";
import { useState, useRef } from "react";

function Form() {
  const [associateName, setAssociateName] = useState("");
  const [associateId, setAssociateId] = useState("");
  const [projectId, setProjectId] = useState("");
  const [comments, setComments] = useState("");
  const [file, setFile] = useState("");

  let errObj = {
    errAssociateName:
      "Please enter the associate Name(Accepts Alphabets, space & Min 5 to Max 30 Char)",
    errAssociateId:
      "Please enter the Associate id(Accepts only numeric - 6 characters only)",
    errProjectId:
      "Please enter the Project id(Accepts only alphanumeric , No special Character Accepted ,Only 12 characters)",
    errComments: "Please Enter Comments",
    errFile: "Please upload Profile Picture",
    errLocation: "Please select the location.",
    errMin: "Please select Min 5 skills",
  };
  let errObj2 = {
    errAssociateName:
      "Please enter the associate Name(Accepts Alphabets, space & Min 5 to Max 30 Char)",
    errAssociateId:
      "Please enter the Associate id(Accepts only numeric - 6 characters only)",
    errProjectId:
      "Please enter the Project id(Accepts only alphanumeric , No special Character Accepted ,Only 12 characters)",
    errComments: "Please Enter Comments",
    errFile: "Please upload Profile Picture",
    errLocation: "Please select the location.",
    errMin: "Please select Min 5 skills",
  };

  const [errors, setErrors] = useState(errObj);

  const c1 = useRef();
  const c2 = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    //validation logic

    console.log(associateName);
    console.log(associateId);

    //validateSelection
    var cb = document.getElementsByName("skills");
    var CheckedItems = 0;
    for (var i = 0; i < cb.length; i++) {
      if (cb[i].checked) CheckedItems++;
    }
    if (CheckedItems < 2) {
      errObj.errMin = "Please select Min 5 skills";
    } else {
      errObj.errMin = "";
    }

    if (!(c1.current.checked && c2.current.checked)) {
      errObj.errLocation = "Please select the location.";
    } else {
      errObj.errLocation = "";
    }
    console.log(c1);
    //selct option generator

    setErrors((prevState) => {
      prevState.errMin = errObj.errMin;
      prevState.errLocation = errObj.errLocation;
      return prevState;
    });
  };

  const handleReset = (e) => {
    e.preventDefault();
    console.log("Reset");
    setAssociateName("");
    setAssociateId("");
    setProjectId("");
    setFile("");
    setComments("");
    setErrors(errObj2);
  };

  return (
    <div className="container d-flex flex-direction-column justify-content-center mt-5">
      <form>
        <div className="form-group">
          <label htmlFor="associateName">Associate Name</label>
          <input
            type="text"
            className="form-control  border
            border-danger"
            id="associateName"
            value={associateName}
            onChange={(e) => {
              const regExp1 = new RegExp(/([a-zA-Z ]){5,30}/);
              if (!regExp1.test(e.target.value)) {
                errObj.errAssociateName =
                  "Please enter the associate Name(Accepts Alphabets, space & Min 5 to Max 30 Char)";
                document.querySelector("#associateName").className =
                  "form-control border border-danger";
              } else {
                errObj.errAssociateName = "";
                document.querySelector("#associateName").className =
                  "form-control border border-success";
              }
              setAssociateName(e.target.value);
              setErrors((prevState) => {
                prevState.errAssociateName = errObj.errAssociateName;
                return prevState;
              });
            }}
            placeholder="Enter Associate Name"
          ></input>
          <div className="text-danger ">
            {errors.errAssociateName ? errors.errAssociateName : null}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="associateId">Associate Id</label>
          <input
            type="text"
            className="form-control border border-danger"
            id="associateId"
            value={associateId}
            onChange={(e) => {
              const regExp2 = new RegExp(/[0-9]{6}/);
              if (!regExp2.test(e.target.value)) {
                errObj.errAssociateId =
                  "Please enter the Associate id(Accepts only numeric - 6 characters only)";
                document.querySelector("#associateId").className =
                  "form-control border border-danger";
              } else {
                errObj.errAssociateId = "";
                document.querySelector("#associateId").className =
                  "form-control border border-success";
              }
              setAssociateId(e.target.value);
              setErrors((prevState) => {
                prevState.errAssociateId = errObj.errAssociateId;
                return prevState;
              });
              console.log(errors);
            }}
            placeholder="Associate Id"
          ></input>
          <div className="text-danger">
            {errors.errAssociateId ? errors.errAssociateId : null}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="projectId">Project Id</label>
          <input
            type="text  border border-danger"
            className="form-control"
            id="projectId"
            value={projectId}
            onChange={(e) => {
              const regExp3 = new RegExp(/[a-zA-Z0-9]{12}/);
              if (!regExp3.test(e.target.value)) {
                errObj.errProjectId =
                  "Please enter the Project id(Accepts only alphanumeric , No special Character Accepted ,Only 12 characters)";
                document.querySelector("#projectId").className =
                  "form-control border border-danger";
              } else {
                errObj.errProjectId = "";
                document.querySelector("#projectId").className =
                  "form-control border border-success";
              }
              setProjectId(e.target.value);
              setErrors((prevState) => {
                prevState.errProjectId = errObj.errProjectId;
                return prevState;
              });
              console.log(errors);
            }}
            placeholder="Project Id"
          ></input>
          <div className="text-danger">
            {errors.errProjectId ? errors.errProjectId : null}
          </div>
        </div>

        <div className="form-check d-flex mr-2">
          <input
            type="checkbox"
            className="form-check-input"
            id="offShore"
            ref={c1}
            onChange={(e) => {
              var select = document.querySelector("select");
              select.querySelectorAll("*").forEach((n) => n.remove());
              console.log(select);
              if (c1.current.checked) {
                var option1 = document.createElement("option");
                option1.textContent = "chennai";
                select.appendChild(option1);
                c2.current.disabled = true;
              } else {
                c2.current.disabled = false;
              }
            }}
          ></input>
          <label className="form-check-label" htmlFor="offShore">
            Offshore
          </label>
        </div>

        <div className="form-check d-flex mr-2">
          <input
            type="checkbox"
            className="form-check-input"
            id="onShore"
            ref={c2}
            onChange={(e) => {
              var select = document.querySelector("select");
              select.querySelectorAll("*").forEach((n) => n.remove());
              if (c2.current.checked) {
                var option1 = document.createElement("option");
                option1.textContent = "US";
                select.appendChild(option1);
                c1.current.disabled = true;
              } else {
                c1.current.disabled = false;
              }
            }}
          ></input>
          <label className="form-check-label" htmlFor="onShore">
            OnShore
          </label>
        </div>
        <div className="text-danger">
          {errors.errLocation ? errors.errLocation : null}
        </div>

        <select className="form-control"></select>

        <input type="checkbox" name="skills" id="skill1" value="html" />
        <label htmlFor="skill1">html</label>
        <input type="checkbox" name="skills" id="skill2" value="js" />
        <label htmlFor="skill2">js</label>
        <input type="checkbox" name="skills" id="skill3" value="bootstrap" />
        <label htmlFor="skill3">bootstrap</label>
        <div className="text-danger">
          {errors.errMin ? errors.errMin : null}
        </div>

        <div className="form-group">
          <label htmlFor="profile">Upload profile</label>
          <input
            type="file"
            onChange={(e) => {
              if (!e.target.value) {
                errObj.errFile = "Please upload Profile Picture";
                document.querySelector("#profile").className =
                  "form-control border border-danger";
              } else {
                errObj.errFile = "";
                document.querySelector("#profile").className =
                  "form-control border border-success";
              }
              setFile(e.target.value);
              setErrors((prevState) => {
                prevState.errFile = errObj.errFile;
                return prevState;
              });
              console.log(errors);
            }}
            value={file}
            className="form-control-file  border border-danger"
            id="profile"
          ></input>
          <div className="text-danger">
            {errors.errFile ? errors.errFile : null}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="comments">Example textarea</label>
          <textarea
            className="form-control border border-danger"
            id="comments"
            onChange={(e) => {
              const regExp4 = new RegExp(/./);
              if (!regExp4.test(e.target.value)) {
                errObj.errComments = "Please Enter Comments";
                document.querySelector("#comments").className =
                  "form-control border border-danger";
              } else {
                errObj.errComments = "";
                document.querySelector("#comments").className =
                  "form-control border border-success";
              }
              setComments(e.target.value);
              setErrors((prevState) => {
                prevState.errComments = errObj.errComments;
                return prevState;
              });
              console.log(errors);
            }}
            value={comments}
            rows="3"
          ></textarea>
          <div>{errors.errComments ? errors.errComments : null}</div>
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          disabled={
            errors.errComments ||
            errors.errAssociateId ||
            errors.errAssociateName ||
            errors.errProjectId ||
            errors.errFile ||
            errors.errComments
          }
          className="btn btn-primary mr-2"
        >
          Submit
        </button>
        <button type="submit" onClick={handleReset} className="btn btn-primary">
          Reset
        </button>
      </form>
    </div>
  );
}

export default Form;
