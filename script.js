document.addEventListener('DOMContentLoaded', () => {
    const pageLoader = document.getElementById('page-loader');

    // 1. Pangilia index za herufi kwa ajili ya bounce animation
    const letters = document.querySelectorAll('.loader-text span:not(.space)');
    letters.forEach((letter, index) => {
        letter.style.setProperty('--i', index);
    });

    // 2. Chagua Link zote za kwenye Navbar au Button maalum
    const navLinks = document.querySelectorAll('nav a, .nav-menu a, .hero-buttons a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const destination = this.getAttribute('href');
            
            // Pata jina la ukurasa wa sasa
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';

            // Zuia ikiwa mtu anabofya link ya ukurasa ule ule aliopo tayari (mfano yuko Home kisha anabofya tena Home)
            if (destination === currentPage || destination === './' + currentPage) {
                return; // Usifanye kitu wala usionyeshe loader
            }

            // Hakikisha siyo link ya mtandao wa nje, target="_blank", au # tupu
            if (
                destination && 
                !destination.startsWith('#') && 
                destination !== '' && 
                this.getAttribute('target') !== '_blank'
            ) {
                e.preventDefault(); // Zuia kufunguka mara moja

                // Onyesha loader mara moja tu
                if (pageLoader) {
                    pageLoader.classList.add('active');
                }

                // Fungua ukurasa mpya baada ya sekunde 1.2
                setTimeout(() => {
                    window.location.href = destination;
                }, 1200);
            }
        });
    });
});

