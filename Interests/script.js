function showDetail(interest) {
    const detailTitle = document.getElementById('detail-title');
    const detailDescription = document.getElementById('detail-description');
    const detailPopup = document.getElementById('detail');

    switch(interest) {
        case 'webDev':
            detailTitle.innerText = 'Web Development';
            detailDescription.innerText = 'I love exploring new frontend and backend technologies. Web development allows me to create dynamic and interactive websites.';
            break;
        case 'contentCreation':
            detailTitle.innerText = 'YouTube Content Creation';
            detailDescription.innerText = 'Creating engaging content for my YouTube channel is a passion. I enjoy sharing my editing skills, knowledge and connecting with my audience.';
            break;
        case 'fitness':
            detailTitle.innerText = 'Fitness and Exercise';
            detailDescription.innerText = 'I prioritize staying healthy through regular exercise and maintaining a balanced lifestyle. Fitness is a vital part of my routine.';
            break;
        case 'motorbikes':
            detailTitle.innerText = 'Motorbikes';
            detailDescription.innerText = 'I have a strong passion for motorcycles and dream of owning a Bullet bike one day. Riding gives me a sense of freedom.';
            break;
        case 'learning':
            detailTitle.innerText = 'Continuous Learning';
            detailDescription.innerText = 'I am always eager to learn new technologies and improve my skills, which keeps me motivated and inspired.';
            break;
    }

    detailPopup.style.display = 'block';
    detailDescription.style.fontSize = '20px';
    detailPopup.style.color = 'white';
    detailTitle.style.color = 'white';
}

function closeDetail() {
    const detailPopup = document.getElementById('detail');
    detailPopup.style.display = 'none';
}