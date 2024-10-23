<script>
    // Career Roadmap Functionality
    function displayCareerRoadmap() {
        const career = document.getElementById('career-choice').value;
        let roadmap = '';

        switch (career) {
            case 'doctor':
                roadmap = 'To become a Doctor: Focus on biology and chemistry. Attend medical school, complete residency, and get licensed.';
                break;
            case 'engineer':
                roadmap = 'To become an Engineer: Strengthen your math and physics skills. Pursue an engineering degree and get certifications.';
                break;
            case 'teacher':
                roadmap = 'To become a Teacher: Get a degree in education or the subject you want to teach. Complete teaching certification and gain experience.';
                break;
            // Add more cases for other careers
            default:
                roadmap = 'Please select a valid career to get a roadmap.';
        }

        document.getElementById('career-roadmap').innerHTML = `<p>${roadmap}</p>`;
    }

    // Goal Progress Tracker Functionality
    function updateProgress() {
        const goal = document.getElementById('goal-input').value;
        const progress = document.getElementById('progress-input').value;
        let progressFeedback = '';

        if (progress <= 20) {
            progressFeedback = 'You are just starting out, but stay motivated and continue working on small goals.';
        } else if (progress <= 50) {
            progressFeedback = 'You are halfway there! Keep pushing, you are making great progress.';
        } else if (progress <= 80) {
            progressFeedback = 'You are nearing your goal. Stay focused and refine your skills further!';
        } else if (progress === 100) {
            progressFeedback = 'Congratulations! You have achieved your goal! Consider setting new ones to keep growing.';
        } else {
            progressFeedback = 'Please enter a progress percentage between 0 and 100.';
        }

        document.getElementById('progress-tracker').innerHTML = `<p><strong>Goal:</strong> ${goal}</p><p>${progressFeedback}</p>`;
    }

    // Resume Builder Functionality
    function buildResume() {
        const name = document.getElementById('resume-name').value;
        const email = document.getElementById('resume-email').value;
        const experience = document.getElementById('resume-experience').value;

        if (name && email && experience) {
            document.getElementById('resume-output').innerHTML = `
                <h3>Your Resume</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Experience:</strong> ${experience}</p>
            `;
        } else {
            alert("Please fill in all fields to generate your resume.");
        }
    }

    // Skills Assessment Feedback Functionality
    function submitAssessment() {
        const skillLevel = document.getElementById('skill-level').value;
        let feedback = '';

        switch (skillLevel) {
            case 'beginner':
                feedback = 'You are at the beginning of your journey. Focus on learning the fundamentals.';
                break;
            case 'intermediate':
                feedback = 'You have a good foundation! Keep building your skills and take on new challenges.';
                break;
            case 'advanced':
                feedback = 'You are well on your way to becoming an expert! Keep pushing your limits.';
                break;
            default:
                feedback = 'Please select a skill level to get feedback.';
        }

        document.getElementById('assessment-result').innerHTML = `<p><strong>Feedback:</strong> ${feedback}</p>`;
    }

    // Chatbot (Brono) Functionality
    function sendMessage() {
        const userMessage = document.getElementById('user-input').value;
        const chatLog = document.getElementById('chat-log');

        if (userMessage) {
            chatLog.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
            document.getElementById('user-input').value = ''; // Clear input field

            // Simulate Brono response
            setTimeout(() => {
                const bronoResponse = getBronoResponse(userMessage);
                chatLog.innerHTML += `<p><strong>Brono:</strong> ${bronoResponse}</p>`;
                chatLog.scrollTop = chatLog.scrollHeight; // Auto-scroll to the bottom
            }, 1000);
        }
    }

    function getBronoResponse(message) {
        const responses = {
            "hi": "Hello! How can I assist you with your career goals today?",
            "how can i improve my grades?": "To improve your grades, focus on consistent study habits, eliminate distractions, and don’t hesitate to ask for help when needed. Try breaking your study sessions into manageable chunks.",
            "help me focus": "To stay focused, set clear goals, create a distraction-free environment, and take regular breaks to stay refreshed. Time management is key.",
            "what's the best way to study?": "The best way to study is to use active recall and spaced repetition. Engage with the material by asking questions, teaching others, and practicing consistently.",
            "how do i choose a career?": "Choosing a career involves understanding your strengths, interests, and values. Take some time to reflect on what excites you and aligns with your long-term goals.",
            "thank you": "You're welcome! I'm always here to help you on your journey.",
            "who are you?": "I’m Brono, your virtual career guide. I'm here to assist you with any questions you have, whether it’s about your studies, career path, or personal development."
        };

        // Return a default response if the user's message doesn't match predefined ones
        return responses[message.toLowerCase()] || "I'm here to help! Feel free to ask any questions about your career, studies, or motivation.";
    }

    // Dynamic content for institutions in Mthatha
    function displayInstitutions() {
        const institutions = [
            { name: 'Walter Sisulu University', link: 'https://www.wsu.ac.za/' },
            { name: 'Mthatha College of Education', link: '#' },
            { name: 'King Sabata Dalindyebo TVET College', link: 'https://www.ksdcollege.edu.za/' },
            // Add more institutions here
        ];

        const institutionsList = document.getElementById('institutions-list');
        institutionsList.innerHTML = '';

        institutions.forEach(inst => {
            institutionsList.innerHTML += `<li><a href="${inst.link}" target="_blank">${inst.name}</a></li>`;
        });
    }

    // Initialize institution links on page load
    document.addEventListener("DOMContentLoaded", function () {
        displayInstitutions();
    });
</script>

