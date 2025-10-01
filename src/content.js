let isEnabled = true;

const checkEnabled = () => {
    return new Promise((resolve) => {
        chrome.storage.sync.get('enabled', (data) => {
            isEnabled = data.enabled ?? true; // Ativado por padrão
            resolve(isEnabled);
        });
    });
};

const autoAssignPR = async () => {
    if (!isEnabled) {
        console.log('PR Auto Assigner: Extensão desativada');
        return;
    }

    try {
        const selfAssignButton = document.querySelector('.js-issue-assign-self');

        if (selfAssignButton) {
            selfAssignButton.click();
            return console.log('PR Auto Assigner: PR atribuído com sucesso!');
        }

        return console.warn('PR Auto Assigner: Botão de auto-atribuição não encontrado');
    } catch (error) {
        console.error('PR Auto Assigner: Erro ao tentar atribuir PR:', error);
    }
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'toggleState') {
        isEnabled = message.enabled;
        console.log(`PR Auto Assigner: Estado alterado para ${isEnabled ? 'ativado' : 'desativado'}`);
    }
});

if (window.location.pathname.includes('/compare/')) {
    console.log('PR Auto Assigner: Página de criação de PR detectada');
    checkEnabled().then(() => {
        setTimeout(autoAssignPR, 1000);
    });
}