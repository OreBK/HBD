document.getElementById('surprise-button').addEventListener('click', function() {
    const surpriseDiv = document.getElementById('surprise');
    surpriseDiv.classList.remove('hidden');
    
    // Show the cake after a delay
    setTimeout(() => {
        const cakeImage = document.querySelector('.cake');
        cakeImage.style.display = 'block';
    }, 1000);
});