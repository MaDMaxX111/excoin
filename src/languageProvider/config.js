const config = {
    defaultLanguage: () => {
        const locale = window.navigator.language;
        const language = config.options.find(lang => lang.locale.indexOf(locale) > -1);
        return language.languageId || config.options[0].languageId;
    },
    options: [
        {
            languageId: 'en',
            locale: ['en', 'en-US', 'uk'],
            text: 'English'
        },
        {
            languageId: 'ru',
            locale: ['ru-RU','ru'],
            text: 'Русский'
        }
    ],
};

export default config;
