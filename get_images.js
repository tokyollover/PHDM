const { chromium } = require('playwright');

async function getOriginalLink(page, url) {
    try {
        await page.goto(url);
        // Wikimedia "Original file" link usually has text like "Original file" or resolution info
        // It's usually in the ".fullMedia a" selector or "div.fullMedia > a"
        const link = await page.$eval('.fullMedia a', el => el.href);
        const resolution = await page.$eval('.fileInfo', el => el.innerText);
        return { url: link, resolution: resolution };
    } catch (e) {
        return { error: e.message };
    }
}

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    
    const targets = [
        { id: 4, url: 'https://commons.wikimedia.org/wiki/File:Moroccan-American_Treaty_of_Peace_and_Friendship_01.jpg' },
        { id: 2, url: 'https://commons.wikimedia.org/wiki/File:Mulay_Ismail.jpg' },
        { id: 7, url: 'https://commons.wikimedia.org/wiki/File:AlgecirasConference1906.jpg' },
        { id: 8, url: 'https://commons.wikimedia.org/wiki/File:Portion_of_signatures_page_of_the_Treaty_of_Fes.png' },
        { id: 10, url: 'https://commons.wikimedia.org/wiki/File:Onderhandeling_van_kapitein_JH_van_Kinsbergen_met_den_keizer_van_Marokko.png' },
        { id: 6, url: 'https://commons.wikimedia.org/wiki/File:Vernet_-_Bataille_d%27Isly_-_1846.jpg' },
        { id: 5, url: 'https://commons.wikimedia.org/wiki/File:Abdallah_Ben_Aicha_Ambassador_of_Morocco_to_France_1699.jpg' } // Guessing URL or similar
    ];

    const results = {};

    for (const t of targets) {
        console.log(`Checking ${t.id}...`);
        results[t.id] = await getOriginalLink(page, t.url);
    }

    console.log(JSON.stringify(results, null, 2));
    await browser.close();
})();
