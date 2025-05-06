$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // <!-- emailjs to mail contact form data -->
    $("#contact-form").submit(function (event) {
        emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");

        emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });
    // <!-- emailjs to mail contact form data -->

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Jigar Sable";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });
    


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["frontend development", "backend development", "web designing", "android development", "web development"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->

async function fetchData(type = "skills") {
    let response
    type === "skills" ?
        response = await fetch("skills.json")
        :
        response = await fetch("./projects/projects.json")
    const data = await response.json();
    return data;
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    let projectHTML = "";
    projects.slice(0, 10).filter(project => project.category != "android").forEach(project => {
        projectHTML += `
        <div class="box tilt">
      <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>`
    });
    projectsContainer.innerHTML = projectHTML;

    // <!-- tilt js effect starts -->
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });
    // <!-- tilt js effect ends -->

    /* ===== SCROLL REVEAL ANIMATION ===== */
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    /* SCROLL PROJECTS */
    srtop.reveal('.work .box', { interval: 200 });

}

fetchData().then(data => {
    showSkills(data);
});

fetchData("projects").then(data => {
    showProjects(data);
});

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->


// pre loader start
// function loader() {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut() {
//     setInterval(loader, 500);
// }
// window.onload = fadeOut;
// pre loader end

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

// <!--Start of Tawk.to Script-->

var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6819f246138f991917bc8705/1iqilkp99';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();

// <!--End of Tawk.to Script-->



/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });



// <!-- terminal js starts -->
document.addEventListener("DOMContentLoaded", function () {
    const term = new Terminal({
        cursorBlink: true,
        theme: {
            background: '#000',
            foreground: '#fff',
        }
    });

    term.open(document.getElementById('terminal-container'));
    term.writeln("Welcome to my portfolio terminal!");
    term.writeln("Type 'help' for a list of commands.");
    term.write("> ");

    let input = "";
    let history = [];
    let historyIndex = -1;
    let currentPath = "/home/user";  // Simulated starting directory
    const fileSystem = {
        '/home/user': ['portfolio.html', 'projects.json', 'resume.pdf'],
        '/home/user/projects': ['project1.html', 'project2.html', 'taskManager.js'],
        '/home/user/docs': ['about.txt', 'guide.pdf'],
    };

    // Simulated file contents
    const fileContents = {
        '/home/user/portfolio.html': "<h1>Portfolio</h1><p>This is my portfolio website.</p>",
        '/home/user/projects/project1.html': "<h1>Project 1</h1><p>This is the first project.</p>",
        '/home/user/projects/project2.html': "<h1>Project 2</h1><p>This is the second project.</p>",
        '/home/user/projects/taskManager.js': "// Task Manager JavaScript code\nconsole.log('Task Manager App');",
        '/home/user/docs/about.txt': "This is the about section of the portfolio.",
        '/home/user/docs/guide.pdf': "PDF Guide (simulated content).",
    };

    term.onKey(({ key, domEvent }) => {
        const char = key;

        if (domEvent.key === "Enter") {
            handleCommand(input.trim());
            history.push(input.trim()); // Add command to history
            historyIndex = history.length; // Reset the history pointer
            input = "";
            term.write("\n> ");
        } else if (domEvent.key === "Backspace") {
            if (input.length > 0) {
                input = input.slice(0, -1);
                term.write('\b \b');
            }
        } else if (domEvent.key === "ArrowUp") {
            // Go up in history
            if (historyIndex > 0) {
                historyIndex--;
                input = history[historyIndex];
                term.write("\r> " + input); // Clear current input and show the history
            }
        } else if (domEvent.key === "ArrowDown") {
            // Go down in history
            if (historyIndex < history.length - 1) {
                historyIndex++;
                input = history[historyIndex];
                term.write("\r> " + input); // Clear current input and show the history
            } else if (historyIndex === history.length - 1) {
                input = "";
                term.write("\r> "); // Clear the input field
            }
        } else {
            input += char;
            term.write(char);
        }
    });

    function handleCommand(cmd) {
        const [command, ...args] = cmd.split(' ');

        switch (command) {
            case "help":
                term.writeln("Available commands:");
                term.writeln("help     - Show this help message");
                term.writeln("ls       - List files in the current directory");
                term.writeln("cd       - Change directories");
                term.writeln("clear    - Clear the terminal");
                term.writeln("exit     - Exit the terminal");
                term.writeln("touch    - Create a new file");
                term.writeln("cat      - View contents of a file");
                term.writeln("about    - Show info about this portfolio");
                term.writeln("projects - List some of my projects");
                break;

            case "ls":
                if (fileSystem[currentPath]) {
                    term.writeln(fileSystem[currentPath].join('\n'));
                } else {
                    term.writeln(`No files in directory: ${currentPath}`);
                }
                break;

            case "cd":
                if (args.length === 0) {
                    term.writeln("cd: missing operand");
                } else {
                    const newDir = args[0];
                    if (fileSystem[newDir]) {
                        currentPath = newDir;
                        term.writeln(`Changed directory to ${newDir}`);
                    } else {
                        term.writeln(`cd: ${newDir}: No such directory`);
                    }
                }
                break;

            case "touch":
                if (args.length === 0) {
                    term.writeln("touch: missing file name");
                } else {
                    const newFile = args[0];
                    if (!fileSystem[currentPath].includes(newFile)) {
                        fileSystem[currentPath].push(newFile);
                        term.writeln(`File ${newFile} created`);
                    } else {
                        term.writeln(`File ${newFile} already exists`);
                    }
                }
                break;

            case "cat":
                if (args.length === 0) {
                    term.writeln("cat: missing file name");
                } else {
                    const file = args[0];
                    const filePath = `${currentPath}/${file}`;
                    if (fileSystem[currentPath] && fileSystem[currentPath].includes(file)) {
                        const content = fileContents[filePath];
                        if (content) {
                            term.writeln(content);
                        } else {
                            term.writeln(`cat: ${file}: No content available`);
                        }
                    } else {
                        term.writeln(`cat: ${file}: No such file`);
                    }
                }
                break;

            case "about":
                term.writeln("I'm a web developer passionate about building cool projects.");
                break;

            case "projects":
                term.writeln("Here are some of my projects:");
                term.writeln("1. Portfolio Website - A personal portfolio to showcase my work.");
                term.writeln("2. Task Manager - A web app to manage tasks.");
                term.writeln("3. Chat App - A real-time chat application built with Node.js.");
                break;

            case "clear":
                term.clear();
                break;

            case "exit":
                term.writeln("Exiting terminal...");
                term.write("> ");
                break;

            default:
                if (cmd.startsWith("echo ")) {
                    term.writeln(cmd.slice(5));
                } else if (cmd) {
                    term.writeln(`Command not recognized: ${cmd}`);
                }
                break;
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const term = new Terminal({
        cursorBlink: true,
        theme: {
            background: '#000',
            foreground: '#fff',
        }
    });

    const fitAddon = new FitAddon.FitAddon(); // ✅ create fit addon
    term.loadAddon(fitAddon); // ✅ load addon
    term.open(document.getElementById('terminal-container')); // Open terminal
    fitAddon.fit(); // ✅ fit to container size

    window.addEventListener("resize", () => {
        fitAddon.fit(); // ✅ refit on window resize
    })
});

    // ... (your terminal logic remains the same)




// <!-- terminal js ends -->



 


