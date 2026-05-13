package com.example.lab6_cupcake_app

import androidx.compose.runtime.*
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.navigation.compose.*
import com.example.lab6_cupcake_app.ui.CupcakeScreen
import com.example.lab6_cupcake_app.ui.*
import com.example.lab6_cupcake_app.viewmodel.OrderViewModel

@Composable
fun CupcakeApp(viewModel: OrderViewModel = viewModel()) {

    val navController = rememberNavController()
    val uiState by viewModel.uiState.collectAsState()

    NavHost(
        navController = navController,
        startDestination = CupcakeScreen.Start.name
    ) {

        composable(CupcakeScreen.Start.name) {
            StartOrderScreen(
                onNext = {
                    viewModel.setQuantity(it)
                    navController.navigate(CupcakeScreen.Flavor.name)
                }
            )
        }

        composable(CupcakeScreen.Flavor.name) {
            SelectOptionScreen(
                options = listOf("Vanilla", "Chocolate"),
                onNext = {
                    viewModel.setFlavor(it)
                    navController.navigate(CupcakeScreen.Pickup.name)
                }
            )
        }

        composable(CupcakeScreen.Pickup.name) {
            SelectOptionScreen(
                options = uiState.pickupOptions,
                onNext = {
                    viewModel.setDate(it)
                    navController.navigate(CupcakeScreen.Summary.name)
                }
            )
        }

        composable(CupcakeScreen.Summary.name) {
            OrderSummaryScreen(
                state = uiState,
                onCancel = {
                    viewModel.resetOrder()
                    navController.popBackStack(
                        CupcakeScreen.Start.name,
                        false
                    )
                }
            )
        }
    }
}