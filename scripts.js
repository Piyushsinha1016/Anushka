document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('proposalButton');

    button.addEventListener('click', () => {
        button.textContent = "Let’s goo 😭";
        button.style.backgroundColor = "#5A1E28";
        button.style.color = "#FFD700";
    });
});
