import { test, expect } from '@playwright/test';

test('GraphQL API Test', async ({ request }) => {

    const allCountriesResponse = await request.post('https://countries.trevorblades.com/', {
        data: {
            query: `
            {
                countries {
                    code
                    emoji
                    languages {
                        name
                        code
                    }
                }
            }
            `
        }
    });

    const allCountries = await allCountriesResponse.json()
    expect(allCountries.data.countries).toHaveLength(250);

})

test('Germany API Test', async ({ request }) => {

    const germanyResponse = await request.post('https://countries.trevorblades.com/', {
        data: {
            query: `
            {
                countries(filter: {code: {eq: "DE"}}) {
                    code
                    emoji
                    languages {
                        name
                        code
                    }
                }
            }
            `
        }
    });

    const germany = await germanyResponse.json()
    expect(germany.data.countries).toHaveLength(1);
    expect(germany.data.countries[0].code).toBe('DE');

});


test('USA API Test', async ({ request }) => {

    const americaResponse = await request.post('https://countries.trevorblades.com/', {
        data: {
            query: `
                {
                    country(code: "US") {
                        code
                        emoji
                        name(lang: "en")
                        states {
                        code
                        name
                        }
                    }
                }
            `
        }
    });

    const america = await americaResponse.json()
    // console.log(america.data.country.states.length);
    expect(america.data.country.states).toHaveLength(57);
    const allStates = america.data.country.states;
    // console.log(allStates[allStates.length - 1]);
    expect(allStates[allStates.length - 1].code).toBe('VI');

});