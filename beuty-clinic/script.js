document.addEventListener('DOMContentLoaded', () => {

    //header moving
    const header = document.querySelector('header');

    function getHeaderHeight() {
        return header.offsetHeight;
    }

    let headerHeight = getHeaderHeight();

    window.addEventListener('resize', () => {
        headerHeight = getHeaderHeight();
    });

    window.addEventListener('scroll', () => {
        let scrollY = window.scrollY;


        console.log(`${scrollY} and ${headerHeight}`);
        if (scrollY <= headerHeight) {
            header.classList.remove('trans');
            header.style.top = `-${scrollY}px`;
        } else {

            console.log('scrolly > headerheigh')

            header.classList.add('trans')
            header.style.top = `0`;
        }


    });
    //menu responsivibility
    const hamber = document.getElementById('hamber');
    const crosses = document.querySelectorAll('.cross');
    const backs = document.querySelectorAll('.back');
    const overlay = document.getElementById('overlay');
    const mobile_menu = document.getElementById('mobile-nav');
    const show_services_menu = document.getElementById('show-services-menu');
    const services_menu = document.getElementById('services-menu')

    hamber.addEventListener('click', () => { mobile_menu.classList.add('open') });

    overlay.addEventListener('click',() => {
        mobile_menu.classList.remove('open');
        services_menu.classList.remove('open');
    })
    crosses.forEach(cross => {
        cross.addEventListener('click', () => {
            mobile_menu.classList.remove('open');
            services_menu.classList.remove('open')
        });
    });
    backs.forEach(back => {
        back.addEventListener('click', () => {

            services_menu.classList.remove('open')
        });
    });
    show_services_menu.addEventListener('click', () => { services_menu.classList.add('open') });

    window.addEventListener('resize', () => mobile_menu.classList.remove('open'));



    //handle see-services
    const see_services = document.getElementById('see-services');
    const services = document.getElementById('services');

    if(see_services){
        see_services.addEventListener('click', (e) => {
            e.preventDefault();
    
            let servOffset = services.offsetTop;
            window.scrollTo({ top: servOffset - getHeaderHeight(), behavior: 'smooth' })
    
        })
    }
 

    //handle go to consultation-request section
    const con_reqs = document.querySelectorAll('.go-consultation-req-form');
    const consultation_req_form = document.getElementById('consultation-req-form');

    con_reqs.forEach(con_req =>
        con_req.addEventListener('click', (e) => {
            e.preventDefault();

            let consultation_top = consultation_req_form.offsetTop;
            window.scrollTo({ top: consultation_top - getHeaderHeight(), behavior: 'smooth' })
        })
    )




    //form validation
    const forms = document.querySelectorAll('.form');

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            //get data
            const name = form.elements['name'];
            const phone = form.elements['phone'];
            const concept = form.elements['concept'];

            //reset
            let valid = true;
            form.querySelectorAll('.error-msg').forEach(er => er.textContent = "");

            //validate name
            if (name.value.trim().length < 3) {
                name.nextElementSibling.textContent = "لطفا نام معتبر وارد کنید.";
                valid = false;
            }

            //validate phone
            if (!/^09\d{9}|۰۹[۰-۹]{9}$/.test(phone.value.trim())) {
                phone.nextElementSibling.textContent = "لطفا شماره موبایل معتبر وارد کنید.";
                valid = false;
            }

            //valildate concept
            if (!concept.value) {
                concept.nextElementSibling.textContent = "لطفا موضوع مشاوره خود را انتخاب کنید.";
                valid = false;
            }

            if (valid) {
                form.reset();
                form.querySelector('.success-msg').textContent = "به زودی با شما تماس خواهیم گرفت.";
                setTimeout(() => form.submit(), 1000);
            }
        })
    })

    //msg form validation
    const msg_form = document.getElementById('msg-form');
 
    if(msg_form){
        msg_form.addEventListener('submit', (e) => {
      
            e.preventDefault();
    
    
             //get data
             const name = msg_form.elements['name'];
             const concept = msg_form.elements['concept'];
             const description = msg_form.elements['description'];
    
             //reset
             let valid = true;
             msg_form.querySelectorAll('.error-msg').forEach(er => er.textContent = "");
    
             //validate name
             if (name.value.trim().length < 3) {
                 name.nextElementSibling.textContent = "لطفا نام معتبر وارد کنید.";
                 valid = false;
             }
    
             //validate phone
             if (concept.value.trim().length < 3) {
                concept.nextElementSibling.textContent = "لطفا موضوع معتبر وارد کنید.";
                valid = false;
            }
    
             //valildate concept
             if (description.value.trim().length < 5) {
                description.nextElementSibling.textContent = "لطفا پیام معتبر وارد کنید.";
                valid = false;
            }
    
             if (valid) {
                 msg_form.reset();
                 msg_form.querySelector('.success-msg').textContent = "به زودی پیام ارزشمند شما را بررسی میکنیم.";
                 setTimeout(() => msg_form.submit(), 1000);
             }
        })
    }
   


   
   







 //swiper
 if(typeof Swiper !== 'undefined'){
    var about_swiper = new Swiper(".aboutSwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
        lazy:{
            loadPrevNext: true
        },
        on:{
            init: function(){
                document.querySelectorAll('.swiper').forEach(swiper=>{
                    swiper.style.visibility = 'visible';
                    swiper.style.opacity = 1;
                })
            }
        }
    });

    var service_swiper = new Swiper(".serviceSwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
        lazy:{
            loadPrevNext: true
        },
        on:{
            init: function(){
                document.querySelectorAll('.swiper').forEach(swiper=>{
                    swiper.style.visibility = 'visible';
                    swiper.style.opacity = 1;
                })
            }
        },
        breakpoints:{
            768:{slidesPerView: 2},
            1024:{slidesPerView: 3},
            1440:{slidesPerView: 4}
        }
    });
}

//AOS
if(typeof AOS !== 'undefined'){
    setTimeout(()=>{
        AOS.init({
            once: true,
            duration: 700,
            easing: "ease-out-cubic"
        },1000);
    })
}


})




