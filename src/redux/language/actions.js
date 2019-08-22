const actions = {
    CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',
    changeLanguage: ({ languageId }) => {
        return {
            type: actions.CHANGE_LANGUAGE,
            languageId,
        }
    }
}

export default actions;
