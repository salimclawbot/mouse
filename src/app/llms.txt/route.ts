export async function GET() {
  const body = `# Vertical Mouse Guide\n\n> Evidence-led vertical and ergonomic mouse buying guides.\n\n## Editorial signals\n- Site: https://www.verticalmouseguide.com\n- About: https://www.verticalmouseguide.com/about\n- Editorial Policy: https://www.verticalmouseguide.com/editorial-policy\n- Corrections Policy: https://www.verticalmouseguide.com/corrections-policy\n- Affiliate Disclosure: https://www.verticalmouseguide.com/affiliate-disclosure\n- Privacy Policy: https://www.verticalmouseguide.com/privacy-policy\n- Terms of Service: https://www.verticalmouseguide.com/terms-of-service\n\n## Contact\n- hello@verticalmouseguide.com\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
