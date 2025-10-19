let ORIGINAL_RESUME = '';
let tailoredResume = '';

async function loadOriginalResume() {
    try {
        const response = await fetch('original_resume.tex');
        if (!response.ok) {
            throw new Error('Could not load original resume file');
        }
        ORIGINAL_RESUME = await response.text();
    } catch (error) {
        showAlert('Error loading original resume: ' + error.message, 'error');
    }
}

loadOriginalResume();

document.getElementById('resumeForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const apiKey = document.getElementById('apiKey').value.trim();
    const jobTitle = document.getElementById('jobTitle').value.trim();
    const jobDescription = document.getElementById('jobDescription').value.trim();

    if (!apiKey || !jobTitle || !jobDescription) {
        showAlert('Please fill in all fields', 'error');
        return;
    }

    if (!ORIGINAL_RESUME) {
        showAlert('Original resume not loaded yet. Please wait a moment and try again.', 'error');
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
        // Use Overleaf API compatible service
        const formData = new FormData();
        formData.append('filecontents[]', tailoredResume);
        formData.append('filename[]', 'resume.tex');
        
        const response = await fetch('https://texlive.net/cgi-bin/latexcgi', {
            method: 'POST',
            body: formData
        });
        
        if (!response.ok) {
            throw new Error('LaTeX compilation failed. Please download the .tex file and compile it locally using Overleaf or your LaTeX editor.');
        }

        const blob = await response.blob();
        saveAs(blob, 'Siddharth_Samir_Khachane_Resume_new.pdf');
        showAlert('PDF downloaded successfully!', 'success');
    } catch (error) {
        showAlert(`${error.message}`, 'error');
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
        const { Document, Paragraph, TextRun, HeadingLevel, AlignmentType } = docx;

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
        const sectionEnd = i < sectionMatches.length - 1 ? sectionMatches[i + 1].index : latex.length;
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
                const parts = subheading.match(/\{([^}]+)\}/g).map(p => p.slice(1, -1));
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
