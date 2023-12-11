document.addEventListener('DOMContentLoaded', function() {
    var hoverPanel = document.getElementById('hover-panel');
    var expandableBox = document.getElementById('expandable-box');
    var arrowIndicator = document.getElementById('arrow-indicator');

    hoverPanel.addEventListener('mouseover', function() {
        expandableBox.style.right = '0'; // Expand the box
        expandableBox.classList.add('expanded');
    });

    expandableBox.addEventListener('mouseleave', function() {
        expandableBox.style.right = '-200px'; // Collapse the box
        expandableBox.classList.remove('expanded');
    });

    var totalHeight = document.querySelector('.pagination-container').offsetHeight;
    var pages = document.querySelectorAll('.page');
    var timeline = document.getElementById('timeline');

    pages.forEach(function(page, index) {
        var pagePosition = page.offsetTop;
        var notchPosition = (pagePosition / totalHeight) * 100;

        var notchLink = document.createElement('a');
        notchLink.href = '#';
        notchLink.style.position = 'absolute';
        notchLink.style.left = '-15px';
        notchLink.style.width = '10px';
        notchLink.style.height = '2px';
        notchLink.style.backgroundColor = 'black';
        notchLink.style.top = notchPosition + '%';

        notchLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: pagePosition - 50,
                behavior: 'smooth'
            });
        });

        var notchLabel = document.createElement('span');
        notchLabel.innerText = 'P' + (index + 1);
        notchLabel.style.position = 'absolute';
        notchLabel.style.left = '-35px';
        notchLabel.style.top = notchPosition + '%';
        notchLabel.style.color = 'black';
        notchLabel.style.fontSize = '12px';

        timeline.appendChild(notchLink);
        timeline.appendChild(notchLabel);

        // Add random dates between pages
        var randomDate = document.createElement('div');
        randomDate.innerText = 'Date ' + (index + 1); // Example Date Text
        randomDate.style.position = 'absolute';
        randomDate.style.left = '-100px'; // Adjust as needed
        randomDate.style.top = (notchPosition + Math.random() * 5) + '%'; // Randomize position slightly
        randomDate.style.color = '#782f40'; // Set color
        randomDate.style.fontSize = '12px';

        timeline.appendChild(randomDate);
    });
});
