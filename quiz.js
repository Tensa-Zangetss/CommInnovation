function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const menuToggle = document.getElementById("menu-toggle");

    sidebar.classList.toggle("open");
    sidebar.classList.toggle("closed");

    menuToggle.classList.toggle("open");
}

document.getElementById("menu-toggle").addEventListener("click", toggleSidebar);

function submitQuiz() {
    const correctAnswers = {
        q1: 'c', q2: 'a', q3: 'c', q4: 'b', q5: 'c',
        q6: 'a', q7: 'a', q8: 'b', q9: 'a', q10: 'a',
        q11: 'a', q12: 'a', q13: 'a', q14: 'a', q15: 'a'
    };

    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;

    document.querySelectorAll("label").forEach(label => {
        label.style.color = ""; 
    });

    for (let question in correctAnswers) {
        let selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        let correctOption = document.querySelector(`input[name="${question}"][value="${correctAnswers[question]}"]`);

        if (selectedOption) {
            if (selectedOption.value === correctAnswers[question]) {
                score++;
                selectedOption.parentElement.style.color = "green"; 
            } else {
                selectedOption.parentElement.style.color = "red"; 
            }
        }

        if (correctOption) {
            correctOption.parentElement.style.color = "green";
        }
    }

    let resultText = `Vous avez obtenu ${score} sur ${totalQuestions} ! `;
    if (score === totalQuestions) {
        resultText += "Félicitations, vous avez tout juste ! 🎉";
    } else if (score >= totalQuestions * 0.7) {
        resultText += "Très bien joué ! 👏";
    } else {
        resultText += "Continuez à réviser, vous pouvez le faire ! 💪";
    }

    document.getElementById("result").innerText = resultText;
}
