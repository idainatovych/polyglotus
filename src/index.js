const { Translate } = require('@google-cloud/translate');

exports.translate = async function (req, res) {
    const { source = '' } = req.query;

    const client = new Translate();
    const targetLanguage = 'ru';
    let [translations] = await client.translate(source, targetLanguage);
    translations = Array.isArray(translations) ? translations : [translations];

    res.send(`Here is your translations of "${source}" to Russian: ${translations.join(', ')}`);
}