import  { useState, useEffect } from "react";
import DOMPurify from "dompurify"; // For sanitization
import { handleError, handleSuccess } from "./util"; // Notification functions

// eslint-disable-next-line react/prop-types
const FormComp = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    programme: "",
    email: "",
    phone: "",
    enrollment: "",
    problemstatement: "",
    objective: "",
    team: "",
    teamComment: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [modalHeight, setModalHeight] = useState("calc(100vh - 2rem)");

  // Update modal height based on the window size
  useEffect(() => {
    const updateModalHeight = () => {
      setModalHeight(`calc(${window.innerHeight}px - 2rem)`);
    };

    // Update on window resize
    window.addEventListener("resize", updateModalHeight);
    
    // Set initial modal height
    updateModalHeight();

    return () => {
      window.removeEventListener("resize", updateModalHeight);
    };
  }, []);

  const handleChange = (e) => {
    const { id, value, maxLength } = e.target;
    const sanitizedValue = DOMPurify.sanitize(value).slice(0, maxLength ? maxLength : undefined);
    setFormData((prev) => ({ ...prev, [id]: sanitizedValue }));
    setErrors((prev) => ({ ...prev, [id]: sanitizedValue ? "" : "This field is required" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (buttonDisabled) return;

    const submissionData = { ...formData, team: Number(formData.team) };
    const { name, programme, email, phone, enrollment, problemstatement, objective, team, teamComment } = submissionData;
    let newErrors = {};

    // Validation rules
    if (!name || name.length < 3 || name.length > 100) {
      newErrors.name = "Full Name must be between 3 and 100 characters";
    }
    if (!programme || programme.length < 3 || programme.length > 50) {
      newErrors.programme = "Programme must be between 3 and 100 characters";
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "A valid email is required";
    }
    if (!phone || !/^[0-9]{10}$/.test(phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }
    if (!enrollment || !/^[a-zA-Z0-9]+$/.test(enrollment)) {
      newErrors.enrollment = "Enrollment number must be alphanumeric";
    }
    if (!problemstatement || problemstatement.length < 5) {
      newErrors.problemstatement = "Project problem statement must be at least 5 characters";
    }
    if (!objective || objective.length < 5) {
      newErrors.objective = "Project objective must be at least 5 characters";
    }
    if (!team || ![2, 3].includes(team)) {
      newErrors.team = "Please select the number of team members";
    }
    if (Number(team) > 1 && (!teamComment || teamComment.trim().length < 5)) {
      newErrors.teamComment = "Please provide team details (min 5 characters)";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      handleError("Please fill all required fields!", setButtonDisabled);
      return;
    }

    try {
      setLoading(true);
      setButtonDisabled(true);

      console.log("Submitting Data:", JSON.stringify(submissionData));

      const response = await fetch(import.meta.env.VITE_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        handleError(errorData.message || "Something went wrong!", setButtonDisabled);
        return;
      }

      const result = await response.json();
      const { success, message } = result;

      if (success) {
        handleSuccess(message, setButtonDisabled);
        setTimeout(() => {
        ;
        }, 1000);
      }
    } catch (err) {
      console.error("Error:", err);
      handleError(err.message || "Something went wrong! Try again.", setButtonDisabled);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="max-w-lg w-full mx-auto my-10 p-8 bg-white rounded-xl shadow-2xl border border-gray-200 relative animate-fadeIn overflow-y-auto "
      style={{ maxHeight: modalHeight }} // Ensure the modal fits within the viewport with dynamic height
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl font-bold focus:outline-none"
      >
        &times;
      </button>

      <h1 className="text-4xl font-extrabold text-center mb-6 tracking-wider drop-shadow-lg overflow-visible leading-[1.25] pb-2 gradient-text">
  Registration Form
</h1>




      <form className="space-y-4" onSubmit={handleSubmit}>
        {[ // Form fields configuration
          {
            id: "name",
            type: "text",
            placeholder: "Enter your full name",
            label: "Full Name",
            maxLength: 100,
          },
          {
            id: "programme",
            type: "text",
            placeholder: "eg: B.Tech 6CSE-1X",
            label: "Programme",
            maxLength: 50,
          },
          {
            id: "email",
            type: "email",
            placeholder: "Enter your email",
            label: "Email Address",
            maxLength: 50,
          },
          {
            id: "phone",
            type: "tel",
            placeholder: "Enter your phone number",
            label: "Phone Number",
            maxLength: 10,
            pattern: "[0-9]{10}",
          },
          {
            id: "enrollment",
            type: "text",
            placeholder: "Enter your enrollment number",
            label: "Enrollment Number",
            maxLength: 20,
          },
          {
            id: "problemstatement",
            type: "textarea",
            placeholder: "Enter your Title of the project",
            label: "Problem Statement",
            maxLength: 500,
          },
          {
            id: "objective",
            type: "textarea",
            placeholder: "Enter your project abstract or description",
            label: "Project Objective",
            maxLength: 1000,
          },
          {
            id: "team",
            type: "select",
            label: "Team Members",
            options: [
              { value: "", label: "Select Number Of Team Members" },
              { value: "2", label: "2" },
              { value: "3", label: "3" },
            ],
            maxLength: 200,
          },
        ].map(({ id, type, placeholder, label, options, maxLength, pattern }) => (
          <div key={id} className="flex flex-col">
            <label htmlFor={id} className="text-gray-700 font-medium">{label}</label>
            {type === "textarea" ? (
              <textarea
                id={id}
                placeholder={placeholder}
                value={formData[id]}
                onChange={handleChange}
                maxLength={maxLength}
                className={`mt-1 px-3 py-2 w-full border rounded-md text-base font-normal text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors[id] ? "border-red-500" : "border-gray-300"}`}
              />
            ) : type === "select" ? (
              <select
                id={id}
                value={formData[id]}
                onChange={handleChange}
                className={`mt-1 px-3 py-2 w-full border rounded-md text-base font-normal text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors[id] ? "border-red-500" : "border-gray-300"}`}
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={type}
                id={id}
                placeholder={placeholder}
                value={formData[id]}
                onChange={handleChange}
                maxLength={maxLength}
                pattern={pattern}
                className={`mt-1 px-3 py-2 w-full border rounded-md text-base font-normal text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors[id] ? "border-red-500" : "border-gray-300"}`}
              />
            )}
            {errors[id] && (
              <span className="text-red-500 text-sm mt-1">{errors[id]}</span>
            )}
          </div>
        ))}

        {Number(formData.team) > 1 && (
          <div className="flex flex-col">
            <label htmlFor="teamComment" className="text-gray-700 font-medium">
              Team Details
            </label>
            <textarea
              id="teamComment"
              placeholder={`Member 1 (Name): ABC,\nMember 2 (Name): EFG`}
              value={formData.teamComment}
              onChange={handleChange}
              maxLength={200}

              className={`mt-1 px-3 py-2 w-full border rounded-md text-base font-normal text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors.teamComment ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.teamComment && (
              <span className="text-red-500 text-sm mt-1">{errors.teamComment}</span>
            )}
          </div>
        )}

        <button
          type="submit"
          disabled={loading || buttonDisabled}
          className={`w-full py-2 px-4 text-white font-semibold rounded-md transition duration-200 ${loading || buttonDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 active:scale-95"}`}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default FormComp;
