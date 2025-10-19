const ORIGINAL_RESUME = String.raw`\documentclass[letterpaper,10.5pt]{article}
 
\usepackage{latexsym}
\usepackage[empty]{fullpage}
\usepackage{titlesec}
\usepackage{marvosym}
\usepackage[usenames,dvipsnames]{color}
\usepackage{verbatim}
\usepackage{enumitem}
\usepackage[hidelinks]{hyperref}
\usepackage{fancyhdr}
\usepackage[english]{babel}
\usepackage{tabularx}
\usepackage{geometry}
 
\geometry{margin=0.5in, top=0.45in, bottom=0.45in}
 
\pagestyle{fancy}
\fancyhf{}
\fancyfoot{}
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\footrulewidth}{0pt}
 
\urlstyle{same}
 
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}
 
\titleformat{\section}{
  \vspace{-6pt}\scshape\raggedright\large\bfseries
}{}{0em}{}[\color{black}\titlerule \vspace{-4pt}]
 
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}
 
\newcommand{\resumeSubheading}[4]{
  \vspace{-2pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & \textbf{#2} \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-6pt}
}
 
\newcommand{\resumeSubheadingWithGPA}[5]{
  \vspace{-2pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & \textbf{#2} \\
      \textit{\small#3} & \textit{\small #4} \\
      \textbf{\small#5} & \\
    \end{tabular*}\vspace{-6pt}
}
 
\newcommand{\resumeProjectHeading}[2]{
    \item
    \begin{tabular*}{0.97\textwidth}{l@{\extracolsep{\fill}}r}
      \small#1 & #2 \\
    \end{tabular*}\vspace{-6pt}
}
 
\renewcommand\labelitemii{$\vcenter{\hbox{\tiny$\bullet$}}$}
 
\newcommand{\resumeSubHeadingListStart}{\begin{itemize}[leftmargin=0.15in, label={}]}
\newcommand{\resumeSubHeadingListEnd}{\end{itemize}}
\newcommand{\resumeItemListStart}{\begin{itemize}[leftmargin=0.15in]\vspace{-4pt}}
\newcommand{\resumeItemListEnd}{\end{itemize}\vspace{-4pt}}
 
\begin{document}
 
\begin{center}
    \textbf{\Huge \scshape Siddharth Samir Khachane} \\ \vspace{2pt}
    \small Los Angeles $|$ +1 (213) 512 8004 $|$ \href{mailto:khachane@usc.edu}{\underline{khachane@usc.edu}} $|$ \href{https://www.linkedin.com/in/siddharth-khachane1/}{\underline{Linkedin}} $|$ \href{https://github.com/siddharthkhachane}{\underline{Github}} $|$ \href{https://siddharthkhachane.github.io/portfolio}{\underline{Portfolio}}
\end{center}
 
\section{EDUCATION}
  \resumeSubHeadingListStart
    \resumeSubheadingWithGPA
      {University of Southern California}{Aug 2024 to May 2026}
      {Master of Science, Computer Science}{Los Angeles, CA, USA}
      {$\bullet$GPA: 3.86/4}
  \resumeSubHeadingListEnd
 
\section{PROFESSIONAL EXPERIENCE}
  \resumeSubHeadingListStart
 
    \resumeSubheading
      {Feather App, Inc}{Sep 2025 to Present}
      {Technical Intern, Software Engineering}{Los Angeles, CA, USA}
      \resumeItemListStart
        \resumeItem{Implemented \textbf{AI agents} that analyze relationship data to deliver actionable nudges, resulting in a \textbf{50\% increase} in user engagement through insights from emails and calendar events, driving a substantial rise in timely user actions}
        \resumeItem{Designed a fully automated \textbf{ETL pipeline} based on \textbf{medallion architecture} that unified and contextualized Google Calendar and email data, utilizing \textbf{BullMQ} for job orchestration and reducing deduplication by streamlining data processing workflows}
      \resumeItemListEnd
      
    \resumeSubheading
      {NumisToken, Inc}{May 2025 to Aug 2025}
      {Full Stack Summer Intern}{Los Angeles, CA, USA}
      \resumeItemListStart
        \resumeItem{Developed a high performance \textbf{NFT marketplace} platform using \textbf{Java, Spring Boot, PostgreSQL} and \textbf{MyBatis} backend with \textbf{React} frontend, enabling trading, listing, and delivery functionalities}
        \resumeItem{Optimized database concurrency and scalability by implementing \textbf{optimistic locking} to resolve concurrent request conflicts, reducing transaction conflicts by \textbf{40\%} for \textbf{10,000+ concurrent users}}
      \resumeItemListEnd
 
    \resumeSubheading
      {Ultimate Kronos Group (UKG)}{Jan 2024 to Jul 2024}
      {Senior Software Engineer}{Noida, India}
      \resumeItemListStart
        \resumeItem{Engineered a \textbf{Messaging Framework in UKG DIMENSIONS} utilizing \textbf{RabbitMQ, Java} and \textbf{Spring Boot}, facilitating smooth asynchronous communication between microservices}
        \resumeItem{Developed a \textbf{Resiliency Framework} to automate message persistence in adverse scenarios, reducing recovery time and efforts by \textbf{80\%} compared to previous manual processes}
      \resumeItemListEnd
 
    \resumeSubheading
      {Ultimate Kronos Group (UKG)}{Jul 2022 to Jan 2024}
      {Software Engineer}{Noida, India}
      \resumeItemListStart
        \resumeItem{Established a \textbf{Common Messaging Platform in UKG PRO} utilizing \textbf{Kafka}, \textbf{Java} and \textbf{Python} to create a scalable and secure communication method between microservices in the HRM application, aligning with microservices architecture best practices}
        \resumeItem{Implemented advanced security measures including encryption, compression, and digital signatures to safeguard data flow between interconnected services}
        \resumeItem{Designed and deployed unified monitoring dashboards on \textbf{Grafana} to automate production observability, reducing manual oversight time by \textbf{50\%} and enhancing system reliability in alignment with best practices for observability systems}
      \resumeItemListEnd
 
  \resumeSubHeadingListEnd
 
\section{PROJECTS}
    \resumeSubHeadingListStart
      \resumeProjectHeading
          {\textbf{Word Slayer} $|$ \href{https://word-slayer-kappa.vercel.app}{\underline{Live Demo}}}{}
          \resumeItemListStart
            \resumeItem{Developed an \textbf{online multiplayer typing game} where players battle in real time by typing words to defeat enemies}
            \resumeItem{Implemented \textbf{real time pub/sub architecture} for instant synchronization of player actions and combat states}
            \resumeItem{Built \textbf{dynamic combat mechanics} with visual feedback and live opponent tracking across multiple difficulties}
          \resumeItemListEnd
          
      \resumeProjectHeading
          {\textbf{Collab Canvas} $|$ \href{https://collab-canvas-topaz.vercel.app}{\underline{Live Demo}}}{}
          \resumeItemListStart
            \resumeItem{Created a \textbf{real time collaborative whiteboard} application in \textbf{React, Node.js, Socket.io, and MongoDB}}
            \resumeItem{Incorporated features including multi user drawing synchronization, storing persistent canvas states MongoDB}
            \resumeItem{Deployed \textbf{full stack application} on \textbf{Vercel and Render} enabling seamless collaboration across devices}
          \resumeItemListEnd
          
      \resumeProjectHeading
          {\textbf{CodeOptimizer AI} $|$ \href{https://github.com/siddharthkhachane/CodeOptimizer}{\underline{Github}}}{}
          \resumeItemListStart
            \resumeItem{Created an \textbf{AI powered code assistant} which provides optimizations that are contextually aware to codebases}
            \resumeItem{Used \textbf{Retrieval Augmented Generation (RAG)} with vector store and embeddings to retrieve relevant code}
            \resumeItem{Built a UI with \textbf{Markdown} output and \textbf{real time chat interface} powered by local \textbf{LLMs}}
          \resumeItemListEnd
    \resumeSubHeadingListEnd
 
\section{SKILLS}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{Programming Languages}{: Java, Python, JavaScript, TypeScript, HTML, CSS, SQL, Node} \\
     \textbf{Frameworks}{: Spring Boot, React, Next.js, Express.js, Pytorch, Agile, Distributed Systems, Backend, Front end} \\
     \textbf{Technologies}{: Kafka, RabbitMQ, Docker, Kubernetes, AWS, Grafana, GCP, REST, Git, CI/CD, Microservices} \\
     \textbf{Data Management}{: MySQL, PostgreSQL, MongoDB, Redis, Neo4j, Data Structures}
    }}
 \end{itemize}
 
\section{CERTIFICATION}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{AWS (Amazon Web Services) Developer Associate}{: July 2024} \\
     \textbf{AWS (Amazon Web Services) Cloud Practitioner}{: July 2024}
    }}
 \end{itemize}
 
\end{document}`;

