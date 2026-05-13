package com.example.lab6_cupcake_app.viewmodel

import androidx.lifecycle.ViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import com.example.lab6_cupcake_app.model.OrderUiState

class OrderViewModel : ViewModel() {

    private val _uiState = MutableStateFlow(OrderUiState())
    val uiState: StateFlow<OrderUiState> = _uiState

    fun setQuantity(number: Int) {
        _uiState.value = _uiState.value.copy(quantity = number)
    }

    fun setFlavor(flavor: String) {
        _uiState.value = _uiState.value.copy(flavor = flavor)
    }

    fun setDate(date: String) {
        _uiState.value = _uiState.value.copy(date = date)
    }

    fun resetOrder() {
        _uiState.value = OrderUiState()
    }
}