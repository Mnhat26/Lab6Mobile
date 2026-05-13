package com.example.lab6_cupcake_app.model

data class OrderUiState(
    val quantity: Int = 0,
    val flavor: String = "",
    val date: String = "",
    val price: String = "",
    val pickupOptions: List<String> = listOf(
        "Today", "Tomorrow", "Next Day"
    )
)