chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.text === 'newTab') {
        // Discord
        hideIfDefined($('.container-2o3qEW'));
        removeIfDefined($('.nowPlayingColumn-1eCBCN'));
        removeIfDefined($('.peopleColumn-1wMU14'));
        // Facebook
        window.addEventListener('scroll', function (ev) {
            removeParentIfDefined($('span:contains(\'Предложено за вас\')'));
        });
        // Jira
        clickIfDefined($('#aui-flag-container > div:nth-child(1) > div > span'));
        clickIfDefined($('#nps-acknowledgement-accept-button'));
        clickIfDefined($('#inline-dialog-post-setup-announcement-database-setup > div.aui-inline-dialog-contents.contents > div > p.post-setup-discovery-buttons > a.aui-button.post-setup-action.post-setup-action-js.post-setup-discovery-close-js'));
        clickIfDefined($('#inline-dialog-jira-help-tip-15539905126670 > div.aui-inline-dialog-contents > form > button'));
        clickIfDefined($('#aui-flag-container > div.aui-flag > div.aui-message > button.aui-close-button'));
        clickIfDefined($('div.jira-help-tip > div.aui-inline-dialog-contents > form.tip-footer > button.helptip-close'));
        clickIfDefined($('#inline-dialog-post-setup-announcement-database-setup > div.aui-inline-dialog-contents.contents > div > p.post-setup-discovery-buttons > a.postsetup-close-link.post-setup-discovery-close-js'));
        clickIfDefined($('#aui-flag-container > div > div > ul > li:nth-child(1) > button'));
        clickIfDefined($('#inline-dialog-post-setup-announcement-database-setup > div.aui-inline-dialog-contents.contents > div > p.post-setup-discovery-buttons > a.postsetup-close-link.post-setup-discovery-close-js'));
        clickIfDefined($('#aui-flag-container > div > div > button'));
        clickIfDefined($('#healthcheck-notification > div > button'));
        clickIfDefined($('#inline-dialog-jira-help-tip-16487333434090 > div.aui-inline-dialog-contents > form > button'));
    }
});

function clickIfDefined(element) {
    if (element !== undefined) {
        element.click();
    }
}


function removeParentIfDefined(element) {
    element.toArray().forEach(el => {
        parent = el.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
        removeIfDefined(parent);
    });
}

function removeIfDefined(element) {
    if (element !== undefined) {
        element.remove();
    }
}

function hideIfDefined(element) {
    if (element !== undefined) {
        element.hide();
    }
}
