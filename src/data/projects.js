export const projects = [
  {
    title: "QNN Customer Segmentation",
    description:
      "Quantum-inspired customer segmentation using manual scaling, sin/cos feature encoding, and a custom NumPy KMeans pipeline deployed in Streamlit.",
    tech: ["Python", "NumPy", "Streamlit", "Seaborn", "No sklearn"],
    github: "https://github.com/Meghana0306/Quantum_Neural_Networks",
    live: "https://quantumneuralnetworks-bvusqzdt5rrywcjfy9nbsa.streamlit.app/",
    image: "https://i.postimg.cc/Nf9sB95r/Screenshot-2026-03-11-112427.png",
    details: {
      tagline: "Quantum-inspired ML built from scratch with NumPy and Streamlit.",
      about:
        "This project applies quantum-inspired feature encoding to customer behaviour clustering. Instead of relying on prebuilt ML abstractions, the full workflow was implemented manually: synthetic data generation, standard scaling, sin/cos encoding, centroid initialisation, distance computation, cluster assignment, convergence checks, statistics generation, and visual storytelling through interactive charts.",
      highlight:
        "The quantum-inspired step expands each normalised feature into sin(x) and cos(x), increasing the feature space from 4 to 8 dimensions and helping the clustering process capture richer relationships between age, income, spending score, and purchase frequency.",
      features: [
        {
          title: "Manual Standard Scaling",
          desc: "Normalises all four customer features using pure NumPy by computing mean and standard deviation directly, without sklearn.",
        },
        {
          title: "Custom KMeans Logic",
          desc: "Implements centroid initialisation, Euclidean distance calculation, label assignment, centroid updates, and convergence checks from scratch.",
        },
        {
          title: "Interactive Streamlit App",
          desc: "Lets users tune cluster count, sample size, iteration count, and random seed from the sidebar and see results update dynamically.",
        },
        {
          title: "Visual Analytics",
          desc: "Includes multiple views such as customer distribution plots, cluster comparisons, frequency analysis, and 3D segmentation visuals.",
        },
      ],
      pipeline: [
        {
          step: "01",
          title: "Data Generation",
          desc: "Creates 1000 synthetic customer records with age, income, spending score, and purchase frequency using seeded NumPy randomness.",
        },
        {
          step: "02",
          title: "Manual Scaling",
          desc: "Standardises the raw features by subtracting the mean and dividing by the standard deviation for each column.",
        },
        {
          step: "03",
          title: "Quantum Encoding",
          desc: "Transforms each feature with sin(x) and cos(x), doubling the feature space from 4 to 8 dimensions.",
        },
        {
          step: "04",
          title: "KMeans Clustering",
          desc: "Runs a custom iterative KMeans loop until centroids stabilise or the iteration limit is reached.",
        },
        {
          step: "05",
          title: "Cluster Insights",
          desc: "Appends cluster labels, computes per-cluster statistics, and exports the segmented dataset as CSV.",
        },
        {
          step: "06",
          title: "Presentation Layer",
          desc: "Displays charts and summary tables inside Streamlit for interactive exploration and demonstration.",
        },
      ],
      stats: [
        { value: "1000", label: "customers" },
        { value: "4 to 8", label: "feature dimensions" },
        { value: "2 to 6", label: "cluster range" },
        { value: "5+", label: "visual outputs" },
      ],
    },
  },
  {
    title: "HR Management System (MERN)",
    description:
      "Full-stack MERN HR platform with JWT auth, OTP verification, role-based access, attendance, leave approvals, payroll, and reports.",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    github: "https://github.com/Meghana0306/HR_Mangement_System",
    image: "https://i.postimg.cc/FRPtXrg9/Screenshot-2026-03-08-183257.png",
    details: {
      metaLine: "MERN stack | JWT | role-based access | REST API",
      tagline:
        "A complete HR platform with secure authentication, employee operations, attendance, leave workflows, payroll visibility, and reporting.",
      about:
        "This HR Management System was built as a full-stack MERN application designed around real company workflows. It supports dual authentication with password and OTP, separates admin and employee permissions through role-based access, and connects employee records, attendance logs, leave requests, payroll data, reports, and settings into one unified system. The backend exposes protected REST APIs, while the frontend provides route-level protection and a clean operational dashboard.",
      highlightTitle: "Authentication Flow",
      highlight:
        "Users can sign in through password-based login or OTP-based verification. Registration includes OTP email verification using Nodemailer and a Gmail app password, while JWT tokens protect private routes and persist authenticated sessions across the app.",
      features: [
        {
          title: "Dual Authentication",
          desc: "Supports password login and OTP verification, with email-based registration confirmation powered by Nodemailer.",
        },
        {
          title: "Role-Based Access",
          desc: "Admins manage employees, approvals, payroll, and reports, while users only access their own records and actions.",
        },
        {
          title: "Employee Operations",
          desc: "Includes employee CRUD flows, filtering, backend integration, and structured HR record handling.",
        },
        {
          title: "Attendance and Leave",
          desc: "Tracks attendance by date and supports leave application, approval, rejection, and status filtering.",
        },
        {
          title: "Payroll and Reports",
          desc: "Provides employee payroll visibility and report generation across attendance, leave, performance, and payroll modules.",
        },
        {
          title: "Security and Settings",
          desc: "Uses JWT, bcryptjs, protected routes, theme preferences, privacy settings, password updates, and notification controls.",
        },
      ],
      stats: [
        { value: "11", label: "app pages" },
        { value: "15", label: "api endpoints" },
        { value: "2", label: "user roles" },
        { value: "JWT + OTP", label: "auth layers" },
      ],
      authFlows: [
        {
          title: "Password Login",
          steps: [
            "User enters email and password.",
            "Selected role is validated against account permissions.",
            "Backend returns a JWT token after successful authentication.",
            "Frontend stores the token and sends it in the Authorization header.",
          ],
        },
        {
          title: "OTP Verification",
          steps: [
            "User submits email for OTP delivery.",
            "Nodemailer sends a 6-digit code via Gmail app password configuration.",
            "Code is verified before registration or OTP login is completed.",
            "Verified users receive an authenticated session and protected access.",
          ],
        },
      ],
      pages: [
        { name: "Login", path: "/login", desc: "Password and OTP login with role-aware entry." },
        { name: "Register", path: "/register", desc: "User registration flow with verification support." },
        { name: "OTP Verify", path: "/otp-verify", desc: "Email OTP confirmation before protected access." },
        { name: "Dashboard", path: "/dashboard", desc: "Overview cards and quick actions for HR workflows." },
        { name: "Attendance", path: "/attendance", desc: "Date-based attendance marking and status controls." },
        { name: "Employee", path: "/employee", desc: "Employee list, filters, and HR record management." },
        { name: "Employee Form", path: "/employee/add", desc: "Admin-only add employee flow connected to backend APIs." },
        { name: "Leave", path: "/leave", desc: "Leave requests, filtering, and admin approval actions." },
        { name: "Payroll", path: "/payroll", desc: "Payroll data visibility for employees and admins." },
        { name: "Reports", path: "/reports", desc: "HR report creation and viewing with access separation." },
        { name: "Settings", path: "/settings", desc: "Theme, privacy, password, and notification preferences." },
      ],
      apis: [
        { method: "POST", endpoint: "/api/auth/register", desc: "Register a new user account.", role: "Public" },
        { method: "POST", endpoint: "/api/auth/login", desc: "Authenticate a user and return a JWT.", role: "Public" },
        { method: "GET", endpoint: "/api/auth/me", desc: "Fetch the current authenticated profile.", role: "Auth" },
        { method: "PUT", endpoint: "/api/auth/profile", desc: "Update the authenticated user profile.", role: "Auth" },
        { method: "POST", endpoint: "/send-otp", desc: "Send OTP to the user's email address.", role: "Public" },
        { method: "POST", endpoint: "/verify-otp", desc: "Validate the submitted OTP code.", role: "Public" },
        { method: "POST", endpoint: "/api/hr", desc: "Create a new HR or employee record.", role: "Admin" },
        { method: "GET", endpoint: "/api/hr", desc: "Return all records for admin or scoped records for users.", role: "Auth" },
        { method: "PUT", endpoint: "/api/hr/:id", desc: "Update a selected HR record.", role: "Admin" },
        { method: "DELETE", endpoint: "/api/hr/:id", desc: "Delete an HR record.", role: "Admin" },
        { method: "POST", endpoint: "/api/reports", desc: "Create a report entry.", role: "Admin" },
        { method: "GET", endpoint: "/api/reports", desc: "Return reports based on access level.", role: "Auth" },
        { method: "GET", endpoint: "/api/settings", desc: "Fetch the current user's settings.", role: "Auth" },
        { method: "PUT", endpoint: "/api/settings", desc: "Update personal settings and preferences.", role: "Auth" },
        { method: "GET", endpoint: "/api/settings/all", desc: "Admin view of all user settings.", role: "Admin" },
      ],
      techStack: [
        { category: "Frontend", items: ["React 18", "Vite", "React Router", "Axios", "Context API"] },
        { category: "Backend", items: ["Node.js", "Express.js", "JWT", "bcryptjs", "Nodemailer"] },
        { category: "Database", items: ["MongoDB", "Mongoose"] },
        { category: "Security", items: ["Protected Routes", "Role Checks", "OTP Verification", "Password Hashing"] },
        { category: "Deployment", items: ["Netlify", "Railway or Render", "MongoDB Atlas"] },
      ],
    },
  },
  {
    title: "CyberTrace",
    description:
      "Dynamic contact tracing and breach detection system with BFS path tracing, encrypted logs, IoT simulation, and animated network visualization.",
    tech: ["Java", "BFS Algorithm", "AES-256", "Graph Theory", "IoT Simulation", "JavaFX"],
    github: "https://github.com/Meghana0306/Dynamic-contact-tracing-app-using-graphs",
    image: "https://i.postimg.cc/QMWvXJdH/Screenshot-2026-03-10-225247.png",
    details: {
      metaLine: "Java | IoT | security | graph tracing",
      tagline:
        "A Java-based network tracing platform that models infection spread, secures logs, and visualizes breach propagation in real time.",
      about:
        "CyberTrace is a dynamic contact tracing and network breach detection project built around graph traversal and secure event handling. It models IP nodes and device relationships as a live graph, uses BFS to identify shortest breach propagation paths, encrypts sensitive contact logs, and presents the evolving network through a JavaFX interface. The system is designed to simulate real-world IoT monitoring scenarios where alerts, infected nodes, and tracing operations happen continuously.",
      highlightTitle: "System Architecture",
      highlight:
        "The platform connects simulated IoT devices, a graph builder, a BFS tracing engine, an AES-based encryptor, a JavaFX visualization layer, and an embedded HTTP server. This lets the system ingest anomalies, trace spread paths, secure logs, and surface network state through one integrated workflow.",
      features: [
        {
          title: "BFS Breach Tracing",
          desc: "Finds shortest infection or breach propagation paths between source and target nodes in the network graph.",
        },
        {
          title: "AES-256 Log Protection",
          desc: "Encrypts sensitive tracing and contact data before storage to keep network intelligence secure.",
        },
        {
          title: "IoT Simulation",
          desc: "Simulates multiple devices sending heartbeat and anomaly data to reproduce live network conditions.",
        },
        {
          title: "Animated JavaFX UI",
          desc: "Visualizes safe and infected nodes with animated state transitions and path highlighting.",
        },
        {
          title: "REST-Style Server Layer",
          desc: "Exposes tracing and graph operations through an embedded Java HTTP server.",
        },
        {
          title: "Concurrent Execution",
          desc: "Runs simulation, server activity, and visualization flows simultaneously using multithreading.",
        },
      ],
      stats: [
        { value: "6", label: "core modules" },
        { value: "BFS", label: "tracing engine" },
        { value: "AES-256", label: "log security" },
        { value: "JavaFX", label: "live visualization" },
      ],
      architecture: [
        { title: "IoT Devices", desc: "Simulate anomalies and heartbeat events from connected devices." },
        { title: "Graph Builder", desc: "Builds node and edge relationships for the traced network." },
        { title: "BFS Engine", desc: "Computes breach paths and spread traversal through the graph." },
        { title: "AES Encryptor", desc: "Secures tracing logs and stored event records." },
        { title: "JavaFX GUI", desc: "Displays animated nodes, edges, and infection state changes." },
        { title: "HTTP Server", desc: "Handles tracing requests and exposes backend actions." },
      ],
      modules: [
        {
          name: "Graph.java",
          desc: "Builds the adjacency structure for IP nodes and supports BFS traversal plus path reconstruction.",
        },
        {
          name: "ContactTracingApp_Animated.java",
          desc: "Drives the JavaFX interface with animated network rendering and color-coded infected versus safe states.",
        },
        {
          name: "Encryptor.java",
          desc: "Handles AES-based encryption and decryption for contact logs and sensitive trace information.",
        },
        {
          name: "IoTSimulator.java",
          desc: "Generates simulated device events and anomaly reports at runtime.",
        },
        {
          name: "CyberTraceServer.java",
          desc: "Runs an embedded HTTP server to expose endpoints for node updates, BFS tracing, and log access.",
        },
        {
          name: "Main.java",
          desc: "Bootstraps the graph, simulator threads, server, and animated dashboard.",
        },
      ],
      techStack: [
        { category: "Language", items: ["Java 17+"] },
        { category: "GUI", items: ["JavaFX", "Canvas API"] },
        { category: "Algorithms", items: ["BFS", "Graph ADT"] },
        { category: "Security", items: ["AES-256", "CBC Mode", "SecureRandom"] },
        { category: "Networking", items: ["com.sun.net.httpserver", "REST-style API"] },
        { category: "Concurrency", items: ["Java Threads", "ExecutorService"] },
      ],
    },
  },
  {
    title: "AI-Powered Deadlock Detection System",
    description:
      "Real-time OS process monitoring dashboard with AI-based deadlock detection, cycle detection, live CPU and memory tracking, and automated resolution strategies.",
    tech: ["Python", "Tkinter", "psutil", "Matplotlib", "Graph Theory", "Random Forest", "NetworkX"],
    github: "https://github.com/Meghana0306/OS-operating-systems",
    image: "https://i.postimg.cc/VLnSYW57/Screenshot-2026-03-15-200933.png",
    details: {
      metaLine: "AI | operating systems | Python | process monitoring",
      tagline:
        "An intelligent desktop dashboard that detects, predicts, and responds to deadlock-prone process behavior in real time.",
      about:
        "This project combines operating systems concepts, process monitoring, graph theory, and machine learning to build a proactive deadlock detection platform. Instead of waiting for systems to stall, it continuously observes live process data, models resource relationships through a graph, applies cycle detection to identify circular waits, and uses a Random Forest model to estimate deadlock risk. The result is a live Tkinter dashboard that visualizes CPU and memory trends, highlights risky processes, and suggests automated recovery actions.",
      highlightTitle: "Detection Pipeline",
      highlight:
        "The system streams process metrics through psutil, builds a resource allocation graph, checks for circular wait conditions with DFS-based cycle detection, scores process risk with a Random Forest classifier, and then surfaces the result through a live dashboard with alerts and resolution suggestions.",
      features: [
        {
          title: "Live CPU and Memory Tracking",
          desc: "Continuously monitors active processes and visualizes rolling resource trends in real time.",
        },
        {
          title: "Graph-Based Deadlock Analysis",
          desc: "Represents process-resource relationships as a graph and uses cycle detection to identify circular wait conditions.",
        },
        {
          title: "AI Risk Scoring",
          desc: "Uses a Random Forest model to classify process states and identify combinations that are likely to lead to deadlock.",
        },
        {
          title: "Resolution Suggestions",
          desc: "Recommends recovery actions such as preemption, rollback, or process termination based on the severity of the detected state.",
        },
        {
          title: "Interactive Desktop Dashboard",
          desc: "Displays process tables, risk alerts, and multiple charts in a Tkinter interface backed by Matplotlib.",
        },
        {
          title: "Multithreaded Monitoring",
          desc: "Separates monitoring loops from the UI so the dashboard remains responsive while tracking the system.",
        },
      ],
      stats: [
        { value: "6", label: "core modules" },
        { value: "4", label: "deadlock conditions" },
        { value: "3", label: "resolution strategies" },
        { value: "24/7", label: "live monitoring" },
      ],
      problemObjective: [
        {
          title: "Problem Statement",
          desc: "Traditional deadlock handling is often reactive, meaning circular waits and blocked processes are discovered only after they impact system performance or stability. Multi-process environments need a more proactive monitoring and prediction layer.",
        },
        {
          title: "Objective",
          desc: "Build a real-time process monitor that uses AI classification and graph-based detection to identify deadlock-prone conditions early, visualize the system state clearly, and recommend recovery strategies with minimal manual intervention.",
        },
      ],
      pipeline: [
        {
          step: "01",
          title: "psutil Monitor",
          desc: "Collects process IDs, CPU usage, memory usage, and runtime status from the operating system.",
        },
        {
          step: "02",
          title: "Graph Builder",
          desc: "Creates a resource allocation representation of process relationships and contention patterns.",
        },
        {
          step: "03",
          title: "Cycle Detection",
          desc: "Runs DFS-based checks to identify circular wait structures inside the graph.",
        },
        {
          step: "04",
          title: "Random Forest Scoring",
          desc: "Predicts which process states are likely to become deadlock-prone based on observed metrics.",
        },
        {
          step: "05",
          title: "Alert Engine",
          desc: "Flags dangerous states, highlights high-risk rows, and updates the risk timeline.",
        },
        {
          step: "06",
          title: "Tkinter Dashboard",
          desc: "Displays live charts, tables, and system alerts for operators and administrators.",
        },
      ],
      modules: [
        {
          name: "Data Collection and Monitoring",
          desc: "Streams live process information such as PID, CPU percentage, memory percentage, and status at regular intervals.",
        },
        {
          name: "Deadlock Detection Engine",
          desc: "Constructs the resource allocation graph, performs cycle detection, and coordinates deadlock analysis.",
        },
        {
          name: "Visualization Dashboard",
          desc: "Renders CPU trends, deadlock risk charts, and process-level status tables through Tkinter and Matplotlib.",
        },
        {
          name: "Resolution and Recovery System",
          desc: "Suggests or executes the least disruptive strategy among preemption, rollback, and termination.",
        },
        {
          name: "Predictive Analytics Layer",
          desc: "Uses historical patterns and current metrics to classify whether a process state is safe or risky.",
        },
        {
          name: "Logging and Administration",
          desc: "Stores event records, risk counts, and recovery decisions for later inspection and analysis.",
        },
      ],
      conditions: [
        {
          title: "Mutual Exclusion",
          desc: "Tracks resources that can be held by only one process at a time and therefore become contention points.",
        },
        {
          title: "Hold and Wait",
          desc: "Detects processes that continue holding one resource while requesting access to another unavailable one.",
        },
        {
          title: "No Preemption",
          desc: "Represents cases where resources cannot be forcibly taken away, increasing the chance of indefinite waiting.",
        },
        {
          title: "Circular Wait",
          desc: "Uses graph cycle detection to confirm chained dependencies that return to the original process.",
        },
      ],
      techStack: [
        { category: "Language", items: ["Python 3.11"] },
        { category: "GUI", items: ["Tkinter", "ttk"] },
        { category: "Visualization", items: ["Matplotlib", "FigureCanvasTkAgg"] },
        { category: "System Monitoring", items: ["psutil"] },
        { category: "AI and Analysis", items: ["Random Forest", "Scikit-learn", "NetworkX"] },
        { category: "Concurrency", items: ["threading", "daemon threads"] },
      ],
      outcome:
        "Delivered a functioning real-time desktop dashboard that monitors live OS processes, flags risky process combinations, identifies deadlock conditions through graph and AI analysis, and provides actionable recovery recommendations through a visual and operator-friendly interface.",
    },
  },
];
