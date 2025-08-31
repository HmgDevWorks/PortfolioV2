import puppeteer, { Browser } from "puppeteer";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const lang = url.searchParams.get("lang") || "es";
  const targetUrl = `${url.origin}/cv?lang=${lang}`;

  let browser: Browser | null = null;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    // A4 size optimizado para mejor calidad
    await page.setViewport({ width: 1240, height: 1754, deviceScaleFactor: 2 });
    await page.goto(targetUrl, { waitUntil: "networkidle0" });

    // Esperar a que se carguen los estilos CSS
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const buffer = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: { top: "5mm", right: "5mm", bottom: "5mm", left: "5mm" },
      preferCSSPageSize: true,
      width: "210mm",
      height: "297mm",
    });

    return new Response(new Uint8Array(buffer), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename=CV_Hector_Martin_${lang.toUpperCase()}.pdf`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("CV PDF generation failed", err);
    return new Response("Failed to generate PDF", { status: 500 });
  } finally {
    try {
      await browser?.close();
    } catch {}
  }
}
