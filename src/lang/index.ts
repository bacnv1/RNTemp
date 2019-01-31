import i18next from 'i18next'
import en from './en'
import ja from './ja'

const DEFAULT_LANG = 'ja'
const FALLBACK = 'en'

i18next.init({ // eslint-disable-line
    interpolation: {
        // React already does escaping
        escapeValue: false,
    },
    lng: DEFAULT_LANG,
    fallbackLng: FALLBACK,
    // Using simple hardcoded resources for simple example
    resources: {
        ja: {
            translation: ja
        },
        en: {
            translation: en
        }
    },
})

export default i18next