// 3. Ondoa loader mara tu ukurasa mpya unapoomaliza kupakia (Page Load Complete)
window.addEventListener('load', () => {
    const pageLoader = document.getElementById('page-loader');
    if (pageLoader) {
        setTimeout(() => {
            pageLoader.classList.remove('active');
        }, 800); // Subiri sekunde 0.8 ili animation iishe vizuri kisha iondoke
    }
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// DATABASE YA LUGHA (DICTIONARY)
const langDatabase = {
    en: {
        top_welcome: "WELCOME & JOIN US",
        btn_search: "search",
        search_placeholder: "type here",
        nav_home: "Home",
        nav_events: "Events",
        nav_about: "About us",
        nav_contact: "Contact us",
        hero_tag: "CHURCH LOVE. FAITH LOVE",
        hero_title: "Welcome To <br> Our Church",
        hero_verse: "Matthew 6:13 And lead us not into temptation, but deliver us from evil: For thine is the kingdom, and the power, and the glory, for ever. Amen.",
        btn_read: "Read",
        live_title: "Join the sunday live stream",
        live_time: "Every Sunday at 06:30AM - 09:30AM",
        btn_join: "Join Now",
        btn_videos: "Videos",
        services_subtitle: "OUR SERVICES",
        services_title: "We Love Serving Our Local Community",
        services_desc: "We are dedicated to making a positive impact right here in our neighborhood. Through our various programs, ministries, and community outreach initiatives, we strive to support families, uplift individuals, and bring people closer together.",
        btn_learn_more: "Learn More",
        srv_1_title: "Weekly Services",
        srv_1_desc: "Join us every week for inspiring fellowship and worship.",
        srv_2_title: "Youth",
        srv_2_desc: "Empowering the next generation to lead with faith and purpose.",
        srv_3_title: "Kids",
        srv_3_desc: "A fun, safe, and creative space for children to grow.",
        srv_4_title: "Special Events",
        srv_4_desc: "Exciting community gatherings and seasonal celebrations.",
        srv_5_title: "Counseling",
        srv_5_desc: "Professional guidance and supportive listening ears when you need it.",
        srv_6_title: "Benevolence",
        srv_6_desc: "Providing care and essential relief to families in need.",
        ft_quick_links: "Quick links",
        ft_products: "products",
        ft_donate: "Donate",
        ft_social: "Social links",
        evt_hero_tag: "WHAT'S UP NEXT",
        evt_hero_title: "Welcome <br> Partner With Us",
        evt_hero_desc: "Welcome to the official website of ELCT Shia Sub-Parish. Join us in worship, teachings, and taking care of the Lord's work.",
        btn_worship_schedule: "Worship Schedule",
        btn_give_offering: "Give Offering",

        // About Us Hero Section
        abt_hero_tag: "WHO WE ARE",
        abt_hero_title: "About Our Church &<br> Our Ministry",
        abt_hero_verse: "Psalms 133:1 Behold, how good and how pleasant it is for brethren to dwell together in unity!",
        btn_read_more: "Read More",

        // Contact Hero Section (MPYA)
        cnt_hero_tag: "GET IN TOUCH",
        cnt_hero_title: "Welcome <br>Contact Us",
        cnt_hero_desc: "Do you have a question, feedback, Or need prayer support? <br>We are happy to hear from you. Get in touch with us today.",
        
        // Contact Info Box
        info_box_title: "Contact Information",
        info_box_desc: "Welcome to our office for discussions or spiritual counseling. You can also call us or send us an email at any time.",
        loc_title: "Our Location",
        loc_detail: "ELCT Shia Sub-Parish, Kameti, Tanzania",
        phone_title: "Phone",
        email_title: "Email Address",

        // Contact Form
        form_title: "Send Us a Message",
        lbl_name: "Full Name",
        ph_name: "Enter your name",
        lbl_email: "Email Address",
        ph_email: "Enter your email",
        lbl_subject: "Subject / Concern",
        ph_subject: "E.g. Prayer Request, Counseling, Thanksgiving",
        lbl_message: "Your Message",
        ph_message: "Write your message here...",
        btn_send: "Send Message",

        // Worship Schedules
        sch_subtitle: "OUR SCHEDULES",
        sch_title: "Worship Schedules",
        sch_desc: "Join us throughout the week for worship, studying the Word of God, and praying together.",
        
        sch_1_title: "Main Sunday Service",
        sch_1_time: "6:30 AM - 9:30 AM",
        sch_1_desc: "Praise, worship, and the Word of God.",
        
        sch_2_title: "MORNING GLORY",
        sch_2_time: "Every Monday: 6:00 AM",
        sch_2_desc: "In-depth Bible study and Prayers.",
        
        sch_3_title: "EVENING GLORY",
        sch_3_time: "Every Tuesday: 4:00 PM",
        sch_3_desc: "In-depth Bible study and Prayers.",
        
        sch_4_title: "EVENING GLORY",
        sch_4_time: "Every Wednesday: 4:00 PM",
        sch_4_desc: "In-depth Bible study and Prayers.",
        
        sch_5_title: "EVENING GLORY",
        sch_5_time: "Every Thursday: 4:00 PM",
        sch_5_desc: "In-depth Bible study and Prayers.",
        
        sch_6_title: "MORNING GLORY",
        sch_6_time: "Every Friday: 6:00 AM",
        sch_6_desc: "In-depth Bible study and Prayers.",

        // Events
        evt_section_title: "Upcoming Events",
        evt_section_subtitle: "We cordially invite you to join us in these important events",
        evt_1_month: "DECEMBER",
        evt_1_title: "Family Seminar",
        evt_1_loc: "Kameti lutheran Church",
        evt_1_desc: "A special seminar aimed at building spiritually and socially strong families.",
        
        evt_2_month: "NOVEMBER",
        evt_2_title: "Fundraiser for Musical Instruments",
        evt_2_loc: "Kameti lutheran Church",
        evt_2_desc: "Contributing towards phase two of purchasing musical instruments.",

        // News & Announcements
        news_section_title: "News & Announcements",
        news_section_subtitle: "Read articles, teachings, and the latest updates",
        news_1_cat: "Announcements",
        news_1_title: "Social Service Report for This Month",
        news_1_desc: "Our Church successfully visited and assisted two orphanages...",
        news_2_cat: "Articles",
        news_2_title: "The Power of Unity in Ministry",
        news_2_desc: "An article explaining how the Church can grow through unity...",
        btn_read_more: "Read more",

        // Leadership
        lead_subtitle: "OUR LEADERSHIP",
        lead_title: "Kameti Leaders",
        lead_desc: "Get to know the leaders who oversee our ministry and lead the church toward achieving its vision and various ministries.",
        leader_1_role: "Parish Pastor",
        leader_2_role: "Associate Pastor",
        leader_3_role: "Evangelist & Local Elder",

        // Testimonies
        test_title: "Testimonies & Gratitude",
        test_subtitle: "What God is doing through our community",
        test_1_quote: "\"Since I joined this Church, I have grown spiritually and found a true family that cares and prays with me during times of trouble and joy.\"",
        test_member_label: "- Member",
        
        // Story & Vision Section
        story_tag: "OUR STORY & VISION",
        story_title: "Building A Community Faithfully In Christ",
        story_desc: "ELCT Shia Kameti is dedicated to nurturing spiritual growth, fostering fellowship, and serving our congregation and local community. Guided by Christian principles, we aim to share God's love through active involvement, prayer, and support for all members.",
        btn_get_in_touch: "Get In Touch",

        // Core Values / Services Box
        mission_title: "Our Mission",
        mission_desc: "To preach the Gospel and build a strong faith-driven community.",
        vision_title: "Our Vision",
        vision_desc: "To be a beacon of hope, love, and spiritual transformation.",
        values_title: "Core Values",
        values_desc: "Love, unity, integrity, and faithful service to God and humanity.",
        fellowship_title: "Fellowship",
        fellowship_desc: "Creating welcoming spaces for families and individuals to bond.",
        outreach_title: "Outreach",
        outreach_desc: "Extending support and charity to those in need in our society.",
        prayer_title: "Prayer Life",
        prayer_desc: "Strengthening our spiritual foundation through persistent prayer.",

        // Impact Statistics
        stat_members: "Active Members",
        stat_years: "Years of Service",
        stat_events: "Annual Events",
        stat_families: "Families Supported",

        // History / Journey
        journey_tag: "OUR JOURNEY",
        history_title: "History Of ELCT Shia Kameti",
        history_desc: "Our church began with a unified purpose: to gather believers together and establish a strong foundation of faith. From humble beginnings to where we stand today, God has been faithful in guiding us through every step of ministry and development.",

        // Leadership
        leadership_tag: "OUR LEADERSHIP",
        leadership_title: "Kameti Leaders",
        leadership_desc: "Get to know the leaders who oversee our ministry and lead the church toward achieving its vision and various ministries.",
        role_pastor: "Parish Pastor",
        role_assoc_pastor: "Associate Pastor",
        role_evangelist: "Evangelist & Local Elder",

        // Departments & Groups
        groups_tag: "OUR GROUPS",
        groups_title: "Our Departments & Sub-Committees",
        group_choir_title: "Praise & Worship Department (Choir)",
        group_choir_desc: "Leading the congregation in praise and worship through songs and musical instruments.",
        group_youth_title: "Youth Fellowship",
        group_youth_desc: "Building young people spiritually, morally, and developing their leadership capacity in society.",
        group_women_title: "Women's Fellowship",
        group_women_desc: "Strengthening family welfare, prayer life, and unity among women.",
        group_children_title: "Children's Ministry (Sunday School)",
        group_children_desc: "Nurturing children in the foundation of the Word of God from an early age."
    },
    sw: {
        top_welcome: "KARIBU UJIUNGE NASI",
        btn_search: "tafuta",
        search_placeholder: "andika hapa",
        nav_home: "Mwanzo",
        nav_events: "Matukio",
        nav_about: "Kuhusu Sisi",
        nav_contact: "Mawasiliano",
        hero_tag: "UPENDO WA KANISA. UPENDO WA IMANI",
        hero_title: "Karibu Katika <br> Kanisa Letu",
        hero_verse: "Mathayo 6:13 Na usitutie majaribuni, lakini utuokoe na yule mwovu: Kwa kuwa ufalme ni wako, na nguvu, na utukufu, hata milele. Amina.",
        btn_read: "Soma Zaidi",
        live_title: "Ibada ya Mubashara (Live)",
        live_time: "Jumapili Saa 12:30 AM - 03:30 AM",
        btn_join: "Jiunge Sasa",
        btn_videos: "Video",
        services_subtitle: "HUDUMA ZETU",
        services_title: "Tunapenda Kuhudumia Jamii Yetu",
        services_desc: "Tumejitolea kuleta mabadiliko chanya hapa hapa katika mtaa wetu. Kupitia programu, huduma, na jitihada zetu za kijamii, tunalenga kusaidia familia, kuinua mmoja mmoja, na kuwaleta watu karibu zaidi.",
        btn_learn_more: "Soma Zaidi",
        srv_1_title: "Ibada za Wiki",
        srv_1_desc: "Jiunge nasi kila wiki kwa ushirika na ibada yenye uhamsho.",
        srv_2_title: "Vijana",
        srv_2_desc: "Kuwezesha kizazi kijacho kuongoza kwa imani na dhumuni la kweli.",
        srv_3_title: "Watoto",
        srv_3_desc: "Eneo la furaha, salama na la ubunifu kwa watoto kukua.",
        srv_4_title: "Matukio Maalum",
        srv_4_desc: "Mikusanyiko ya kijamii yenye kusisimua na sherehe za msimu.",
        srv_5_title: "Ushauri wa Kiroho",
        srv_5_desc: "Mwongozo wa kitaalamu na masikio ya usikivu unapohitaji usaidizi.",
        srv_6_title: "Huduma ya Rehema",
        srv_6_desc: "Kutoa huduma na msaada wa lazima kwa familia zenye uhitaji.",
        ft_quick_links: "Viungo vya haraka",
        ft_products: "bidhaa",
        ft_donate: "Toa Mchango",
        ft_social: "Mitandao ya kijamii",
        evt_hero_tag: "INAYOFUATA",
        evt_hero_title: "Karibu <br> Ushirikiane Nasi",
        evt_hero_desc: "Karibu kwenye tovuti rasmi ya KKKT Mtaa wa Shia. Ungana nasi katika ibada, mafundisho, na kuhudumia kazi ya Bwana.",
        btn_worship_schedule: "Ratiba ya Ibada",
        btn_give_offering: "Toa Sadaka",

        // About Us Hero Section
        abt_hero_tag: "SISI NI NANI",
        abt_hero_title: "Kuhusu Kanisa Letu &<br> Huduma Yetu",
        abt_hero_verse: "Zaburi 133:1 Tazama, jinsi ilivyo vyema, na kupendeza, Ndugu kukaa pamoja, kwa umoja!",
        btn_read_more: "Soma Zaidi",

        // Contact Hero Section (MPYA)
        cnt_hero_tag: "WASILIANA NASI",
        cnt_hero_title: "Karibu <br>Tupigie, Tuandikie Ujumbe",
        cnt_hero_desc: "Je, una swali, maoni, au unahitaji maombi na ushauri wa kiroho? <br>Tuna furaha kubwa kusikia kutoka kwako. Wasiliana nasi leo.",

        // Contact Info Box
        info_box_title: "Taarifa za Mawasiliano",
        info_box_desc: "Karibu ofisini kwetu kwa mazungumzo au ushauri wa kiroho. Pia unaweza kutupigia simu au kututumia barua pepe wakati wowote.",
        loc_title: "Eneo Tunapopatikana",
        loc_detail: "KKKT Shia, Mtaa Wa Kameti, Tanzania",
        phone_title: "Nambari za Simu",
        email_title: "Barua Pepe",

        // Contact Form
        form_title: "Tutumie Ujumbe",
        lbl_name: "Jina Kamili",
        ph_name: "Weka jina yako",
        lbl_email: "Anwani ya Barua Pepe",
        ph_email: "Weka barua pepe yako",
        lbl_subject: "Kichwa cha Ujumbe / Lengo",
        ph_subject: "Mf. Maombi, Ushauri wa Kiroho, Shukrani",
        lbl_message: "Ujumbe Wako",
        ph_message: "Andika ujumbe wako hapa...",
        btn_send: "Tuma Ujumbe",
        
        // Worship Schedules
        sch_subtitle: "RATIBA ZETU",
        sch_title: "Ratiba za Ibada",
        sch_desc: "Ungana nasi wiki nzima kwa ajili ya ibada, kujifunza Neno la Mungu, na kuomba pamoja.",

        sch_1_title: "Ibada Kuu ya Jumapili",
        sch_1_time: "12:30 Asubuhi - 03:30 Asubuhi",
        sch_1_desc: "Sifa, kuabudu, na Neno la Mungu.",

        sch_2_title: "UTUKUFU WA ASUBUHI (Morning Glory)",
        sch_2_time: "Kila Jumatatu: Saa 12:00 Asubuhi",
        sch_2_desc: "Kujifunza Biblia kwa kina na Maombi.",

        sch_3_title: "UTUKUFU WA JIONI (Evening Glory)",
        sch_3_time: "Kila Jumanne: Saa 10:00 Jioni",
        sch_3_desc: "Kujifunza Biblia kwa kina na Maombi.",

        sch_4_title: "UTUKUFU WA JIONI (Evening Glory)",
        sch_4_time: "Kila Jumatano: Saa 10:00 Jioni",
        sch_4_desc: "Kujifunza Biblia kwa kina na Maombi.",

        sch_5_title: "UTUKUFU WA JIONI (Evening Glory)",
        sch_5_time: "Kila Abalhamisi: Saa 10:00 Jioni",
        sch_5_desc: "Kujifunza Biblia kwa kina na Maombi.",

        sch_6_title: "UTUKUFU WA ASUBUHI (Morning Glory)",
        sch_6_time: "Kila Ijumaa: Saa 12:00 Asubuhi",
        sch_6_desc: "Kujifunza Biblia kwa kina na Maombi.",

        // Events
        evt_section_title: "Matukio Yajayo",
        evt_section_subtitle: "Tunakukaribisha sana kujiunga nasi katika matukio haya muhimu",
        evt_1_month: "DESEMBA",
        evt_1_title: "Semina ya Familia",
        evt_1_loc: "Kanisani Kameti",
        evt_1_desc: "Semina maalum inayolenga kujenga familia imara kiroho na kijamii.",

        evt_2_month: "NOVEMBA",
        evt_2_title: "Harambee ya Vyombo vya Muziki",
        evt_2_loc: "Kanisani Kameti",
        evt_2_desc: "Kuchangia awamu ya pili ya ununuzi wa vyombo vya muziki.",

        // News & Announcements
        news_section_title: "Habari na Matangazo",
        news_section_subtitle: "Soma makala, mafundisho, na taarifa za hivi karibuni",
        news_1_cat: "Matangazo",
        news_1_title: "Taarifa ya Huduma za Kijamii Mwezi Huu",
        news_1_desc: "Kanisa letu limefanikiwa kutembelea na kusaidia vituo viwili vya watoto yatima...",
        news_2_cat: "Makala",
        news_2_title: "Nguvu ya Umoja Katika Huduma",
        news_2_desc: "Makala inayoeleza jinsi kanisa linavyoweza kukua kupitia umoja...",
        btn_read_more: "Soma zaidi",

        // Leadership
        lead_subtitle: "UONGOZI WETU",
        lead_title: "Viongozi wa Kameti",
        lead_desc: "Wafahamu viongozi wanaosimamia huduma yetu na kuongoza kanisa kufikia maono na huduma mbalimbali.",
        leader_1_role: "Mchungaji kiongozi wa Usharika",
        leader_2_role: "Mchungaji Msaidizi",
        leader_3_role: "Mwinjilisti & Mzee wa Mtaa",

        // Testimonies
        test_title: "Ushuhuda na Shukrani",
        test_subtitle: "Yale Mungu anayotenda kupitia MADHABAU ya hapa KAMETI",
        test_1_quote: "\"Tangu nijiunge na huduma za hapa kanisani kameti, nimekua kiroho na kupata familia ya kweli inayonijali na kuomba nami wakati wa shida na furaha.\"",
        test_member_label: "- Msharika",
        
        // Story & Vision Section
        story_tag: "HISTORIA & MAONO YETU",
        story_title: "Kujenga Jamii Yenye Imani Katika Kristo",
        story_desc: "KKKT Shia Kameti imejitolea kukuza kiroho, kuimarisha ushirika, na kulitumikia kanisa na jamii inayotuzunguka. Tukiongozwa na misingi ya Kikristo, tunalenga kushirikisha pendo la Mungu kupitia huduma za dhati, maombi, na usaidizi kwa washirika wote.",
        btn_get_in_touch: "Wasiliana Nasi",

        // Core Values / Services Box
        mission_title: "Dhamira Yetu",
        mission_desc: "Kuhubiri Injili na kujenga jamii imara inayotembea katika imani.",
        vision_title: "Maono Yetu",
        vision_desc: "Kuwa kinara cha matumaini, upendo, na mabadiliko ya kiroho.",
        values_title: "Misingi Mikuu",
        values_desc: "Upendo, umoja, uaminifu, na utumishi wa dhati kwa Mungu na wanadamu.",
        fellowship_title: "Ushirika",
        fellowship_desc: "Kutengeneza mazingira ya kuwakaribisha na kuunganisha familia na watu binafsi.",
        outreach_title: "Huduma za Jamii",
        outreach_desc: "Kutoa msaada na huduma za huruma kwa wale wenye mahitaji katika jamii.",
        prayer_title: "Maisha ya Maombi",
        prayer_desc: "Kuimarisha msingi wetu wa kiroho kupitia maombi ya kudumu.",

        // Impact Statistics
        stat_members: "Washirika Hai",
        stat_years: "Miaka ya Huduma",
        stat_events: "Matukio ya Kila Mwaka",
        stat_families: "Familia Zilizosaidiwa",

        // History / Journey
        journey_tag: "SAFARI YETU",
        history_title: "Historia ya KKKT Shia Kameti",
        history_desc: "Kanisa letu lilianza likiwa na dhumuni moja: kukusanya waumini pamoja na kujenga msingi imara wa imani. Kutoka mwanzo mnyenyekevu hadi hapa tulipofika, Mungu amekuwa mwaminifu kutuongoza katika kila hatua ya huduma na maendeleo.",

        // Leadership
        leadership_tag: "UONGOZI WETU",
        leadership_title: "Viongozi wa Kameti",
        leadership_desc: "Wafahamu viongozi wanaosimamia huduma yetu na kuliongoza kanisa kuelekea kutimiza maono na idara zake mbalimbali.",
        role_pastor: "Mchungaji kiongozi wa Mtaa",
        role_assoc_pastor: "Mchungaji Msaidizi",
        role_evangelist: "Mwinjilisti & Mzee wa Mtaa",

        // Departments & Groups
        groups_tag: "VIKUNDI VYETU",
        groups_title: "Idara na huduma zilizopo",
        group_choir_title: "Idara ya Sifa na Kuabudu (El-shadai praise team)",
        group_choir_desc: "Kuongoza ushirika katika sifa na kuabudu kupitia nyimbo na vyombo vya muziki.",
        group_youth_title: "Umoja wa Vijana",
        group_youth_desc: "Kujenga vijana kiroho, kimaadili, na kukuza uwezo wao wa uongozi katika jamii.",
        group_women_title: "Umoja wa Wanawake (Dayosisi)",
        group_women_desc: "Kuimarisha ustawi wa familia, maisha ya maombi, na umoja miongoni mwa wanawake.",
        group_children_title: "Huduma ya Watoto (Shule ya Jumapili)",
        group_children_desc: "Kulea watoto katika msingi wa Neno la Mungu tangu umri mdogo."
    }
};

// FUNCTION YA KUBADILISHA LUGHA (ILIYOREKEBISHWA)
function applyLanguage(selectedLang) {
    if (!langDatabase[selectedLang]) return;

    // 1. Badilisha elements zote za HTML zenye 'data-i18n' (Inasoma pia tagi za <br>)
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (langDatabase[selectedLang][key]) {
            element.innerHTML = langDatabase[selectedLang][key];
        }
    });

    // 2. Badilisha Placeholders kwenye Form Inputs au Search Bars
    document.querySelectorAll('[placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder') || element.getAttribute('data-i18n');
        if (key && langDatabase[selectedLang][key]) {
            element.placeholder = langDatabase[selectedLang][key];
        }
    });

    // 3. Weka maamuzi kwenye Select zote mbili (Desktop & Mobile)
    document.querySelectorAll('.lang-selector').forEach(select => {
        select.value = selectedLang;
    });

    // 4. Hifadhi chaguo la mtumiaji kwenye kivinjari
    localStorage.setItem('preferred_language', selectedLang);
}

// SIKILIZA MABADILIKO KWENYE SELECT (DESKTOP & MOBILE)
document.addEventListener('DOMContentLoaded', () => {
    // Chukua lugha iliyohifadhiwa au tumia Kiswahili ('sw') / Kiingereza ('en')
    const savedLang = localStorage.getItem('preferred_language') || 'sw';
    
    // Anzisha lugha mara moja
    applyLanguage(savedLang);

    // Weka Listener kwenye selectors zote za lugha
    document.querySelectorAll('.lang-selector').forEach(select => {
        select.addEventListener('change', (e) => {
            applyLanguage(e.target.value);
        });
    });
});