import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
function unavailable(){
 return NextResponse.json(
  {error:'learner_storage_not_configured',message:'Authenticated learner storage is not enabled.'},
  {status:503,headers:{'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}}
 );
}
export function GET(){return unavailable();}
export function POST(){return unavailable();}
