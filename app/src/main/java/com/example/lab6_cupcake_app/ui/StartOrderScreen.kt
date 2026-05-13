package com.example.lab6_cupcake_app.ui

import androidx.compose.material3.*
import androidx.compose.runtime.Composable

@Composable
fun StartOrderScreen(onNext: (Int) -> Unit) {
    Button(onClick = { onNext(6) }) {
        Text("Order 6 Cupcakes")
    }
}