let tailoredResume = '';

document.getElementById('resumeForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const apiKey = document.getElementById('apiKey').value.trim();
    const jobTitle = document.getElementById('jobTitle').value.trim();
    const jobDescription = document.getElementById('jobDescription').value.trim();

    if (!apiKey || !jobTitle || !jobDescription) {
        showAlert('Please fill in all fields', 'error');
        return;
    }

    showLoading(true);
    hideAlert();
    document.getElementById('resultSection').classList.remove('active');
    document.getElementById('downloadWord').style.display = 'none';
    document.getElementById('downloadPdf').style.display = 'none';
    document.getElementById('downloadLatex').style.display = 'none';

    try {
        tailoredResume = await tailorResume(apiKey, jobTitle, jobDescription);
        document.getElementById('resultContent').textContent = tailoredResume;
        document.getElementById('resultSection').classList.add('active');
        document.getElementById('downloadWord').style.display = 'block';
        document.getElementById('downloadPdf').style.display = 'block';
        document.getElementById('downloadLatex').style.display = 'block';
        showAlert('Resume tailored successfully! You can now download it.', 'success');
    } catch (error) {
        showAlert(`Error: ${error.message}`, 'error');
    } finally {
        showLoading(false);
    }
});

async function tailorResume(apiKey, jobTitle, jobDescription) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: 'gpt-4o',
            messages: [
                {
                    role: 'system',
                    content: `You are an expert resume writer specializing in ATS optimization. Your task is to tailor a LaTeX resume to match a job description by:

1. Analyzing the job description for key technical skills, frameworks, methodologies, and buzzwords
2. Intelligently integrating these keywords into the existing resume content where they naturally fit
3. Adding relevant keywords to the SKILLS section if not already present
4. Modifying bullet points in PROFESSIONAL EXPERIENCE and PROJECTS to incorporate job specific terminology
5. Ensuring the LaTeX syntax remains perfect and compilable
6. Maintaining the original structure, formatting, and all custom LaTeX commands
7. NOT inventing fake experience, only enhancing existing content with relevant keywords
8. Keeping the resume truthful while optimizing for ATS systems

Return ONLY the complete modified LaTeX code, nothing else. Do not use markdown code blocks or any explanations.`
                },
                {
                    role: 'user',
                    content: `Job Title: ${jobTitle}

Job Description:
${jobDescription}

Original Resume (LaTeX):
${ORIGINAL_RESUME}

Please tailor this resume to match the job description by intelligently adding relevant keywords while maintaining truthfulness and LaTeX formatting.`
                }
            ],
            temperature: 0.7,
            max_tokens: 4000
        })
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'Failed to generate tailored resume');
    }

    const data = await response.json();
    let tailoredContent = data.choices[0].message.content.trim();

    tailoredContent = tailoredContent.replace(/```latex\n?/g, '').replace(/```\n?/g, '');

    return tailoredContent;
}

