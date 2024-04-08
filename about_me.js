var tablinks = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(num) {
    for (tablink of tablinks)
        tablink.classList.remove("active-link");

    for (tab of tabcontents)
        tab.classList.remove("active-tab");

    event.currentTarget.classList.add("active-link");
    tabcontents[num].classList.add("active-tab");
}