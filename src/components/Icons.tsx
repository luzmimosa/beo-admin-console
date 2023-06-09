import { styled } from '@nextui-org/react';

// IconButton component will be available as part of the core library soon
export const IconButton = styled('button', {
    dflex: 'center',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    padding: '0',
    margin: '0',
    bg: 'transparent',
    transition: '$default',
    '&:hover': {
        opacity: '0.8'
    },
    '&:active': {
        opacity: '0.6'
    }
});

export const SvgIcons = {
    EYE: (color: string) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye"
                 viewBox="0 0 16 16">
                <path
                    stroke={color}
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                <path
                    stroke={color}
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
            </svg>
        );
    },
    PLAY: (color: string) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={color}
                 className="bi bi-play-fill" viewBox="0 0 16 16">
                <path
                    stroke={color}
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
            </svg>
        );
    },
    STOP: (color: string) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={color}
                 className="bi bi-play-fill" viewBox="0 0 16 16">
                <path
                    stroke={color}
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z"/>
            </svg>
        );
    }
}

export const ComplexIcons = {
    StyledBadge: styled('span', {
        display: 'inline-block',
        textTransform: 'uppercase',
        padding: '$2 $3',
        margin: '0 2px',
        fontSize: '10px',
        fontWeight: '$bold',
        borderRadius: '14px',
        letterSpacing: '0.6px',
        lineHeight: 1,
        boxShadow: '1px 2px 5px 0px rgb(0 0 0 / 5%)',
        alignItems: 'center',
        alignSelf: 'center',
        color: '$white',
        variants: {
            type: {
                red: {
                    bg: '$errorLight',
                    color: '$errorLightContrast'
                },
                yellow: {
                    bg: '$warningLight',
                    color: '$warningLightContrast'
                },
                green: {
                    bg: '$successLight',
                    color: '$successLightContrast'
                }
            }
        },
        defaultVariants: {
            type: 'active'
        }
    })
}