package com.kyu.spring5recipeapp.services;

import com.kyu.spring5recipeapp.domain.Recipe;

import java.util.Set;

public interface RecipeService {

    Set<Recipe> getRecipes();

}
