const ROOT_DOMAIN = process.env.NEXT_PUBLIC_API_HOST;
export function generateUrlByService(service, path){
    return `https://${service}.${ROOT_DOMAIN}/api/${path}`;
}