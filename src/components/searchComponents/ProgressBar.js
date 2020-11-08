import React from 'react'
import { Icon, Step } from 'semantic-ui-react'
import './progress.css';
const ProgressBar = (props) => {
    

    return (<div className="ui">
            <Step.Group>
                <Step active = {(props.status!=0) ? true : false}
                 disabled={(props.status>=1) ? false : true} 
                 completed={(props.status>=2) ? true : false}
                 >
                <Icon name='search' />
                <Step.Content>
                    <Step.Title>Searching</Step.Title>
                    <Step.Description>Go ahead and search for it!</Step.Description>
                </Step.Content>
                </Step>

                <Step disabled={(props.status>=2) ? false: true}>
                <Icon name='eye' />
                <Step.Content>
                    <Step.Title>Watching</Step.Title>
                    <Step.Description>Open your eyes and ears</Step.Description>
                </Step.Content>
                </Step>

                <Step disabled={(props.status>=3) ? false : true}>
                <Icon name='repeat' />
                <Step.Content>
                    <Step.Title>Enjoying</Step.Title>
                    <Step.Description>Try another video next!</Step.Description>
                </Step.Content>
                </Step>
            </Step.Group>
            </div>);
}

export default ProgressBar;
