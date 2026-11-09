import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
export function GET() {
 return NextResponse.json(
  {error:'authentication_not_configured',message:'Learner identity is not available in this preview.'},
  {status:503,headers:{'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}}
 );
}
