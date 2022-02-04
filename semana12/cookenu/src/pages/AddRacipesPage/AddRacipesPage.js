import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

const AddRecipePage = () => {
    useProtectedPage()
    return (
        <div>
            AddRecipePage
        </div>
    )
}

export default AddRecipePage