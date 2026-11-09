import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
export function POST(){
 return NextResponse.json(
  {error:'learner_events_not_configured',message:'Authenticated event ingestion is not enabled.'},
  {status:503,headers:{'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}}
 );
}
