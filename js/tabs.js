const state = {
    activeTab: 0,
};

const dom = {};

const cacheDom = () => {
    dom.tabs = document.querySelectorAll('.tab');
    dom.tabContents = document.querySelectorAll('.tab-content');
};

const handleTabClick = i => function () {
    state.activeTab = i;
    render();
};

const addEventListeners = () => {
    for (let i = 0, l = dom.tabs.length; i < l; i++) {
        const tab = dom.tabs[i];
        tab.addEventListener('click', handleTabClick(i));
    }
};

const render = () => {
    for (let i = 0, l = dom.tabs.length; i < l; i++) {
        const tab = dom.tabs[i];
        const tabContent = dom.tabContents[i];

        if (state.activeTab === i) {
            tab.classList.add('is-active');
            tabContent.classList.add('is-active');
        }
        else {
            tab.classList.remove('is-active');
            tabContent.classList.remove('is-active');
        }
    }
};

const init = () => {
    cacheDom();
    addEventListeners();
    render();
};

init();
