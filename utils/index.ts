export async function fetchCars() {
    const headers = {
        headers: {
            'X-RapidAPI-Key': '3342753a4fmsh53ab3f72b0fbf90p1021f4jsn336da53b7817',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', { 
        headers: headers, 
    });

    const result = await response.json();

    return result;
}