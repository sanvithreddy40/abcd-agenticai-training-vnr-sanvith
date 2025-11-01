# 🧠 AI Career Guidance Workflow (n8n)

## 📋 Project Overview
This project is an **AI-driven career guidance workflow** built using **n8n**, which automates personalized career suggestions, job searches, and learning recommendations based on a user’s profile.  

When a user submits their form or uploads a resume (DOCX/PDF), the system:
1. Extracts and processes the input data.  
2. Uses **Google Gemini AI** to analyze skills and suggest the top career paths.  
3. Retrieves relevant **job listings (via SerpApi)** and **YouTube learning videos**.  
4. Sends the final recommendations to the user via **Email and Telegram**.  

---

## ⚙️ Workflow Structure

### 🔹 1. Input and Trigger
- **On Form Submission** – starts the workflow when a user submits data from the web form.  
- **Webhook** – accepts POST requests from external applications or frontends.

---

### 🔹 2. Data Storage and Routing
- **Append Row in Sheet (Google Sheets)** – stores user information such as name, skills, and city.  
- **Switch / Switch2** – routes the flow based on file type (DOCX/PDF) or other conditions.  

---

### 🔹 3. File Handling and Data Extraction
- **DOCX to Text** – converts uploaded `.docx` resumes into readable text.  
- **Extract from File (Extract from PDF)** – extracts content from `.pdf` resumes.  

---

### 🔹 4. AI Processing
- **AI Agent** – the core intelligence node that analyzes extracted resume text and generates career recommendations.  
- **Google Gemini Chat Model** – used by the AI Agent to process user data, interpret skills, and suggest the top 3 IT/software career paths.  
- **Simple Memory** – stores past user queries or AI context for personalized follow-ups.  

---

### 🔹 5. External Integrations
- **Code in JavaScript (1)** – formats the AI output and prepares the query for the job search API.  
- **Google Jobs Search (via SerpApi)** – retrieves real-time job listings based on skills and city.  
- **Code in JavaScript (2)** – structures final output and merges job + video data for messaging.  
- **Get Many Videos in YouTube** – finds YouTube tutorials for skills and roles suggested by the AI.  

---

### 🔹 6. Output and Notifications
- **Send a Text Message (Telegram)** – sends AI recommendations and job links directly to the user’s Telegram account.  
- **Send a Message (Gmail)** – sends a detailed email with:
  - Top 3 career paths  
  - Relevant job openings  
  - YouTube learning videos  
- **Send a Text Message 2** – optional confirmation or fallback notification.  

---

## 🧩 Technologies and Resources Used

| Category | Tool / Service | Description |
|-----------|----------------|-------------|
| **Automation Platform** | n8n | Used to design, automate, and connect all nodes visually |
| **AI Model** | Google Gemini Chat Model | Generates personalized career path suggestions |
| **Job Search API** | SerpApi (Google Jobs Engine) | Fetches live job listings |
| **Video Resource** | YouTube API | Finds relevant skill learning videos |
| **Data Storage** | Google Sheets | Stores all user and AI output data |
| **Communication** | Gmail, Telegram | Sends personalized results to users |
| **Logic Control** | Switch, JavaScript nodes | Routing, data filtering, and formatting |
| **File Handling** | DOCX → Text, PDF Extractor | Reads resumes or uploaded files |
| **Memory Module** | Simple Memory | Stores previous interactions for AI continuity |

---

## 🧠 Workflow Summary
1. User submits a form or resume.  
2. The workflow saves the data to Google Sheets.  
3. The file (DOCX/PDF) is converted to text.  
4. The AI Agent (powered by Gemini) analyzes the text.  
5. Jobs are fetched via **SerpApi**, and tutorials via **YouTube API**.  
6. Results are formatted using **JavaScript nodes**.  
7. Recommendations are sent through **Email and Telegram**.

---

## 🚀 Key Features
- 📄 Resume text extraction (DOCX & PDF support)  
- 🤖 AI-based career guidance using Google Gemini  
- 💼 Real-time job recommendations (Google Jobs)  
- 🎥 Skill improvement via YouTube videos  
- 💬 Multi-channel delivery (Gmail & Telegram)  
- 🧠 Contextual memory for personalized suggestions  
- 📊 Data logging in Google Sheets  

---

## 🧾 Example Output
**Subject:** Career Recommendations for Sanvith Reddy  

**Message:**
> Hi Sanvith Reddy, here are the top 3 career paths and job suggestions for you in Jagtial!  
>
> **1. Front-end Web Developer**  
> - Skills: HTML, CSS, React  
> - Jobs: [View on Google Jobs](#)  
> - YouTube: [Learn React in 1 Hour](#)  
>
> **2. Data Scientist**  
> - Skills: Python, Statistics, Machine Learning  
> - Jobs: [View on Google Jobs](#)  
> - YouTube: [Python for Data Science](#)  

---

## 📬 Output Channels
- **Email (Gmail)** – detailed recommendation message  
- **Telegram** – quick summary and job links  

---

## 🧩 Use Case
This system is ideal for:
- AI-driven **career counseling platforms**  
- **College career guidance** projects  
- Automated **resume analysis and job matching** tools  

---

## 📊 Workflow Overview (Text Diagram)

<img width="1918" height="1079" alt="Workflow Project" src="https://github.com/user-attachments/assets/2ab1da68-32ef-44d3-91e4-ed829632326e" />

## PPT: 

[AI_Career_Guidance_and_Job_Analyst.pptx](https://github.com/user-attachments/files/23281648/AI_Career_Guidance_and_Job_Analyst.pptx)


