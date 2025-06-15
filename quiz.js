document.addEventListener('DOMContentLoaded', () => {
    function checkAnswer() {
        const correctAnswer = "4";

        const selectedRadio = document.querySelector('input[name="quiz"]:checked');

        let userAnswer = null;

        if (selectedRadio) {
            userAnswer = selectedRadio.value;
        }

        const feedbackElement = document.getElementById('feedback');

        if (userAnswer === null) {
            feedbackElement.textContent = "Please select an answer!";
            feedbackElement.style.color = "orange";
        } else if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = "red";
        }
    }

    const submitButton = document.getElementById('submit-answer');

    submitButton.addEventListener('click', checkAnswer);
});
