import { Package } from '../interfaces/interfaces'
import SolutionCard from './SolutionCard'
import { GetNewKey } from '../utils/KeyGenerator';

function SolutionPackage(props: { package: Package }) {
    const { packageName, solutions } = props.package;

    return (
        <div className='px-4'>
            <p className='my-4 text-xl font-bold text-gray-500'>{packageName}</p>
            {/* <div className='flex space-x-4 space-y-2'> */}
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                {
                    solutions.map((solution) => (
                        <SolutionCard key={GetNewKey()} solution={solution} />
                    ))
                }
            </div>
        </div>
    )
}

export default SolutionPackage