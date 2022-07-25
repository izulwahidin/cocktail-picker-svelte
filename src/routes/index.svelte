<script context="module">
    export async function load({fetch}) {
        const res = await fetch('api/random_cocktail');
        const drink = await res.json();
        // console.log(drink);
        return {
            props: {
                drinkProp: drink
            }
        }
    }
</script>
<script>
    export let drinkProp;
    let drinkState = drinkProp;
    const handleOnclick = async () => {
        const res = await fetch('api/random_cocktail');
        const drink = await res.json();
        drinkState = drink;
    }
</script>
<svelte:head>
    <title>Random Cocktail Picker </title>
</svelte:head>

<h1 class="text-3xl font-bold underline">
    Random Cocktail Picker
</h1>
<button
    class="p-5"
    on:click={handleOnclick}
>
    Get new Drink
</button>
<p><span class="font-bold">Drink name</span>: {drinkState.strDrink}</p>
<img class="w-80" src="{drinkState.strDrinkThumb}" alt="{drinkState.strDrink} thumbnail">
<div>
    <span class="font-bold">Instructions</span>:
    <li class="pl-10 pr-10">
        {drinkState.strIngredient1}
    </li>
    <li class="pl-10 pr-10">
        {drinkState.strIngredient2}
    </li>
    <li class="pl-10 pr-10">
        {drinkState.strIngredient3}
    </li>
</div>
<p><span class="font-bold">Instructions</span>: {drinkState.strInstructions}</p>