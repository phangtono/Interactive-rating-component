document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const starRating = urlParams.get('star');

    const thankyouScore = document.querySelector('.thankyou__score');

    if (starRating !== null) {
        thankyouScore.textContent = `You selected ${starRating} out of 5`;
    } else {
        thankyouScore.textContent = 'No star rating selected';
    }
});
