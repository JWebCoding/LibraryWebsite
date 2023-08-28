import React from "react";

function AddBookProcessSelection(props) {
    return (
        <div id="processSelection">
            <h1>How do you want to add new books or data?</h1>
            <main>
                <div id="availableProcesses">
                    <div id="automatic">
                        <h3>Automated</h3>
                        <button className={"link-button"} onClick={()=> props.switchPane("automatic")}>Automatic</button>
                        <p>Faster but less customization and control.</p>
                    </div>

                    <div id="manual">
                        <h3>Manually</h3>
                        <button className={"link-button"} onClick={()=> props.switchPane("manual")}>Manual</button>
                        <p>Slower but full control over data.</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default AddBookProcessSelection;