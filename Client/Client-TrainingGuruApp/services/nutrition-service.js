export class NinjaAPI {
    baseUrl = 'https://api.api-ninjas.com/v1/nutrition?';
    apiKey = 'PpzKdkDkxB6inFeVsTvUvSlOwBq5lR6Kh7Mabjbw';

    async getNutritionInfo(unit, value, foodName) {
        try {
            const headers = new Headers();
            headers.append('X-Api-Key', `${this.apiKey}`);
            const options = {
                headers: headers
            }
            const url = `${this.baseUrl}query=${foodName} ${value}${unit}`;
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const json = await response.json();
            console.log(json)
            return json;
        } catch (error) {
            console.error(`Error fetching nutrition info: ${error}`);
        }
    }
}