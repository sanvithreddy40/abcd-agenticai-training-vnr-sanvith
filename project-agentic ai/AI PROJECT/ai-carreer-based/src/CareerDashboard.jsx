import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CareerDashboard.css";

export default function CareerDashboard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telegramId, setTelegramId] = useState("");
  const [skills, setSkills] = useState("");
  const [fileType, setFileType] = useState("");
  const [fileUpload, setFileUpload] = useState(null);
  const [deliveryMode, setDeliveryMode] = useState("");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Email validation
  const validateEmail = (email) => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  };

  // ✅ Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    if (!deliveryMode) {
      toast.warn("Please select how you want to receive the suggestions.");
      return;
    }

    if (!city) {
      toast.warn("Please select your city!");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("telegramId", telegramId);
    formData.append("skills", skills);
    formData.append("fileType", fileType);
    formData.append("deliveryMode", deliveryMode);
    formData.append("city", city);
    if (fileUpload) formData.append("file_upload", fileUpload);

    try {
      const response = await fetch(
        "http://localhost:5678/webhook-test/0e3138a7-36e7-496e-b7ec-30addedb3478",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        toast.error("❌ Submission failed. Please try again!");
      } else {
        toast.success("✅ Form submitted successfully!");
        // Reset form
        setName("");
        setEmail("");
        setTelegramId("");
        setSkills("");
        setFileType("");
        setFileUpload(null);
        setDeliveryMode("");
        setCity("");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("⚠️ Unable to reach AI workflow. Try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="dashboard-container">
      <h2>AI Career Guidance Assistant</h2>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Telegram ID:</label>
        <input
          type="text"
          placeholder="@yourTelegramID"
          value={telegramId}
          onChange={(e) => setTelegramId(e.target.value)}
          required
        />

        <label>Skills / Interests:</label>
        <input
          type="text"
          placeholder="e.g. Python, React, Machine Learning"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          required
        />

        <label>City:</label>
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        >
          <option value="">-- Select City --</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Chennai">Chennai</option>
          <option value="Pune">Pune</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Other">Other</option>
        </select>

        <label>Document Format:</label>
        <select
          value={fileType}
          onChange={(e) => setFileType(e.target.value)}
          required
        >
          <option value="">-- Select File Type --</option>
          <option value="PDF">PDF (.pdf)</option>
          <option value="DOCX">DOCX (.docx)</option>
          <option value="TXT">Text File (.txt)</option>
          <option value="Other">Other</option>
        </select>

        <label>Upload File:</label>
        <input
          key={fileUpload ? fileUpload.name : "empty"}
          type="file"
          accept=".pdf,.docx,.txt"
          onChange={(e) => setFileUpload(e.target.files[0])}
          required
        />

        <label>Receive Suggestions Via:</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="delivery"
              value="Gmail"
              checked={deliveryMode === "Gmail"}
              onChange={(e) => setDeliveryMode(e.target.value)}
            />
            Gmail
          </label>
          <label>
            <input
              type="radio"
              name="delivery"
              value="Telegram"
              checked={deliveryMode === "Telegram"}
              onChange={(e) => setDeliveryMode(e.target.value)}
            />
            Telegram
          </label>
          <label>
            <input
              type="radio"
              name="delivery"
              value="Both"
              checked={deliveryMode === "Both"}
              onChange={(e) => setDeliveryMode(e.target.value)}
            />
            Both
          </label>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Analyzing..." : "Submit"}
        </button>
      </form>

      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}
