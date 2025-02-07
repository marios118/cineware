const API_KEY = '27b03210f60dd6635c79091e34104dfc';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const config = {
  app_name: 'cineware app',
  app_version: '2.2',
  app_desc: 'Stream free movies online with no subscription required. Discover a wide selection of action, comedy, romance, horror, and more, all in HD. Enjoy ad-free, fast, and legal streaming on any device today!',
  site_name: 'CINEWARE',
  title_separator: '-',
  default_lang: 'en',
}

const lang = { 
   en: { 
     confirm: 'Confirm', 
     yes: 'Yes', 
     no: 'No', 
     cancel: 'Cancel', 
     save: 'Save', 
     delete: 'Delete', 
     loading: 'Loading. please wait...', 
     login: 'Login', 

     home: 'Home', 
     discover: 'Discover',
     movies: 'Movies', 
     series: 'Series', 
     popular: 'Popular', 
     all_categories: 'All Categories', 
     trending: 'Trending', 
     top_rated_movies: 'Top Rated Movies', 
     top_rated_shows: 'Top Rated Series', 
     watch: 'Watch', 
     banned_message: 'This movie has been banned from CINEWARE', 
     support_hotlines: 'If you are feeling like this, please know that help is available. You are not alone.',
     support_paragraph: 'You can reach out to a mental health professional or call a suicide prevention hotline. You can also talk to someone close to you. We care about you.',
     support_message: 'Here are some helplines you can contact for support:',
     support_header: 'We Are Here for You',
   }, 
   gr: { 
     confirm: 'Επιβεβαίωση', 
     yes: 'Ναι', 
     no: 'Οχι', 
     cancel: 'Ακύρωση', 
     save: 'Αποθήκευση', 
     delete: 'Διαγραφή', 
     loading: 'Loading. please wait...', 
     login: 'Συνδεση', 

     home: 'Αρχική Σελίδα', 
     movies: 'Ταινίες', 
     series: 'Σειρές', 
     popular: 'Δημοφιλές', 
     all_categories: 'Κατηγορίες', 
     trending: 'Τάσεις', 
     top_rated_movies: 'Κορυφαίες Ταινίες', 
     top_rated_shows: 'Κορυφαίες Σειρές', 
     watch: 'Παρακολούθησε', 
     banned_message: 'Αυτή η ταινία έχει απαγορευτεί από το CINEWARE', 
     support_hotlines: 'Αν νιώθετε έτσι, παρακαλούμε να γνωρίζετε ότι η βοήθεια είναι διαθέσιμη. Δεν είστε μόνοι.',
     support_paragraph: 'Μπορείτε να απευθυνθείτε σε έναν επαγγελματία ψυχικής υγείας ή να καλέσετε μια γραμμή βοήθειας για πρόληψη αυτοκτονιών. Μπορείτε επίσης να μιλήσετε με κάποιον κοντινό σας. Νοιαζόμαστε για εσάς.',
     support_message: 'Ακολουθούν κάποια τηλέφωνα βοήθειας που μπορείτε να καλέσετε για υποστήριξη:',
     support_header: 'Είμαστε Εδώ για Εσάς',
   }, 
   ru: { 
     confirm: 'Подтвердить', 
     yes: 'Да', 
     no: 'Нет', 
     cancel: 'Отмена', 
     save: 'Сохранить', 
     delete: 'Удалить', 
     loading: 'Загрузка, пожалуйста, подождите...', 
     login: 'Вход', 

     home: 'Главная', 
     movies: 'Фильмы', 
     series: 'Сериалы', 
     popular: 'Популярное', 
     all_categories: 'Категории', 
     trending: 'В тренде', 
     top_rated_movies: 'Лучшие фильмы', 
     top_rated_shows: 'Лучшие сериалы', 
     watch: 'Смотреть', 
     banned_message: 'Этот фильм был запрещен на CINEWARE', 
     support_hotlines: 'Если вы чувствуете себя так, пожалуйста, знайте, что помощь доступна. Вы не одиноки.',
     support_paragraph: 'Вы можете обратиться к специалисту по психическому здоровью или позвонить на горячую линию по предотвращению суицида. Вы также можете поговорить с кем-то из близких. Мы заботимся о вас.',
     support_message: 'Вот несколько горячих линий, которые вы можете связаться для поддержки:',
     support_header: 'Мы здесь для вас',
   }, 
   bg: { 
     confirm: 'Потвърждение', 
     yes: 'Да', 
     no: 'Не', 
     cancel: 'Отказ', 
     save: 'Запази', 
     delete: 'Изтрий', 
     loading: 'Зареждане, моля изчакайте...', 
     login: 'Вход', 

     home: 'Начало', 
     movies: 'Филми', 
     series: 'Сериали', 
     popular: 'Популярни', 
     all_categories: 'Категории', 
     trending: 'Тенденции', 
     top_rated_movies: 'Най-добри филми', 
     top_rated_shows: 'Най-добри сериали', 
     watch: 'Гледай', 
     banned_message: 'Този филм е забранен в CINEWARE', 
     support_hotlines: 'Ако се чувствате така, моля, знайте, че помощта е на разположение. Не сте сами.',
     support_paragraph: 'Можете да се свържете с психически здравен специалист или да се обадите на телефонна линия за предотвратяване на самоубийства. Можете също така да говорите с някого, който ви е близък. Ние се грижим за вас.',
     support_message: 'Ето някои телефонни линии, на които можете да се свържете за подкрепа:',
     support_header: 'Ние сме тук за вас',
   }, 
   ro: { 
     confirm: 'Confirmare', 
     yes: 'Da', 
     no: 'Nu', 
     cancel: 'Anulare', 
     save: 'Salvează', 
     delete: 'Șterge', 
     loading: 'Se încarcă, vă rugăm așteptați...', 
     login: 'Autentificare', 

     home: 'Acasă', 
     movies: 'Filme', 
     series: 'Seriale', 
     popular: 'Popular', 
     all_categories: 'Categorii', 
     trending: 'În trend', 
     top_rated_movies: 'Cele mai bune filme', 
     top_rated_shows: 'Cele mai bune seriale', 
     watch: 'Vizionați', 
     banned_message: 'Acest film a fost interzis pe CINEWARE', 
     support_hotlines: 'Dacă te simți așa, te rugăm să știi că ajutorul este disponibil. Nu ești singur.',
     support_paragraph: 'Poți să te adresezi unui specialist în sănătate mintală sau să suni la o linie de prevenire a sinuciderii. De asemenea, poți vorbi cu cineva apropiat. Ne pasă de tine.',
     support_message: 'Iată câteva linii de urgență la care poți apela pentru sprijin:',
     support_header: 'Suntem aici pentru tine',
   }, 
   de: { 
     confirm: 'Bestätigen', 
     yes: 'Ja', 
     no: 'Nein', 
     cancel: 'Abbrechen', 
     save: 'Speichern', 
     delete: 'Löschen', 
     loading: 'Wird geladen, bitte warten...', 
     login: 'Anmelden', 

     home: 'Startseite', 
     movies: 'Filme', 
     series: 'Serien', 
     popular: 'Beliebt', 
     all_categories: 'Kategorien', 
     trending: 'Trends', 
     top_rated_movies: 'Top-Filme', 
     top_rated_shows: 'Top-Serien', 
     watch: 'Ansehen', 
     banned_message: 'Dieser Film wurde bei CINEWARE verboten', 
     support_hotlines: 'Wenn du dich so fühlst, bitte wisse, dass Hilfe verfügbar ist. Du bist nicht allein.',
     support_paragraph: 'Du kannst einen Psychologen kontaktieren oder eine Suizidpräventions-Hotline anrufen. Du kannst auch mit jemandem sprechen, der dir nahe steht. Wir kümmern uns um dich.',
     support_message: 'Hier sind einige Hotlines, die du für Unterstützung kontaktieren kannst:',
     support_header: 'Wir sind für dich da',
   }, 
   fr: { 
     confirm: 'Confirmer', 
     yes: 'Oui', 
     no: 'Non', 
     cancel: 'Annuler', 
     save: 'Enregistrer', 
     delete: 'Supprimer', 
     loading: 'Chargement, veuillez patienter...', 
     login: 'Connexion', 

     home: 'Accueil', 
     movies: 'Films', 
     series: 'Séries', 
     popular: 'Populaire', 
     all_categories: 'Catégories', 
     trending: 'Tendances', 
     top_rated_movies: 'Meilleurs films', 
     top_rated_shows: 'Meilleures séries', 
     watch: 'Regarder', 
     banned_message: 'Ce film a été interdit sur CINEWARE', 
     support_hotlines: 'Si vous vous sentez ainsi, veuillez savoir que de l\'aide est disponible. Vous n\'êtes pas seul.',
     support_paragraph: 'Vous pouvez contacter un professionnel de la santé mentale ou appeler une ligne de prévention du suicide. Vous pouvez aussi parler à quelqu\'un de proche. Nous nous soucions de vous.',
     support_message: 'Voici quelques numéros d\'urgence que vous pouvez contacter pour obtenir du soutien :',
     support_header: 'Nous sommes là pour vous',
   }, 
   tr: { 
     confirm: 'Onayla', 
     yes: 'Evet', 
     no: 'Hayır', 
     cancel: 'İptal', 
     save: 'Kaydet', 
     delete: 'Sil', 
     loading: 'Yükleniyor, lütfen bekleyin...', 
     login: 'Giriş Yap', 

     home: 'Ana Sayfa', 
     movies: 'Filmler', 
     series: 'Diziler', 
     popular: 'Popüler', 
     all_categories: 'Kategoriler', 
     trending: 'Trendler', 
     top_rated_movies: 'En İyi Filmler', 
     top_rated_shows: 'En İyi Diziler', 
     watch: 'İzle', 
     banned_message: 'Bu film CINEWARE\'den yasaklanmıştır', 
     support_hotlines: 'Eğer böyle hissediyorsanız, lütfen bilin ki yardım mevcuttur. Yalnız değilsiniz.',
     support_paragraph: 'Bir ruh sağlığı profesyoneli ile iletişime geçebilir veya intihar öncesi bir telefon hattını arayabilirsiniz. Ayrıca size yakın biriyle konuşabilirsiniz. Biz sizin için buradayız.',
     support_message: 'İşte destek alabileceğiniz bazı telefon hatları:',
     support_header: 'Sizin İçin Buradayız',
   }, 
   es: { 
     confirm: 'Confirmar', 
     yes: 'Sí', 
     no: 'No', 
     cancel: 'Cancelar', 
     save: 'Guardar', 
     delete: 'Eliminar', 
     loading: 'Cargando, por favor espere...', 
     login: 'Iniciar sesión', 

     home: 'Inicio', 
     movies: 'Películas', 
     series: 'Series', 
     popular: 'Popular', 
     all_categories: 'Categorías', 
     trending: 'Tendencias', 
     top_rated_movies: 'Mejores películas', 
     top_rated_shows: 'Mejores series', 
     watch: 'Ver', 
     banned_message: 'Esta película ha sido prohibida en CINEWARE', 
     support_hotlines: 'Si te sientes así, por favor sabe que la ayuda está disponible. No estás solo.',
     support_paragraph: 'Puedes comunicarte con un profesional de la salud mental o llamar a una línea de prevención del suicidio. También puedes hablar con alguien cercano a ti. Nos importa tu bienestar.',
     support_message: 'Aquí hay algunas líneas de ayuda que puedes contactar para obtener apoyo:',
     support_header: 'Estamos Aquí Para Ti',
   }, 
    
   translate: (ln)=>{ 
     const translatable = document.querySelectorAll("#translatable"); 
     for (var i = 0; i < translatable.length; i++) { 
       const word = translatable[i].innerText.toLowerCase(); 
       const language = ln; 
       if(lang[language][word] !== undefined) 
         translatable[i].innerText = lang[language][word]; 
     }     
   } 
};


