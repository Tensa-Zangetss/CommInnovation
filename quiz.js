function submitQuiz() {
    const quizForm = document.getElementById("quizForm");
    const resultDiv = document.getElementById("result");
    
    // Stocker les réponses correctes
    const correctAnswers = {
        q1: "a", // ODD 1 : Pas de pauvreté
        q2: "a", // ODD 4 : Éducation de qualité
        q3: "a"  // ODD 8 : Travail décent et croissance économique
        // Ajoute les bonnes réponses pour les autres questions
    };
    
    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;
    
    // Vérifier les réponses
    for (let question in correctAnswers) {
        const selectedAnswer = quizForm.querySelector(`input[name="${question}"]:checked`);
        if (selectedAnswer) {
            const isCorrect = selectedAnswer.value === correctAnswers[question];
            
            // Changer la couleur des réponses
            const questionDiv = document.querySelector(`div.question:nth-of-type(${Object.keys(correctAnswers).indexOf(question) + 1})`);
            const labels = questionDiv.querySelectorAll('label');
            
            labels.forEach(label => {
                if (label.querySelector('input').value === correctAnswers[question]) {
                    label.classList.add('correct');
                } else {
                    label.classList.add('incorrect');
                }
            });
            
            if (isCorrect) {
                score++;
            }
        }
    }
    
    // Afficher le résultat
    resultDiv.innerHTML = `Vous avez obtenu ${score} sur ${totalQuestions} bonnes réponses.`;
}
