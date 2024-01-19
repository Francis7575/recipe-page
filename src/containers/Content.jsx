import img1 from '/src/assets/image-omelette.jpeg'


function Content() {
    return (
        <>
            <main className="main_container">
                <div className="card">
                    <figure>
                        <img className="image1" src={img1} alt="omelet-image" />
                    </figure>
                    <div className="card_content">
                    <h1>Simple Omelette Recipe</h1>
                    <p>
                        An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
                        to perfection, optionally filled with your choice of cheese, vegetables, or meats.
                    </p>
                    <section className="prep_time">
                        <h3>Preparation time</h3>
                        <ul>
                            <li><span>Total: </span>Approximately 10 minutes</li>
                            <li><span>Preparation: </span>5 minutes</li>
                            <li><span>Cooking: </span>minutes</li>
                        </ul>
                    </section>
                    <section className="ingredients">
                        <h2>Ingredients</h2>
                        <ul>
                            <li>2-3 large eggs</li>
                            <li>Salt, to taste</li>
                            <li>Pepper, to taste</li>
                            <li>1 tablespoon of butter or oil</li>
                            <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
                        </ul>
                    </section>
                    <section className="instructions">
                        <h2>Instructions</h2>
                        <ol>
                            <li>
                                <span>Beat the eggs:</span> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.
                            </li>
                            <li>
                                <span>Heat the pan:</span> Place a non-stick frying pan over medium heat and add butter or oil.
                            </li>
                            <li>
                                <span>Cook the omelette:</span> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
                            </li>
                            <li>
                                <span>Add fillings (optional):</span> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.
                            </li>
                            <li>
                                <span>Fold and serve:</span> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.
                            </li>
                            <li>
                                <span>Enjoy:</span> Serve hot, with additional salt and pepper if needed.
                            </li>
                        </ol>
                    </section>
                    
                    <section className="nutrition">
                        <h2>Nutrition</h2>
                        <p>
                            The table below shows nutritional values per serving without the additional fillings.
                        </p>
                        <ul className="nutrition_table">
                            <li className="nutrition_info">
                            <span>Calories</span> <strong>277kcal</strong>   
                            <div className="line_separator"></div>  
                            </li>
                            <li className="nutrition_info">
                                <span>Carbs</span> <strong>0g</strong>
                            </li>
                            <li className="nutrition_info">
                                <span>Protein</span> <strong>20g</strong>
                            </li>
                            <li className="nutrition_info">
                                <span>Fat</span> <strong>22g</strong>
                            </li>
                        </ul>
                    </section>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Content
