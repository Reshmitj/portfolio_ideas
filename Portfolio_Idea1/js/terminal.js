// terminal.js

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('user-input');
    const output = document.getElementById('terminal-output');

    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const command = input.value.trim().toLowerCase();
            handleCommand(command);
            input.value = '';
        }
    });

    function handleCommand(cmd) {
        switch (cmd) {
            case 'help':
                printOutput('Available commands: <br> about, skills, projects, contact');
                break;
            case 'about':
                printOutput('I am Reshmi, a Java Full Stack Developer with 6.6+ years of experience specializing in building scalable web and cloud applications.');
                break;
            case 'skills':
                printOutput(`
                    Java | Spring Boot | AWS | Azure | React.js | Angular | Docker | Kubernetes | MongoDB | SQL Server | Kafka
                `);
                break;
            case 'projects':
                printOutput('Loading Career Timeline...');
                loadTimeline();
                break;
            case 'contact':
                printOutput('Email: reshmi.tjr@gmail.com <br> GitHub: <a href="https://github.com/Reshmitj" target="_blank">GitHub/Reshmitj</a>');
                break;
            default:
                printOutput(`Command not found: ${cmd}. Type 'help' to see available commands.`);
        }
    }

    function printOutput(message) {
        const newLine = document.createElement('p');
        newLine.innerHTML = message;
        output.appendChild(newLine);
        output.scrollTop = output.scrollHeight;
    }

    function loadTimeline() {
        printOutput(`
            <ul>
                <li>2016: Started at Cognizant (Programmer Analyst)</li>
                <li>2019: Java Developer at DXC Technology</li>
                <li>2021: Software Engineer at OpenText</li>
                <li>2022: Senior Consultant at NTT Data</li>
                <li>2025: MS Computer Science, USA (Expected)</li>
            </ul>
        `);
    }
});