document.getElementById('downloadLatex').addEventListener('click', () => {
    if (!tailoredResume) {
        showAlert('Please generate a tailored resume first', 'error');
        return;
    }

    const blob = new Blob([tailoredResume], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'Siddharth_Samir_Khachane_Resume_new.tex');
    showAlert('LaTeX file downloaded successfully!', 'success');
});

document.getElementById('downloadPdf').addEventListener('click', async () => {
    if (!tailoredResume) {
        showAlert('Please generate a tailored resume first', 'error');
        return;
    }

    showLoading(true);

    try {
        const response = await fetch('https://latexonline.cc/compile?text=' + encodeURIComponent(tailoredResume));
        
        if (!response.ok) {
            throw new Error('LaTeX compilation failed');
        }

        const blob = await response.blob();
        saveAs(blob, 'Siddharth_Samir_Khachane_Resume_new.pdf');
        showAlert('PDF downloaded successfully!', 'success');
    } catch (error) {
        showAlert(`Error generating PDF: ${error.message}. Try downloading the LaTeX file and compile it locally.`, 'error');
    } finally {
        showLoading(false);
    }
});

document.getElementById('downloadWord').addEventListener('click', async () => {
    if (!tailoredResume) {
        showAlert('Please generate a tailored resume first', 'error');
        return;
    }

    try {
        const { Document, Paragraph, TextRun, HeadingLevel, AlignmentType, UnderlineType, TabStopType, TabStopPosition } = docx;

        const sections = parseLatexToDocx(tailoredResume);

        const doc = new Document({
            sections: [{
                properties: {
                    page: {
                        margin: {
                            top: 720,
                            right: 720,
                            bottom: 720,
                            left: 720
                        }
                    }
                },
                children: sections
            }]
        });

        const blob = await docx.Packer.toBlob(doc);
        saveAs(blob, 'Siddharth_Samir_Khachane_Resume_new.docx');
        showAlert('Word document downloaded successfully!', 'success');
    } catch (error) {
        showAlert(`Error generating Word document: ${error.message}`, 'error');
    }
});

