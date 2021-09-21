package com.example.kotlindemo.model

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.validation.constraints.NotBlank

@Entity
data class Article (
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @get: NotBlank
    val firstName: String = "",

    @get: NotBlank
    val lastName: String = "",

    @get: NotBlank
    val emailId: String = ""
)