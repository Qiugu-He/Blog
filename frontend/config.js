import getConfig from 'next/config';

const {publicRuntimeConfig} = getConfig()

export const API = publicRuntimeConfig.PRODUCTION 
    ?'https://blog.com'
    :'http://localhost:8000/api';

export const APP_NAME = publicRuntimeConfig.APP_NAME;
    
export const DOMAIN = publicRuntimeConfig.PRODUCTION 
    ?'http://blog.com'
    :'http://localhost:3000';

export const FB_APP_ID = publicRuntimeConfig.FB_APP_ID;