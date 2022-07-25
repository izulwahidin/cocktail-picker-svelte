export async function GET() {
    const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const data = await res.json();
    
    return {
        body: data.drinks[0]
    }
}