const app = {
  init: () => {
    app.title();
    
    var language = seo.getParameterByName('lang') || "";
    if(language == ""){
      language = config.default_lang;
      const url = new URL(window.location.href);
      url.searchParams.set('lang', language);
      window.history.replaceState({}, '', url.toString());      
    }
    
    app.components();
    app.dynamic_content();
    lang.translate(language);
    
  },
  title: () => {
    document.title = `${document.title} `;
  },
  seo: () => {
    seo.getMetaContent('name','description').content = config.app_desc;
  },
  dynamic_content: ()=>{
    const e=document.querySelectorAll("#dynamic");
    for (var i = 0; i < e.length; i++) {
      const dyn = e[i].innerText.trim();
      e[i].innerText = eval(dyn) || " ";
      e[i].style.display = "block";
    }
  },
  components: ()=>{
    const e=document.querySelectorAll("#component");
    for (var i = 0; i < e.length; i++) {
      const dyn = e[i].innerText.trim();
      e[i].innerHTML = eval(dyn) || " ";
      e[i].style.display = "block";
    }    
  }
};

const seo = {
  getMetaContent: (property, name) => {
    return document.head.querySelector("["+property+"="+name+"]");
  },
  getParameterByName: (name, url = window.location.href) => {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' +   name + '(=([^&#]*)|&|#|$)'),results = regex.exec(url);
    if (!results)
      return null;
    if (!results[2])
      return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));    
  }
}

document.addEventListener('DOMContentLoaded', function () {
    const lang = new URLSearchParams(window.location.search).get('lang') || 'en';
    const homeLink = document.querySelector('#translatable');
    
    homeLink.href = `index.html?lang=${lang}`;
});

const components = {

  search: `
    <div class="navbar">
      <div class="navbar-container">
        <div class="menu-search">
          <input type="text" id="search" placeholder="What are we watchin' today" autocomplete="off">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>    
    `,
  mobile_navbar: `
    <nav class="mobile-navbar">

    <a href="index.html" class="nav_link" style="background-color: #ad241b;">
    <i class="fa-solid fa-compass"></i>
    <span class="nav_text">Discover</span>
</a>


      <a href="#" class="nav_link" onclick="document.querySelector('#search-modal').style.display='block';">
        <i class="fa-solid fa-magnifying-glass"></i>
        <span class="nav_text">Search</span>
      </a>

      <a href="#" class="nav_link" id="change-language-modal_btn">
        <i class="fa-solid fa-globe"></i>
        <span class="nav_text">Languages</span>
      </a>
    </nav>  
  `,

  mobile2_navbar: `
    <nav class="mobile-navbar">

    <a href="index.html" class="nav_link">
    <i class="fa-solid fa-compass"></i>
    <span class="nav_text">Discover</span>
</a>

      <a href="#" class="nav_link" id="change-language-modal_btn">
        <i class="fa-solid fa-globe"></i>
        <span class="nav_text">Languages</span>
      </a>
    </nav>  
  `,

  watchingsidebar: `
<div class="sidebar">
  <div class="logo-container">
    <h1 class="logo" id="dynamic">config.site_name</h1>
  </div>
  <div class="menu-items">
  </div>  
  <div class="bottom-divider">
    <hr />
    <a href="https://watch.cineware.xyz">
    <span class="sidebarbtn">
      <i class="fa-solid fa-arrow-left"></i>
      <p>Exit</p>
    </span>
    </a>
  </div>
</div>
<div class="vertical-divider"></div>
  `,

  footer: `
<footer class="footer">
    <div class="footer-container">
        <!-- Copyright -->
        <div class="footer-left">
            <p>© 2024-2025, RYVE Entertainment Group LLC. All rights reserved. CINEWARE and its logo are RYVE's trademarks or registered trademarks in Greece and elsewhere.</p>
        </div>
       <div class="footer-links">
            <a href="report.html">Report</a>
            <a href="terms">Terms of Service</a>
            <a href="usage.html">Usage Policy</a>
           <a href="privacy.html">Privacy Policy</a>
        </div>
        <div class="footer-right">
        
            <div class="logo-container">
                <img src="./assets/img/CinewareFULLTEXT.svg" alt="Cineware Group" class="logo">
                <span class="separator">|</span>
                <img src="./assets/img/RYVEENTGROUPLLCFULLTEXT.png" alt="RYVE Entertainment Group LLC." class="ryve">
                 <span class="separator">|</span>
                <a href="https://www.dmca.com/r/4jmm7gz" title="DMCA.com Protection Status" class="dmcalogo"> <img src ="https://images.dmca.com/Badges/dmca_protected_14_120.png?ID=90d75f56-87a4-44de-9e5c-99ed4326aaed"  alt="DMCA.com Protection Status" /></a>  <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script>
            </div>
        </div>

    </div>
</footer>

  `,

  popups: {
    language: 
    `
      <div class="popup" id="change-language-modal" style="display:none;">
        <div class="overlay"></div>
        <div class="popup-content">
          <h2>Currently Available Languages</h2>
          <ul>
            <li><a href="index.html?lang=en">English</a></li>
            <li><a href="index.html?lang=gr">Ελληνικά</a></li>
            <li><a href="index.html?lang=fr">Français</a></li>
            <li><a href="index.html?lang=es">Español</a></li>
            <li><a href="index.html?lang=tr">Türkçe</a></li>
            <li><a href="index.html?lang=de">Deutsch</a></li>
            <li><a href="index.html?lang=ro">Română</a></li>
            <li><a href="index.html?lang=bg">Български</a></li>
            <li><a href="index.html?lang=ru">Русский</a></li>
          </ul>
        </div>
      </div>      
    `,

   updatelog:
   `
<div class="popup" id="updatelog-modal" style="display:none;">
  <div class="overlay"></div>
  <div class="popup-content">
    <h2>Change Log</h2>
    <ul>
      <p>Added more categories</li>
      <p>Banned more movies</li>
      <li><a href="#" id="close-popup">Close</a></li>
    </ul>
  </div>
</div>
   `,

    login:
    `
      <div class="popup" id="login-modal" style="display:none;">
        <div class="overlay"></div>
        <div class="popup-content">
          <h2><i class="fa-solid fa-users"></i> Signup</h2>
          <form id="login-form" class="auth-form" autocomplete="off">
            <div class="input">
              <label for="username">Username</label>
              <input type="text" name="username" id="username">
            </div>
            <div class="input">
              <label for="email">Email</label>
              <input type="text" name="email" id="email">
            </div>
            <div class="input">
              <label for="password">Password</label>
              <input type="password" name="password" id="password">
            </div>
            <div class="input">
              <label for="password_2">Password</label>
              <input type="password" name="password_2" id="password_2">
            </div>
            <button type="submit">
              Signup
            </button>
          </form>
        </div>
      </div>    
    `,
    mobilesearch: 
    `
      <div class="popup" id="search-modal" style="display: none;">
        <div class="overlay"></div>
        <div class="popup-content">
          <h2>
            Search
          </h2>
          <div class="mobilemenu-search {">
            <input type="text" id="search_mobile" placeholder="What are we watchin' today" autocomplete="off">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>    
    `,    
  }
}

function waitForChild(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

function preg_match(regex, str) {
  if (new RegExp(regex).test(str)){
    return regex.exec(str);
  }
  return false;
}

function ucfirst(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

waitForChild('#search').then(() => {
    document.getElementById('search').addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSearch();
        }
    });   
});

waitForChild('#change-language-modal_btn').then(() => {
  const buttons = document.querySelectorAll("#change-language-modal_btn");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", ()=>{
      document.querySelector("#change-language-modal").style.display = "block"; 
    });
  } 
});

waitForChild("img").then(() => {
  const imgs = document.querySelectorAll("img");
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("contextmenu", (e)=>{
      e.preventDefault();
    });
  }
});

waitForChild('#profile-modal_btn').then(() => {
  document.querySelector("#profile-modal_btn").addEventListener("click", ()=>{
    document.querySelector("#login-modal").style.display = "block";
  });
});



waitForChild('.overlay').then(() => {
  document.querySelectorAll(".overlay").forEach(overlay => {
    overlay.addEventListener("click", ()=>{
      document.querySelectorAll(".popup").forEach(popup => {
        popup.style.display = "none";
      });
    });		
  });  
});

document.addEventListener("load", app.init());