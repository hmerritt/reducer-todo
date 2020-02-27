import React from "react";

export const initialState = [
    {
        id: Date.now(),
        item: "Some thing todo",
        completed: false
    },
    {
        id: Date.now() + 1,
        item: "Another thing todo",
        completed: false
    }
];

export const todoReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
