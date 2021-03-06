/* eslint-disable max-len */
import { ElemTypes } from '../../engine/elem-types.js';
import { images } from '../images';
import { ToolbarActions } from '../../engine/toolbar-actions.js';
import { actionTypes } from '../../engine/redux/action-types.js';

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
            description: `You are in the control room of your space shuttle. You are staring at the main navigation screen. 
                
            Ahead of you can see planet earth welcoming you back home. Just a tap on the navigation screen, and you can set the shuttle in orbit of your home planet.`,
            image: images.earth,
            grid: [
                {
                    index: 5,
                    content: {
                        type: actionTypes.FOCUS_ON_OBJECT,
                        objectId: 'the-sun'
                    }
                },
                {
                    index: 6,
                    content: {
                        type: actionTypes.FOCUS_ON_OBJECT,
                        objectId: 'exit-earth-orbit-control'
                    }
                }
            ]
        },
        {
            _id: 'earth-orbit',
            title: 'In Orbit Around Eearth',
            elemType: ElemTypes.ROOM,
            description: `You are staring at the main navigation screen. You can see that your shuttle is now in orbit around planet Earth...

            The crystal blue atmosphere of your home planet welcomes you back. Its color always rise happy memories of you childhood, around the family cottage besides the lake.

            You cannot wait for the moment that you get clearance to enter atmosphere. But for the time being, you don't see the approval to have reached your shuttle's communication inbox.
            `,
            image: images.earthOrbit,
            grid: [
                {
                    index: 3,
                    content: {
                        type: actionTypes.FOCUS_ON_OBJECT,
                        objectId: 'away-from-earth-orbit-control'
                    }
                },
                {
                    index: 8,
                    content: {
                        type: actionTypes.MOVE_HERO,
                        roomId: 'control-room'
                    }
                }
            ]
        },
        {
            _id: 'exit-earth-orbit-control',
            title: 'Orbit Control (Earth)',
            elemType: ElemTypes.OBJECT,
            description:
                'The "orbit control" will allow you to descend in orbit around Earth. (tap exit icon to active it).',
            actions: {
                [ToolbarActions.ROOM_EXIT]: { targetRoomId: 'earth-orbit' }
            }
        },
        {
            _id: 'the-sun',
            title: 'The Sun',
            elemType: ElemTypes.OBJECT,
            description: `It is the central star of the solar system. A life-giving yellow dwarf star mainly composed of Hydrogen and Helium.
                
            It is very hot and radio-active, so your vessel's AI will refuse to set route towards it. Your vessel was not designed for sun-surfing courses.`
        },
        {
            _id: 'away-from-earth-orbit-control',
            title: 'Out of Orbit control',
            elemType: ElemTypes.OBJECT,
            description:
                'The "out-of-orbit control" will elevate your shuttle out of Earth-orbit, and in position to leave the around Earth area. (tap exit icon to active it).',
            actions: {
                [ToolbarActions.ROOM_EXIT]: { targetRoomId: 'towards-earth' }
            }
        },
        {
            _id: 'control-room',
            title: 'Spaceship Control Room',
            elemType: ElemTypes.ROOM,
            // eslint-disable-next-line quotes
            description: `This is your spaceship's control room.

            In front of you there is the main control console. Above it the navigations panels allow you to set routes and jump-targets. Well actually the majority of the work is done by the ship's Artifical Intelligence (AI).
            `,
            image: images.spaceshipCoptit,
            grid: [
                {
                    index: 4,
                    content: {
                        type: actionTypes.FOCUS_ON_OBJECT,
                        objectId: 'control-room-window'
                    }
                },
                {
                    index: [5, 6, 7],
                    content: {
                        type: actionTypes.MOVE_HERO,
                        roomId: 'earth-orbit'
                    }
                }
            ]
        },
        {
            _id: 'control-room-window',
            title: 'Control Room Window',
            elemType: ElemTypes.OBJECT,
            description:
                'This is the one of the two control windows. It allows you to have a wide area view outside your spaceship',
            actions: {
                [ToolbarActions.VIEW]: { targetRoomId: 'earth-view-above' }
            }
        },
        {
            _id: 'earth-view-above',
            title: 'Eearth View from above',
            elemType: ElemTypes.ROOM,
            description:
                // eslint-disable-next-line prettier/prettier
                'The view of Earth\'s surface from this point is really rewarding.',
            image: images.earthViewFromWindow,
            grid: [
                {
                    index: 8,
                    content: {
                        type: actionTypes.FOCUS_ON_ROOM,
                        roomId: 'control-room'
                    }
                }
            ]
        }
    ]
};
