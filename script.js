const body = document.body;

const navLinks = document.querySelectorAll('.nav-link');
const mainTitle = document.getElementById('main-title');
const mainText = document.getElementById('main-text');

function animateTitleChange(newTitle) {
  mainTitle.classList.remove('show');
  setTimeout(() => {
    mainTitle.textContent = newTitle;
    mainTitle.classList.add('show');
  }, 300);
}

function animateTextChange(newHtml) {
  mainText.classList.remove('show');
  setTimeout(() => {
    mainText.innerHTML = newHtml;
    mainText.classList.add('show');
  }, 300);
}

function setActive(id) {
  navLinks.forEach(link => link.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

document.getElementById('nav-home').addEventListener('click', (e) => {
  e.preventDefault();
  setActive('nav-home');
  animateTitleChange('NuviraMC');
  animateTextChange('Willkommen auf der Offiziellen Website von NuviraMC. <br><br>Möchtest du ein Teil von uns werden?<br>Bewerbe dich <a style="color: var(--primary); font-weight: bold;">JETZT</a> auf unserem Discord, wir freuen uns auf dich!<br><br><br><a style="font-size: larger; color: var(--primary);">NuviraMC.net beitreten</a><br>IP: <a style="color: var(--primary);">NuviraMC.net</a> - IP für Java & Bedrock<br>Port: (Bedrock) <a style="color: var(--primary); font-weight: bold;">19132</a> | (Java) <a style="color: var(--primary); font-weight: bold;">25565</a>');
});

document.getElementById('nav-about').addEventListener('click', (e) => {
  e.preventDefault();
  setActive('nav-about');
  animateTitleChange('Über uns');
  animateTextChange('NuviraMC ist ein innovatives Minecraft-Netzwerk mit Fokus auf Qualität, Community und Sicherheit. Wir bieten einzigartige Spielerlebnisse und eine starke Gemeinschaft.<br><br>Unser Team besteht aus erfahrenen Entwicklern und engagierten Moderatoren, die stets bestrebt sind, das Spielerlebnis zu verbessern. Wir legen großen Wert auf Transparenz und Kommunikation mit unserer Community.<br><br>Besuche uns auf Discord, um mehr zu erfahren und Teil unserer wachsenden Gemeinschaft zu werden!');
});

document.getElementById('nav-contact').addEventListener('click', (e) => {
  e.preventDefault();
  setActive('nav-contact');
  animateTitleChange('Kontakt');
  animateTextChange('Du möchtest mit dem Server-Gründer von NuiraMC schreiben? Schreibe an <a href="mailto:devlarrox@gmail.com" style="color:var(--primary);">devlarrox@gmail.com</a> eine E-Mail oder besuche unseren Discord!');
});

document.getElementById('footer-impressum').addEventListener('click', (e) => {
  e.preventDefault();
  setActive('footer-impressum');
  animateTitleChange('Impressum');
  animateTextChange(
    'Sternwartenstraße 25' + '<br>' +
    ' 04103, Leipzig<br><br>' +
    'Vertreten durch: Hinnerk - Ole Kagel<br>' +
    'Kontakt: <a href="mailto:devlarrox@gmail.com" style="color:var(--primary);">devlarrox@gmail.com</a><br><br>' +
    '<span style="color:red; user-select:none;">/!\\ The address provided is published in accordance with German Telemedia Act (§ 5 TMG) requirements. ' +
    'Please note that unsolicited personal visits to this address are not permitted without prior arrangement. ' +
    'Visitors without an appointment may be asked to leave immediately. Continued presence without consent may constitute trespassing under § 123 StGB (Hausfriedensbruch) and could lead to legal action. ' +
    'Please use email for all inquiries.</span>'
  );
});


document.getElementById('footer-datenschutz').addEventListener('click', (e) => {
  e.preventDefault();
  animateTitleChange('Datenschutz');
  animateTextChange('Keiner Ihrer Daten wird gespeichert. Wir verwenden keine Cookies oder Tracking-Technologien.');
  setActive('footer-datenschutz');
});

mainTitle.classList.add('fade-title', 'show');
mainText.classList.add('fade', 'show');