console.log("hello wall");

const projectGrid = document.querySelector(".project-grid");
const projectCards = projectGrid.querySelectorAll("div");


projectCards.forEach(projectCard => {
    const interactionDiv = document.createElement("div");
    interactionDiv.classList.add("interactions");

    const favoriteIcon = document.createElement("img");
    const watchIcon = document.createElement("img");
    const shareIcon = document.createElement("img");

    const icons = [favoriteIcon, watchIcon, shareIcon];
    for (const icon of icons) {
        icon.classList.add("point");
    
    }
    favoriteIcon.src = "assets/heart.png";
    watchIcon.src = "assets/eye-plus-outline.png";
    shareIcon.src = "assets/link-plus.png";
    interactionDiv.appendChild(favoriteIcon);
    interactionDiv.appendChild(watchIcon);
    interactionDiv.appendChild(shareIcon);
    projectCard.appendChild(interactionDiv);
});
