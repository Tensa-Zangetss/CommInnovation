// Fichier quiz.js
document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("quizForm");
    const submitButton = document.getElementById("submitQuiz");
    const resultContainer = document.getElementById("quizResult");
    const scoreElement = document.getElementById("score");

    submitButton.addEventListener("click", function (event) {
        event.preventDefault();  // Empêche le rechargement de la page
        
        let score = 0;

        // Vérifier les réponses à la première question
        if (document.getElementById("question1a").checked) {
            score += 1;  // Réponse correcte
        }

        // Vérifier les réponses à la deuxième question
        if (document.getElementById("question2a").checked && document.getElementById("question2b").checked) {
            score += 1;  // Réponse correcte
        }

        // Vérifier les réponses à la troisième question
        if (document.getElementById("question3a").checked) {
            score += 1;  // Réponse correcte
        }

        // Vérifier les réponses à la quatrième question
        if (document.getElementById("question4a").checked) {
            score += 1;  // Réponse correcte
        }

        // Afficher les résultats
        resultContainer.style.display = "block";
        scoreElement.textContent = `Votre score est : ${score} sur 4`;
    });
});
