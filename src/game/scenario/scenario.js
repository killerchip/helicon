/* eslint-disable max-len */
import { ElemTypes } from '../../engine/elem-types.js';
import { images } from '../images';
import { CellContentTypes } from '../../engine/cell-content-types.js';
import { ToolbarActions } from '../../engine/toolbar-actions.js';

export const scenario = {
    hero: {
        locationId: 'towards-earth'
    },
    camera: {
        roomId: 'intro1',
        objectId: null
    },
    elements: [
        {
            _id: 'intro1',
            title: 'In a galaxy far far away...',
            elemType: ElemTypes.ROOM,
            description: `In a galaxy far far away, the planetary Emperor Khaghanin AB is on his death bed, surrounded by his family.
        
            For almost 250 years he has kept the peace amongst the nations of planet Helicon. He was always fair and just to all heliconers and the majority of them held him in high perspective. That does not mean that he was not forced to be 'brutal' against peace-threateners from time to time.
    
            But his worries now rested on his successors. Could they in fact keep the peace and prosperity of his people?
            `,
            actions: {
                [ToolbarActions.NARRATION_NEXT]: { targetRoomId: 'intro2' }
            },
            image: images.intro1
        },
        {
            _id: 'intro2',
            title: 'Meanwhile in our solar system...',
            elemType: ElemTypes.ROOM,
            description: `You are Jason Krik, a freelancer mining contractor in the outer rims of our solar system.
            
            You have been away from planet earth on mining operations for the past 10 years. These hard-worked years extracting Lithium operations provided a worthy amount of credits to allow you establish a well-being living back in planet Earth.
    
            You woke up from the last month's hybernation. The system's control panel indicates that the vessel approaches at last planet earth. 
            `,
            actions: {
                [ToolbarActions.NARRATION_PREV]: { targetRoomId: 'intro1' },
                [ToolbarActions.NARRATION_NEXT]: {
                    targetRoomId: 'towards-earth'
                }
            },
            image: images.intro2
        },
        {
            _id: 'towards-earth',
            title: 'Towards earth',
            elemType: ElemTypes.ROOM,
            description:
                'You are in the control room of your space shuttle. Ahead of you can see planet earth welcoming you back home. Just a tap on the navigation screen, and you can set the shuttle in orbit of your home planet.',
            image: images.earth,
            grid: [
                {
                    index: 5,
                    contentType: CellContentTypes.OBJECT,
                    content: {
                        objectId: 'the-sun'
                    }
                }
            ]
        },
        {
            _id: 'earth-orbit',
            title: 'In Orbit Around Eearth',
            elemType: ElemTypes.ROOM,
            description: 'Your shuttle is now in orbit around planet Earth...'
        },
        {
            _id: 'exit-earth-orbit-control',
            title: 'Orbit Control (Earth)',
            elemType: ElemTypes.OBJECT,
            description:
                'The "orbit control" will allow you to descend in orbit around Earth.'
        },
        {
            _id: 'the-sun',
            title: 'The Sun',
            elemType: ElemTypes.OBJECT,
            description: `It is the central star of the solar system. A life-giving yellow dwarf star mainly composed of Hydrogen and Helium.
                
            It is very hot and radio-active, so your vessel's AI will refuse to set route towards it. Your vessel was not designed for sun-surfing courses.`
        }
    ]
};
