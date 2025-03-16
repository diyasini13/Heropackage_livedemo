import { Solution } from '../interfaces/interfaces';
import { BasicButton } from './Buttons';
import { OpenInNewTab } from '../utils/Utils';
import { SecretsManager } from '../utils/SecretsManager';

function SolutionCard(props: { solution: Solution }) {
    const { title, description, githubUrl, liveDemoLink, guidedTutorial } = props.solution;

    return (
        <div className='border-1 border-gray-300 rounded-3xl pt-3 pb-2 px-3 min-h-64 max-h-64'>
            <div className="p-4 h-3/4 sm:text-sm md:text-base">
                <p>{title}</p>
                <p className="text-gray-500">{description}</p>
            </div>
            <div className='flex h-1/4 m-auto justify-end space-x-2 items-center'>
                <BasicButton
                    text="Go Github"
                    link={githubUrl}
                    clickAction={() => OpenInNewTab(githubUrl)}
                />
                {liveDemoLink && (
                    <BasicButton
                        text="Live Demo"
                        link={liveDemoLink}
                        clickAction={() => OpenInNewTab(`${liveDemoLink}?token=${SecretsManager.getToken()}`)} // No need to pass the token here
                    />
                )}
                {guidedTutorial && (
                    <BasicButton
                        text="Guide"
                        link={guidedTutorial}
                        clickAction={() => OpenInNewTab(guidedTutorial)}
                    />
                )}

            </div>
        </div>
    );
}

export default SolutionCard;