function parseLatexToDocx(latex) {
    const { Paragraph, TextRun, HeadingLevel, AlignmentType } = docx;
    const sections = [];

    sections.push(
        new Paragraph({
            text: 'Siddharth Samir Khachane',
            heading: HeadingLevel.TITLE,
            alignment: AlignmentType.CENTER,
            spacing: { after: 100 }
        })
    );

    sections.push(
        new Paragraph({
            text: 'Los Angeles | +1 (213) 512 8004 | khachane@usc.edu',
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 }
        })
    );

    sections.push(
        new Paragraph({
            text: 'LinkedIn | Github | Portfolio',
            alignment: AlignmentType.CENTER,
            spacing: { after: 300 }
        })
    );

    const sectionRegex = /\\section\{([^}]+)\}/g;
    const sectionMatches = [...latex.matchAll(sectionRegex)];

    for (let i = 0; i < sectionMatches.length; i++) {
        const sectionTitle = sectionMatches[i][1];
        const sectionStart = sectionMatches[i].index + sectionMatches[i][0].length;
        const sectionEnd = i < sectionMatches.length  1 ? sectionMatches[i + 1].index : latex.length;
        const sectionContent = latex.substring(sectionStart, sectionEnd);

        sections.push(
            new Paragraph({
                text: sectionTitle,
                heading: HeadingLevel.HEADING_1,
                spacing: { before: 200, after: 100 }
            })
        );

        const items = sectionContent.match(/\\resumeItem\{([^}]+(?:\{[^}]*\}[^}]*)*)\}/g);
        if (items) {
            items.forEach(item => {
                let text = item.replace(/\\resumeItem\{([\s\S]+)\}$/, '$1');
                text = text.replace(/\\textbf\{([^}]+)\}/g, '$1');
                text = text.replace(/\\textit\{([^}]+)\}/g, '$1');
                text = text.replace(/\\[a-zA-Z]+/g, '');
                text = text.replace(/\{|\}/g, '');
                text = text.trim();
                
                sections.push(
                    new Paragraph({
                        text: `  • ${text}`,
                        spacing: { after: 80 }
                    })
                );
            });
        }

        const subheadings = sectionContent.match(/\\resumeSubheading\{([^}]+)\}\{([^}]+)\}\{([^}]+)\}\{([^}]+)\}/g);
        if (subheadings) {
            subheadings.forEach(subheading => {
                const parts = subheading.match(/\{([^}]+)\}/g).map(p => p.slice(1, 1));
                sections.push(
                    new Paragraph({
                        children: [
                            new TextRun({ text: parts[0], bold: true }),
                            new TextRun({ text: ' | ' + parts[1] })
                        ],
                        spacing: { before: 150, after: 50 }
                    })
                );
                sections.push(
                    new Paragraph({
                        text: parts[2] + ' | ' + parts[3],
                        italics: true,
                        spacing: { after: 100 }
                    })
                );
            });
        }
    }

    return sections;
}

function showLoading(show) {
    const loading = document.getElementById('loading');
    const generateBtn = document.getElementById('generateBtn');
    
    if (show) {
        loading.classList.add('active');
        generateBtn.disabled = true;
    } else {
        loading.classList.remove('active');
        generateBtn.disabled = false;
    }
}

function showAlert(message, type) {
    const alertBox = document.getElementById('alertBox');
    alertBox.textContent = message;
    alertBox.className = `alert alert_${type} active`;
    
    setTimeout(() => {
        alertBox.classList.remove('active');
    }, 5000);
}

function hideAlert() {
    document.getElementById('alertBox').classList.remove('active');
}
