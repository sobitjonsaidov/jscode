window.addEventListener("DOMContentLoaded", () => {
    const loader = document.querySelector(".loader"),
        modal = document.querySelector(".modal"),
        modalBtn = document.querySelector("[data-modal]"),
        modalClose = document.querySelector("[data-close]"),
        tabsParent = document.querySelector(".tabheader__items"),
        tabs = document.querySelectorAll(".tabheader__item"),
        tabsContant = document.querySelectorAll(".tabcontent")

    //loader
    setTimeout(() => {
        loader.style.display = "none"
    }, 1000)

    //
    function openModal() {
        modal.classList.add("show")
        modal.classList.remove("hide")
        document.body.style.overflow = "hidden"
    }

    function closeModal() {
        modal.classList.add("hide")
        modal.classList.remove("show")
        document.body.style.overflow = ""
    }

    modalBtn.addEventListener("click", openModal)

    modalClose.addEventListener("click", closeModal)

    document.addEventListener("keydown", (e) => {
        if (e.code === "Escape" && modal.classList.contains("show")) {
            closeModal()
        }
    })

    //tabContandat

    function hideTabContant() {
        tabsContant.forEach((item) => {
            item.classList.add("hide")
            item.classList.remove("show")
        })
        tabs.forEach((item) => {
            item.classList.remove("tabheader__item_active")
        })
    }
    function showTabContant(i) {
        tabsContant[i].classList.add("show")
        tabsContant[i].classList.remove("hide")
        tabs[i].classList.add("tabheader__item_active")
    }
    hideTabContant()
    showTabContant(0)

    tabsParent.addEventListener("click", (event) => {
        const target = event.target
        if (target && target.classList.contains("tabheader__item")) {
            tabs.forEach((item, idx) => {
                if (target == item) {
                    hideTabContant()
                    showTabContant(idx)
                }
            })
        }
    })


    //class

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector) {
            this.src = src
            this.alt = alt
            this.title = title
            this.descr = descr
            this.price = price
            this.parent = document.querySelector(parentSelector)
            this.transfer = 12890
            this.changeToUzs()
        }

        changeToUzs() {
            this.price = this.price * this.transfer
        }

        render() {
            const element = document.createElement("div")

            element.innerHTML = `
        <div class="menu__item">
        <img src=${this.src} alt=${this.alt} />
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">
          ${this.descr}
        </div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
          <div class="menu__item-cost">Price:</div>
          <div class="menu__item-total"><span>${this.price}</span> uzs/month</div>
        </div>
      </div>
        `
            this.parent.append(element)
        }

    }

    new MenuCard(
        'img/tabs/1.png',
        'vegy',
        'Plan "Usual"',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.',
        10,
        '.menu .container'
    ).render()


    new MenuCard(
        'img/tabs/2.jpg',
        'vegy',
        'Plan "Usual"',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.',
        15,
        '.menu .container'
    ).render()


    new MenuCard(
        'img/tabs/3.jpg',
        'vegy',
        'Plan "Usual"',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.',
        20,
        '.menu .container'
    ).render()

    //time
    const deadline = "2023-12-31"

    function startTime(endtime) {
        const timer = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(timer / (1000 * 60 * 60 * 24)),
            hours = Math.floor(timer / (1000 * 60 * 60) % 24),
            minutes = Math.floor((timer / (1000 * 60) % 60)),
            seconds = Math.floor((timer / 1000) % 60)

        return { timer, days, hours, minutes, seconds }
    }

    function moveTime(selector, endtime) {
        const wrap = document.querySelector(selector),
            days = wrap.querySelector("#days"),
            hours = wrap.querySelector("#hours"),
            minutes = wrap.querySelector("#minutes"),
            seconds = wrap.querySelector("#seconds")
        timerInter = setInterval(timeLong, 1000)

        function timeLong() {
            const box = startTime(endtime)
            days.innerHTML = box.days
            hours.innerHTML = box.hours
            minutes.innerHTML = box.minutes
            seconds.innerHTML = box.seconds
        }
        timeLong()
    }

    moveTime(".promotion__timer", deadline)



})