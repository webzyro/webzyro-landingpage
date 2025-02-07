import { useState } from "react";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
  mobile: yup
    .string()
    .matches(/^[6-9]\d{9}$/, "Invalid mobile number")
    .required("Mobile No. is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  website: yup.string().url("Invalid URL"),
  budget: yup.string().required("Budget is required"),
});

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    website: "",
    budget: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error message when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwlvu4CofkmvQJ4F4YhhloVPDyfhddnLW1IOh4uCzTqC2ri8E9go9bpjkuVu47hwwXhOg/exec";

    try {
      setLoading(true);
      // Validate form data
      const data = await schema.validate(formData, { abortEarly: false });
      console.log(data);

      // Store user data in session storage
      sessionStorage.setItem("userInfo", JSON.stringify(data));

      // Reset errors if validation passes
      setErrors({});

      // Send form data to Google Sheets
      const response = await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setLoading(false);
      // Navigate to thank-you page after successful submission
      navigate("/thank-you");
    } catch (err) {
      if (err.name === "ValidationError") {
        // Handle validation errors
        const errors = err.inner.reduce((acc, curr) => {
          acc[curr.path] = curr.message;
          return acc;
        }, {});
        setErrors(errors);
        setLoading(false);
      } else {
        // Handle fetch or unexpected errors
        console.error("Error submitting form:", err);
        setErrors({ form: "Something went wrong. Please try again later." });
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col space-y-4 p-4 bg-white shadow-md rounded-lg"
    >
      <h1 className="text-slate-700 font-bold text-xl text-start">
        Accelerate Your Growth
      </h1>

      {/* Name Input */}
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name *"
          className="py-2 px-4 border-none bg-slate-300 rounded-2xl focus:outline-1 outline-sky-300 w-full"
          autoComplete="off"
        />
        {errors.name && (
          <p className="text-red-500 text-sm text-center">{errors.name}</p>
        )}
      </div>

      {/* Mobile Input */}
      <div>
        <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Mobile No *"
          className="py-2 px-4 border-none bg-slate-300 rounded-2xl focus:outline-1 outline-sky-300 w-full"
          autoComplete="off"
        />
        {errors.mobile && (
          <p className="text-red-500 text-sm text-center">{errors.mobile}</p>
        )}
      </div>

      {/* Email Input */}
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Id *"
          className="py-2 px-4 border-none bg-slate-300 rounded-2xl focus:outline-1 outline-sky-300 w-full"
          autoComplete="off"
        />
        {errors.email && (
          <p className="text-red-500 text-sm text-center">{errors.email}</p>
        )}
      </div>

      {/* Website URL Input */}
      <div>
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          placeholder="Website URL"
          className="py-2 px-4 border-none bg-slate-300 rounded-2xl focus:outline-1 outline-sky-300 w-full"
          autoComplete="off"
        />
        {errors.website && (
          <p className="text-red-500 text-sm text-center">{errors.website}</p>
        )}
      </div>

      {/* Budget Dropdown */}
      <div>
        <select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="py-2 px-4 border-none bg-slate-300 rounded-2xl focus:outline-1 outline-sky-300 w-full"
        >
          <option value="" disabled>
            Monthly AD Budget (INR) *
          </option>
          <option value="10L+">INR 10 Lacs or above</option>
          <option value="5L-10L">INR 5 Lacs - INR 10 Lacs</option>
          <option value="2L-5L">INR 2 Lacs - INR 5 Lacs</option>
          <option value="1L-2L">INR 1 Lacs - INR 2 Lacs</option>
        </select>
        {errors.budget && (
          <p className="text-red-500 text-sm text-center">{errors.budget}</p>
        )}
      </div>

      {/* Submit Button */}
      <button className="py-2 px-4 bg-gradient-to-l from-[#23a2db] to-[#333a91] rounded-xl  transition-colors delay-75 duration-300 cursor-pointer text-xl font-bold text-white">
        {loading ? "loading..." : "Get Started Now"}
      </button>
    </form>
  );
};

export default Form;
