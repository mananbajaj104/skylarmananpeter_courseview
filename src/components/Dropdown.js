import React from 'react'

const Dropdown = () => {
    var show = true
    return (
        <div>
            <button>
                showMenu
            </button>

            {
                show
                ? (
                <div className ="menu">
                        <button>
                            Choice 1
                        </button>
                        <button>
                            Choice 2
                        </button>
                        <button>
                            Choice 3
                        </button>
                    </div>
                )
                :
                (null)
            }
        </div>
    )
}

export default Dropdown;