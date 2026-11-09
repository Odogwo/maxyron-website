import {NextResponse} from 'next/server';
import {createNeonAuth} from '@neondatabase/auth/next/server';
import {learningConfigured} from '@/app/learn/server/neon-session';
export const dynamic='force-dynamic';
export const runtime='nodejs';
const denied=()=>NextResponse.json({error:'authentication_not_configured'},{status:503,headers:{'Cache-Control':'no-store'}});
async function handle(request:Request):Promise<Response>{
 if(!learningConfigured()) return denied();
 const auth=createNeonAuth({baseUrl:process.env.NEON_AUTH_BASE_URL!,cookies:{secret:process.env.NEON_AUTH_COOKIE_SECRET!,sessionDataTtl:0}});
 const handlers=auth.handler();
 return request.method==='GET'?handlers.GET(request):handlers.POST(request);
}
export async function GET(request:Request){return handle(request);}
export async function POST(request:Request){return handle(request);}
