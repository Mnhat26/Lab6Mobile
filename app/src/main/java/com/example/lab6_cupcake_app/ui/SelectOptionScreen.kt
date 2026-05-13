package com.example.lab6_cupcake_app.ui

import androidx.compose.foundation.layout.Column
import androidx.compose.material3.*
import androidx.compose.runtime.*

@Composable
fun SelectOptionScreen(
    options: List<String>,
    onNext: (String) -> Unit
) {
    var selected by remember { mutableStateOf("") }

    Column {
        options.forEach {
            Button(onClick = { selected = it }) {
                Text(it)
            }
        }

        Button(onClick = { onNext(selected) }) {
            Text("Next")
        }
    }
}