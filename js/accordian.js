
// $(function () {
//     // (Optional) Active an item if it has the class "is-active"	
//     // $(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();

//     $(".projects > .project-i").click(function () {
//         // Cancel the siblings
//         $(this).siblings(".project-i").removeClass("is-active").children(".project-detail").slideUp();
//         // Toggle the item
//         $(this).toggleClass("is-active").children(".project-detail").slideToggle("ease-out");
//     });
// });


(() => {

    const projectListItems = document.querySelectorAll('.projects > .project-i');

    const activateListItem = function () {
        if (this.classList.contains('is-active')) {
            this.classList.remove('is-active');
        }
        else {
            for (let li of projectListItems) {
                li.classList.remove('is-active');
            }
            this.classList.add('is-active');
        }
    };

    for (let li of projectListItems) {
        li.addEventListener('click', activateListItem);
    }
})();

