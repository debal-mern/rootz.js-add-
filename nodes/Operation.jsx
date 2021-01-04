import { createNode } from '@rootzjs/core';


const [node, dispatchNode] = createNode("Operation", ({
        state,
        actions,
    }) => {
            return (
                <React.Fragment>
                    {
                        state.result ?
                                <p>{state.result}</p>
                        :
                        <p>0</p>
                    }
                <button onClick={actions.ADD}>Add</button>
            </React.Fragment>
                
        )
    });
    
    node.state({ 
            result: 0,
            first:12,
            second:23 
    });
    
    // create action for updating the state on btn click
    node.useAction(
        "ADD", 
        { 
               result: first + second
        }
    );

    export const MyFirstNode = dispatchNode(node);
