document.addEventListener("DOMContentLoaded", () => {
    const degreeTitles = document.querySelectorAll('.degTitle');
    const degreeNameList = document.getElementById('degname');
    const clickInstruction = document.getElementById('clickInstruction');
    const messageContainer = document.createElement('div'); // Create a container for messages
    messageContainer.id = 'messageContainer'; // Set an ID for the message container
    degreeNameList.appendChild(messageContainer); // Append the message container to the degree name list
    

    const messages = {
        master: "<b><u>(: Postgraduation :)</u></b><br><br>I Have Done Master's Degree In<br>Computer Application <b>(MCA)</b> From<br><b>Teerthankar Mahaveer University</b> (TMU)<br>Session: 2022 - 2024<br>City: Moradabad<br>State: UttarPradesh <br>Website: https://www.tmu.ac.in/tmu/contact-us <br><br><b>Grade : 8.5 CGPA</b>",
        bachelor: "<b><u>(: Undergraduation :)</u></b><br><br> My Bachelor's <b>(B.Com)</b> degree is from<br><b>Chandradhari Mithila College</b><br>Lalit Narayan Mithila University (LNMU)<br>Session: 2018 - 2021<br>City: Darbhanga<br>State: Bihar <br>Website:https://www.cmclnmu.ac.in/<br><br><b>Grade : 77%</b>",
        inter: "<b><u>(: Intermediate :)</u></b><br><br> I have done my Intermediate Degree in <b>I.Com</b><br>completed from <b>Marwari College</b><br>Lalit Narayan Mithila University (LNMU) <br>Session: 2016 - 2018<br>City: Darbhanga<br>State: Bihar <br>Website:https://marwaricollege.ac.in/ <br><br><b>Grade : 72%</b>",
        metric: "<b><u>(: Metriculation :)</u></b><br><br>  Grabbed my 10th degree from <br><b>Don Bosco School</b><br>Session: 2014 - 2016<br>City: Darbhanga<br>State: Bihar <br>Website:<br>https://www.facebook.com/donboscoschoolofficial/ <br><br><b>Grade : 8 CGPA</b>  "
    };

    // Show specific message when a degree title is clicked
    degreeTitles.forEach(title => {
        title.addEventListener('click', () => {
            const degreeId = title.id;
            const message = messages[degreeId] || "Please select a degree to learn more.";
            messageContainer.innerHTML = `<p>${message}</p>`;
            clickInstruction.style.display = 'none';

        });
    });

    // Style the message container (optional)
    messageContainer.style.marginTop = '-40px'; // Space above the message
    messageContainer.style.fontSize = '20px';
    messageContainer.style.fontWeight = '550';
    messageContainer.style.marginLeft = '-320px';
    messageContainer.style.color = 'black';
    messageContainer.style.paddingTop = '10px';
    messageContainer.style.cursor = 'not-allowed';
    messageContainer.style.userSelect = 'none';

});
