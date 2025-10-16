import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get("lang") || "es";
    
    // Mapear idiomas a archivos
    const langMap: Record<string, string> = {
      'es': 'CV_Hector_Martin_ES.pdf',
      'en': 'CV_Hector_Martin_EN.pdf'
    };
    
    const fileName = langMap[lang] || langMap['es'];
    const filePath = join(process.cwd(), 'public', 'cvs', fileName);
    
    // Leer el archivo PDF pre-generado
    const fileBuffer = await readFile(filePath);
    
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename=${fileName}`,
        'Cache-Control': 'public, max-age=3600', // Cache por 1 hora
        'Content-Length': fileBuffer.length.toString(),
      },
    });
    
  } catch (error) {
    console.error('Error serving CV PDF:', error);
    
    // Si no existe el archivo, devolver error 404
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
      return NextResponse.json(
        { 
          error: 'CV not found', 
          message: 'The requested CV has not been generated yet. Please try again later.',
          timestamp: new Date().toISOString()
        },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to serve CV', 
        message: 'An error occurred while serving the CV file.',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}
