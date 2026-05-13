package com.example.lab6_cupcake_app.ui

import androidx.compose.foundation.layout.Column
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import com.example.lab6_cupcake_app.model.OrderUiState

@Composable
fun OrderSummaryScreen(
    state: OrderUiState,
    onCancel: () -> Unit
) {
    Column {
        Text("Quantity: ${state.quantity}")
        Text("Flavor: ${state.flavor}")
        Text("Date: ${state.date}")

        Button(onClick = onCancel) {
            Text("Cancel")
        }
    }
}