import React from "react"

const Button = ({objectID, onArchive}) =>
    <button
          type="button"
          className="button-inline"
          onClick={() => onArchive(objectID)}
        >
          Archive
    </button>

export default Button