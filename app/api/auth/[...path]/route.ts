import {NextResponse} from 'next/server';
import {createNeonAuth} from '@neondatabase/auth/next/server';
import {learningConfigured} from '@/app/learn/server/neon-session';
export const dynamic='force-dynamic';
export const runtime='nodejs';
const denied=()=>NextResponse.json({error:'authentication_not_configured'},{status:503,headers:{'Cache-Control':'no-store'}});
type AuthRouteContext={params:Promise<{path:string[]}>};
async function handle(request:Request,context:AuthRouteContext):Promise<Response>{
 if(!learningConfigured()) return denied();
 const auth=createNeonAuth({baseUrl:process.env.NEON_AUTH_BASE_URL!,cookies:{secret:process.env.NEON_AUTH_COOKIE_SECRET!,sessionDataTtl:0}});
 const handlers=auth.handler();
 return request.method==='GET'?handlers.GET(request,context):handlers.POST(request,context);
}
export async function GET(request:Request,context:AuthRouteContext){return handle(request,context);}
export async function POST(request:Request,context:AuthRouteContext){return handle(request,context);}
